
import { beforeEach, describe, expect, it, vi } from "vitest";

describe("requested Meta Pixel", () => {
  beforeEach(() => {
    vi.resetModules();
    localStorage.clear();
    delete window.fbq;
    delete window._fbq;
    delete window.__farolMetaPixelState;

    document.head
      .querySelectorAll('script[src*="fbevents"]')
      .forEach((script) => script.remove());

    Object.defineProperty(navigator, "globalPrivacyControl", {
      configurable: true,
      value: false,
    });

    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        text: async () => `h=${location.hostname}\nloc=CA`,
      }),
    );
  });

  it("blocks an unanswered visitor in Canada", async () => {
    const { startMetaPixel } = await import("@/lib/meta-pixel");

    const stop = startMetaPixel();

    await vi.waitFor(() => expect(fetch).toHaveBeenCalled());

    expect(window.fbq).toBeUndefined();

    stop();
  });

  it("uses Pixel 1770089784096794 and sends only one PageView after acceptance", async () => {
    const { saveChoices } = await import("@/lib/consent");
    const { startMetaPixel } = await import("@/lib/meta-pixel");

    saveChoices({ advertising: "granted" });

    const stop = startMetaPixel();

    await vi.waitFor(() =>
      expect(
        window.fbq?.queue.some((args) => args[0] === "init"),
      ).toBe(true),
    );

    expect(
      window.fbq?.queue.find((args) => args[0] === "init"),
    ).toEqual([
      "init",
      "1770089784096794",
      {},
      { agent: "lovable" },
    ]);

    // Testa a desmontagem e a inicialização novamente.
    stop();

    const stopRemounted = startMetaPixel();

    await vi.waitFor(() =>
      expect(window.__farolMetaPixelState?.consent).toBe("granted"),
    );

    // A retirada do consentimento deve revogar a permissão.
    saveChoices({ advertising: "denied" });

    await vi.waitFor(() =>
      expect(window.fbq?.queue.at(-1)).toEqual(["consent", "revoke"]),
    );

    // Uma nova autorização não deve gerar outro PageView.
    saveChoices({ advertising: "granted" });

    await new Promise((resolve) => setTimeout(resolve, 10));

    expect(
      window.fbq?.queue.filter(
        (args) => args[0] === "track" && args[1] === "PageView",
      ),
    ).toHaveLength(1);

    expect(
      window.fbq?.queue.filter((args) => args[0] === "init"),
    ).toHaveLength(1);

    stopRemounted();
  });

  it("analytics acceptance alone does not allow advertising", async () => {
    const { saveChoices, canTrack } = await import("@/lib/consent");

    saveChoices({ analytics: "granted" });

    expect(await canTrack("advertising")).toBe(false);
  });

  it("Global Privacy Control overrides saved advertising acceptance", async () => {
    const { saveChoices, canTrack } = await import("@/lib/consent");

    saveChoices({ advertising: "granted" });

    Object.defineProperty(navigator, "globalPrivacyControl", {
      configurable: true,
      value: true,
    });

    expect(await canTrack("advertising")).toBe(false);
  });

  it("does not initialize the Pixel when GPC overrides acceptance", async () => {
    const { saveChoices } = await import("@/lib/consent");
    const { startMetaPixel } = await import("@/lib/meta-pixel");

    saveChoices({ advertising: "granted" });

    Object.defineProperty(navigator, "globalPrivacyControl", {
      configurable: true,
      value: true,
    });

    const stop = startMetaPixel();

    await vi.waitFor(() =>
      expect(window.__farolMetaPixelState?.consent).toBe("denied"),
    );

    expect(window.fbq).toBeUndefined();
    expect(window.__farolMetaPixelState?.initialized).toBe(false);
    expect(window.__farolMetaPixelState?.pageViewed).toBe(false);

    stop();
  });
});
