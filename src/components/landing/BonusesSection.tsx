import { ArrowRight, Check, Gift } from "lucide-react";
import { BONUSES } from "./landing-data";

export function BonusesSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">5 bônus inclusos sem custo adicional</span>
          <h2 className="mt-4 text-2xl font-extrabold uppercase leading-tight sm:text-4xl">
            Ferramentas práticas para organizar seus custos, atendimentos e primeiros clientes.
          </h2>
          <p className="mt-5 text-muted-foreground sm:text-lg">
            Além das 22 videoaulas e do ebook completo, você recebe cinco materiais digitais de apoio pelo Google Drive.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {BONUSES.map((bonus) => {
            const Icon = bonus.icon;
            return (
              <article
                key={bonus.n}
                className={`grid items-center gap-6 rounded-2xl border border-border bg-card p-6 sm:p-8 ${
                  bonus.img ? "lg:grid-cols-[240px_1fr]" : "lg:grid-cols-[88px_1fr]"
                }`}
              >
                {bonus.img ? (
                  <div className="mx-auto w-full max-w-[240px] overflow-hidden rounded-xl border border-border bg-secondary">
                    <img
                      src={bonus.img}
                      alt={`Capa do bônus ${bonus.t}`}
                      width={bonus.width}
                      height={bonus.height}
                      loading="lazy"
                      decoding="async"
                      className="h-auto w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
                    {Icon ? <Icon className="h-9 w-9" /> : <Gift className="h-9 w-9" />}
                  </div>
                )}

                <div className="min-w-0">
                  <span className="font-display text-xs font-extrabold tracking-widest text-primary">
                    BÔNUS {bonus.n} · INCLUSO
                  </span>
                  <h3 className="mt-1.5 text-xl font-extrabold uppercase sm:text-2xl">{bonus.t}</h3>
                  <p className="mt-1 text-sm font-semibold text-primary">{bonus.highlight}</p>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{bonus.d}</p>
                  <ul className="mt-4 flex flex-col gap-2">
                    {bonus.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-base">
                        <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-success/15 text-success">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a href="#oferta" className="btn-cta w-full px-7 py-4 text-base sm:w-auto">
            VER OFERTA COMPLETA <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}