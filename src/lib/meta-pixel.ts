import { canTrack, onConsentChange } from "./consent";

export const PIXEL_ID = "1640915633805657";
type Pixel = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  push: Pixel;
  loaded: boolean;
  version: string;
};
declare global {
  interface Window { fbq?: Pixel; _fbq?: Pixel }
}
let initialized = false;
let pageViewed = false;

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
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);
  return pixel;
}

/** One PageView per document; blocked visits are never replayed. */
export function startMetaPixel(): () => void {
  let active = true;
  let revision = 0;
  const sync = async () => {
    const current = ++revision;
    // Revoke immediately, including while a location request is pending.
    window.fbq?.("consent", "revoke");
    const permitted = await canTrack("advertising");
    if (!active || current !== revision || !permitted) return;
    const pixel = loadPixel();
    pixel("consent", "grant");
    if (!initialized) {
      pixel("set", "autoConfig", false, PIXEL_ID);
      pixel("init", PIXEL_ID, {}, { agent: "lovable" });
      initialized = true;
    }
    if (!pageViewed && window.location.pathname === "/") {
      pixel("track", "PageView", {}, { eventID: crypto.randomUUID() });
      pageViewed = true;
    }
  };
  const unsubscribe = onConsentChange(() => { void sync(); });
  void sync();
  return () => { active = false; unsubscribe(); };
}