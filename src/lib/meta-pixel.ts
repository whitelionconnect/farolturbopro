import { canTrack, onConsentChange } from "./consent";

export const PIXEL_ID = "1640915633805657";

type Pixel = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  push: Pixel;
  loaded: boolean;
  version: string;
};

type PixelDocumentState = {
  initialized: boolean;
  pageViewed: boolean;
  consent: "granted" | "denied" | "unknown";
  revision: number;
};

declare global {
  interface Window {
    fbq?: Pixel;
    _fbq?: Pixel;
    __farolMetaPixelState?: PixelDocumentState;
  }
}

function getDocumentState(): PixelDocumentState {
  // Keep guards on window so React remounts, StrictMode and duplicated module
  // instances cannot initialize or send the landing PageView more than once.
  return (window.__farolMetaPixelState ??= {
    initialized: false,
    pageViewed: false,
    consent: "unknown",
    revision: 0,
  });
}

function loadPixel(): Pixel {
  if (window.fbq) return window.fbq;

  const pixel = function (...args: unknown[]) {
    if (pixel.callMethod) pixel.callMethod.apply(pixel, args);
    else pixel.queue.push(args);
  } as Pixel;
  pixel.queue = [];
  pixel.push = pixel;
  pixel.loaded = true;
  pixel.version = "2.0";
  window.fbq = pixel;
  window._fbq = pixel;

  // Reuse an existing SDK script if another integration has already added it.
  const existingScript = document.querySelector<HTMLScriptElement>(
    'script[src*="connect.facebook.net"][src*="fbevents.js"]',
  );
  if (!existingScript) {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);
  }

  return pixel;
}

/** One ID initialization and one landing PageView per document. */
export function startMetaPixel(): () => void {
  let active = true;
  const state = getDocumentState();

  const sync = async () => {
    const current = ++state.revision;
    const permitted = await canTrack("advertising");
    if (!active || current !== state.revision) return;

    if (!permitted) {
      // Revoke only on a real transition; repeated syncs must not emit repeats.
      if (state.consent !== "denied") {
        window.fbq?.("consent", "revoke");
        state.consent = "denied";
      }
      return;
    }

    const pixel = loadPixel();

    if (state.consent !== "granted") {
      pixel("consent", "grant");
      state.consent = "granted";
    }

    if (!state.initialized) {
      pixel("set", "autoConfig", false, PIXEL_ID);
      pixel("init", PIXEL_ID, {}, { agent: "lovable" });
      state.initialized = true;
    }

    if (!state.pageViewed && window.location.pathname === "/") {
      pixel("track", "PageView", {}, { eventID: crypto.randomUUID() });
      state.pageViewed = true;
    }
  };

  const unsubscribe = onConsentChange(() => {
    void sync();
  });
  void sync();

  return () => {
    active = false;
    // Invalidate a pending permission lookup owned by this subscription.
    state.revision += 1;
    unsubscribe();
  };
}
