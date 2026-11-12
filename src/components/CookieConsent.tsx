import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { needsAnswer, onConsentChange, readChoice, saveChoices, type Purpose } from "@/lib/consent";
import { startMetaPixel } from "@/lib/meta-pixel";

const purposes: Purpose[] = ["analytics", "advertising"];

export function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [advertising, setAdvertising] = useState(false);
  const [gpc, setGpc] = useState(false);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const refresh = () => {
      setAnalytics(readChoice("analytics") === "granted");
      setAdvertising(readChoice("advertising") === "granted");
      setGpc((navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true);
    };
    const show = () => { refresh(); setSettings(true); setOpen(true); };
    refresh();
    void needsAnswer(purposes).then(setOpen);
    const unsubscribe = onConsentChange(refresh);
    const stopPixel = startMetaPixel();
    window.addEventListener("open-cookie-settings", show);
    return () => { unsubscribe(); stopPixel(); window.removeEventListener("open-cookie-settings", show); };
  }, []);
  useEffect(() => { if (open) panel.current?.focus(); }, [open]);

  const save = (a: boolean, ad: boolean) => {
    saveChoices({ analytics: a ? "granted" : "denied", advertising: ad ? "granted" : "denied" });
    try {
      const previous = JSON.parse(localStorage.getItem("farol_consent_evidence") ?? "[]");
      localStorage.setItem("farol_consent_evidence", JSON.stringify([...previous, {
        at: new Date().toISOString(), notice: "farol-privacy-2026-11-12", analytics: a && !gpc,
        advertising: ad && !gpc, gpc, recipients: ["Lovable", "Meta"],
      }]));
    } catch { /* Consent module retains the choice even if storage is unavailable. */ }
    setOpen(false);
    setSettings(false);
  };
  if (!open) return null;
  return (
    <div ref={panel} tabIndex={-1} role="dialog" aria-modal="false" aria-labelledby="cookie-title" className="fixed bottom-4 left-4 right-4 z-[60] mx-auto max-h-[85vh] max-w-xl overflow-auto rounded-lg border border-border bg-card p-5 text-foreground shadow-soft sm:p-6">
      <h2 id="cookie-title" className="text-lg font-bold">{settings ? "Configurações de cookies" : "Sua privacidade"}</h2>
      <p className="mt-3 text-sm text-muted-foreground">Contamos visitas sem cookies. Com sua autorização, medimos cliques e usamos cookies para medir visitas vindas de anúncios e personalizar publicidade.</p>
      <Link to="/privacidade" className="mt-2 inline-block text-sm text-primary underline">Política de privacidade</Link>
      {settings && <div className="mt-4 space-y-4 border-t border-border pt-4">
        <div className="flex justify-between gap-4 text-sm"><span>Necessários</span><span className="text-muted-foreground">Sempre ativos</span></div>
        {gpc && <p className="text-sm text-muted-foreground">O sinal de privacidade do seu navegador impede o rastreamento.</p>}
        <label className="flex items-center justify-between gap-4 text-sm">Análise de visitas, fornecida pela Lovable<Switch aria-label="Análise de visitas" checked={analytics} onCheckedChange={setAnalytics} disabled={gpc} /></label>
        <label className="flex items-center justify-between gap-4 text-sm">Publicidade, fornecida pela Meta<Switch aria-label="Publicidade" checked={advertising} onCheckedChange={setAdvertising} disabled={gpc} /></label>
        <Button className="w-full" onClick={() => save(analytics, advertising)}>Salvar preferências</Button>
      </div>}
      {!settings && <>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <Button variant="outline" onClick={() => save(false, false)}>Rejeitar todos</Button>
          <Button variant="outline" onClick={() => save(true, true)}>Aceitar todos</Button>
        </div>
        <Button variant="link" className="mt-2 w-full" onClick={() => setSettings(true)}>Configurações de cookies</Button>
      </>}
    </div>
  );
}