import { useState } from "react";
import { ArrowRight, Check, FolderDown } from "lucide-react";
import ebook from "@/assets/ebook.webp";
import { HEADLINE_OPTIONS, type HeadlineKey } from "./landing-data";

const HERO_BULLETS = [
  "22 videoaulas práticas + Ebook Farol Turbo Pro",
  "5 bônus inclusos: checklist, planilhas, WhatsApp e prospecção",
  "Pagamento único de R$ 19,90, sem mensalidades",
];

export function HeroSection() {
  const [selectedHeadline, setSelectedHeadline] = useState<HeadlineKey>("dominio");
  const activeHeadline =
    HEADLINE_OPTIONS.find((option) => option.key === selectedHeadline) ?? HEADLINE_OPTIONS[0]!;

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-6 px-4 py-6 sm:py-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:py-12">
        <div className="min-w-0 animate-rise">
          <div className="flex flex-wrap items-center gap-2">
            <span className="eyebrow">Produto 100% digital · Acesso pelo Google Drive</span>
            <div
              role="tablist"
              aria-label="Opções de título principal"
              className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary p-1"
            >
              {HEADLINE_OPTIONS.map((option) => {
                const isSelected = option.key === activeHeadline.key;
                return (
                  <button
                    key={option.key}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedHeadline(option.key)}
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                      isSelected
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>

          <h1 className="mt-4 text-2xl font-extrabold uppercase leading-[1.12] sm:text-4xl lg:text-[2.75rem]">
            {activeHeadline.prefix}
            <span className="text-primary">{activeHeadline.highlight}</span>
            {activeHeadline.suffix ?? ""}
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base lg:text-lg">
            Aprenda a avaliar a lente, executar lixamento, polimento e proteção UV na ordem certa, calcular o custo de cada serviço e apresentar seu trabalho com segurança — mesmo começando do zero.
          </p>

          <ul className="mt-4 space-y-2 sm:mt-5 sm:space-y-2.5">
            {HERO_BULLETS.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2.5 text-sm sm:text-base">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-success/15 text-success">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-col items-start gap-2.5 sm:mt-6">
            <a href="#product-preview" className="btn-cta w-full px-6 py-3.5 text-sm sm:w-auto sm:px-7 sm:py-4 sm:text-base">
              VER POR DENTRO DO MATERIAL <ArrowRight className="h-5 w-5 shrink-0" />
            </a>
            <p className="flex items-center gap-2 text-xs text-muted-foreground">
              <FolderDown className="h-4 w-4 shrink-0 text-primary" />
              <span>Acesso digital após confirmação do pagamento por link do Google Drive · Nenhum produto físico</span>
            </p>
          </div>
        </div>

        <div className="animate-rise [animation-delay:120ms]">
          <div className="mx-auto max-w-[260px] overflow-hidden rounded-2xl border border-border bg-card shadow-soft sm:max-w-[340px] lg:max-w-[400px]">
            <img
              src={ebook}
              alt="Capa do Ebook Farol Turbo Pro em tablet"
              width={749}
              height={853}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}