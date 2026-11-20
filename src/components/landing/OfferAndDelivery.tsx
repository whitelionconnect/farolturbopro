import { ArrowRight, Check, FolderDown, Lock, ShieldCheck } from "lucide-react";
import { CHECKOUT_URL, DELIVERY_STEPS, INCLUDED_ITEMS } from "./landing-data";

export function OfferAndDelivery() {
  return (
    <>
      {/* OFERTA COMPLETA, PREÇO TRANSPARENTE, CTA DE COMPRA E GARANTIA */}
      <section id="oferta" className="scroll-mt-20 border-y border-border bg-secondary py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Oferta completa Farol Turbo Pro</span>
            <h2 className="mt-4 text-2xl font-extrabold uppercase leading-tight sm:text-4xl">
              Tudo o que você recebe em um único acesso digital.
            </h2>
            <p className="mt-5 text-muted-foreground sm:text-lg">
              Sem mensalidades e sem taxas extras: acesso completo às 22 videoaulas, ao ebook e aos cinco bônus por um pagamento único.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-primary/50 bg-card p-6 shadow-glow sm:p-9">
            <div className="text-center">
              <span className="eyebrow">FAROL TURBO PRO · ACESSO COMPLETO</span>
              <h3 className="mt-3 text-2xl font-extrabold uppercase sm:text-3xl">
                Treinamento completo + 5 bônus
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Produto 100% digital entregue após confirmação do pagamento por link do Google Drive.
              </p>
            </div>

            <div className="mt-8">
              <p className="text-base font-bold sm:text-lg">O que está incluso:</p>
              <ul className="mt-4 flex flex-col gap-3">
                {INCLUDED_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base leading-relaxed sm:text-lg">
                    <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-success/15 text-success">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border-t border-border pt-6 text-center">
              <p className="text-sm font-medium text-muted-foreground">Preço único transparente</p>
              <p className="mt-1 font-display text-5xl font-extrabold text-primary">R$ 19,90</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Pagamento único · Produto 100% digital · Acesso aos arquivos para visualização e download no Google Drive
              </p>
            </div>

            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta mt-6 w-full px-7 py-4 text-center text-base"
            >
              QUERO MEU ACESSO COMPLETO — R$ 19,90 <ArrowRight className="h-5 w-5 shrink-0" />
            </a>

            <p className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Lock className="h-3.5 w-3.5 shrink-0 text-primary" />
              <span>Checkout oficial seguro · Nenhum produto físico será enviado</span>
            </p>

            <div className="mt-6 flex items-start gap-3 rounded-xl border border-primary/40 bg-primary/5 p-4 text-left">
              <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-extrabold uppercase">7 dias de garantia</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  Acesse o conteúdo com tranquilidade e avalie o material dentro do prazo de 7 dias, conforme as condições e procedimentos da plataforma de pagamento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENTREGA DIGITAL */}
      <section className="border-b border-border bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Acesso fácil e sem espera</span>
            <h2 className="mt-4 text-2xl font-extrabold uppercase leading-tight sm:text-4xl">
              Entrega digital simples e rápida
            </h2>
            <p className="mt-5 text-muted-foreground sm:text-lg">
              Você não precisa esperar nenhum produto chegar à sua casa.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {DELIVERY_STEPS.map(({ icon: Icon, n, title, description }) => (
              <div key={n} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="font-display text-sm font-extrabold tracking-widest text-primary">
                    ETAPA {n}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-extrabold uppercase">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 flex max-w-4xl items-start gap-4 rounded-2xl border border-primary/40 bg-secondary/70 p-6 sm:p-7">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
              <FolderDown className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-extrabold uppercase">Importante: produto 100% digital</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Este é um produto 100% digital. A entrega é realizada após a confirmação do pagamento por meio de link de acesso aos arquivos no Google Drive, disponíveis para visualização e download. Não há envio de produtos físicos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}