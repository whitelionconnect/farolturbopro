import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, BadgeDollarSign, BookOpen, Check, CircleHelp, Gift, Lock, Megaphone, Package,
  PenTool, Search, ShieldCheck, ShieldOff, Sparkles, TriangleAlert, Wrench, XCircle,
} from "lucide-react";
import hero from "@/assets/hero.jpg.asset.json";
import compare from "@/assets/compare.jpg.asset.json";
import pro from "@/assets/pro.jpg.asset.json";
import polish from "@/assets/polish.jpg.asset.json";
import pricing from "@/assets/pricing.jpg.asset.json";
import ebook from "@/assets/ebook.png.asset.json";
import glow from "@/assets/glow.jpg.asset.json";
import restored from "@/assets/restored.jpg.asset.json";
import bonusChecklist from "@/assets/bonus-checklist.jpg.asset.json";
import bonusPlanilha from "@/assets/bonus-planilha.jpg.asset.json";
import bonusWhatsapp from "@/assets/bonus-whatsapp.jpg.asset.json";

const CHECKOUT_URL = "https://pay.cakto.com.br/3br6uum_1309312";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Farol Turbo Pro — Aprenda a restaurar faróis | R$ 19,90" },
      { name: "description", content: "Guia prático de restauração de faróis: diagnóstico, lixamento, polimento, proteção UV, precificação e primeiros clientes." },
      { property: "og:title", content: "Farol Turbo Pro — Restauração de faróis do zero" },
      { property: "og:description", content: "Aprenda a restaurar faróis e transformar essa habilidade em renda. Ebook + 3 bônus por R$ 19,90." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: hero.url },
      { name: "twitter:image", content: hero.url },
    ],
  }),
  component: Index,
});

function Cta({ children = "QUERO APRENDER AGORA!", href = CHECKOUT_URL, className = "" }: { children?: React.ReactNode; href?: string; className?: string }) {
  const external = href.startsWith("http");
  return (
    <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className={`btn-cta px-7 py-4 text-base ${className}`}>
      {children} <ArrowRight className="h-5 w-5" />
    </a>
  );
}

function SectionTitle({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-4 text-2xl font-extrabold uppercase leading-tight sm:text-4xl">{title}</h2>
      {children && <div className="mt-5 space-y-4 text-muted-foreground sm:text-lg">{children}</div>}
    </div>
  );
}

function Index() {
  const problems = [
    { icon: CircleHelp, t: "Falta de conhecimento", d: "Não sabe quais materiais utilizar nem qual sequência seguir." },
    { icon: XCircle, t: "Resultado insatisfatório", d: "Já tentou receitas caseiras ou procedimentos improvisados e não gostou do resultado." },
    { icon: ShieldOff, t: "Falta de proteção", d: "Não entende como proteger corretamente a lente depois da restauração." },
    { icon: BadgeDollarSign, t: "Insegurança comercial", d: "Não sabe quanto cobrar ou como apresentar o serviço para um cliente." },
  ];
  const steps = [
    { n: "01", t: "Recuperar", d: "Aprenda a avaliar a lente, identificar os tipos de desgaste e executar as etapas de lixamento e polimento.", img: pro.url },
    { n: "02", t: "Proteger", d: "Entenda a importância da proteção final, dos produtos adequados e do respeito às instruções e ao tempo de cura do fabricante.", img: restored.url },
    { n: "03", t: "Monetizar", d: "Aprenda a calcular os custos, definir preços e apresentar seu trabalho para potenciais clientes.", img: pricing.url },
  ];
  const bonuses = [
    {
      n: "01",
      t: "Checklist de Restauração em 12 Etapas",
      highlight: "Mais organização. Menos etapas esquecidas.",
      d: "Um material de consulta rápida para acompanhar as etapas de cada restauração, desde a avaliação inicial da lente até a conferência do acabamento final.",
      items: ["Sequência de trabalho organizada.", "Conferência dos materiais necessários.", "Acompanhamento das etapas de lixamento e polimento.", "Verificação da proteção final e do acabamento."],
      closing: "Tenha um roteiro visual para consultar durante a execução dos serviços.",
      img: bonusChecklist.url,
    },
    {
      n: "02",
      t: "Planilha de Custo por Serviço",
      highlight: "Saiba quanto custa cada restauração.",
      d: "Uma planilha editável para registrar seus gastos e entender melhor os custos envolvidos em cada serviço.",
      items: ["Registro dos materiais utilizados.", "Cálculo do custo dos produtos.", "Controle de custos adicionais.", "Registro do tempo de trabalho.", "Comparação entre custo e preço cobrado.", "Estimativa do resultado por serviço."],
      closing: "Tenha mais clareza para definir seus preços e acompanhar seus custos.",
      img: bonusPlanilha.url,
    },
    {
      n: "03",
      t: "Mensagens Prontas para WhatsApp",
      highlight: "Saiba o que responder ao seu cliente.",
      d: "Uma coleção de modelos editáveis de mensagens para ajudar você a apresentar seu serviço, conversar com interessados e enviar orçamentos.",
      items: ["Primeira resposta ao interessado.", "Solicitação de fotos do veículo.", "Apresentação do serviço.", "Envio de orçamento.", "Respostas a objeções de preço.", "Acompanhamento de interessados.", "Confirmação de agendamento."],
      closing: "Tenha modelos de comunicação para atender com mais clareza e profissionalismo.",
      img: bonusWhatsapp.url,
    },
  ];
  const learn = [
    { icon: Search, t: "Diagnóstico da lente", d: "Identifique oxidação, amarelamento, riscos, umidade interna e situações em que a restauração não é indicada." },
    { icon: Wrench, t: "Lixamento e polimento", d: "Conheça a sequência de granulações, os movimentos de trabalho e os cuidados para alcançar um acabamento adequado." },
    { icon: ShieldCheck, t: "Proteção UV", d: "Aprenda sobre a aplicação da proteção final, compatibilidade dos produtos e respeito ao tempo de cura." },
    { icon: Package, t: "Materiais e kit inicial", d: "Conheça os materiais e ferramentas necessários para planejar seu início." },
    { icon: TriangleAlert, t: "Erros e correções", d: "Entenda como identificar marcas, manchas, acabamento fosco e possíveis causas de falhas." },
    { icon: PenTool, t: "Precificação", d: "Aprenda a considerar materiais, tempo de trabalho e margem para calcular o preço do serviço." },
    { icon: Megaphone, t: "Divulgação e primeiros clientes", d: "Descubra como apresentar seu trabalho e conquistar os primeiros clientes, mesmo começando do zero." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
          <a href="#" className="truncate font-display text-lg font-extrabold tracking-tight sm:text-xl">
            FAROL <span className="text-primary">TURBO PRO</span>
          </a>
          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="btn-cta shrink-0 px-4 py-2 text-xs sm:px-5 sm:text-sm">QUERO APRENDER</a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-[1.05fr_1fr] lg:py-20">
          <div className="animate-rise">
            <span className="eyebrow">Guia prático de restauração automotiva</span>
            <h1 className="mt-5 text-3xl font-extrabold uppercase leading-[1.1] sm:text-5xl">
              Aprenda a restaurar faróis e descubra como transformar essa habilidade em uma{" "}
              <span className="text-primary">oportunidade de renda!</span>
            </h1>
            <p className="mt-5 text-muted-foreground sm:text-lg">
              Aprenda o processo de diagnóstico, lixamento, polimento e proteção UV. Descubra também como calcular seus preços e conquistar os primeiros clientes, mesmo começando do zero.
            </p>
            <ul className="mt-6 space-y-3">
              {["Aprenda as etapas de restauração.", "Conheça os materiais necessários.", "Descubra como precificar e divulgar o serviço."].map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-success/15 text-success"><Check className="h-4 w-4" /></span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col items-start gap-3">
              <Cta href={CHECKOUT_URL} className="w-full sm:w-auto" />
              <p className="text-sm text-muted-foreground">Ebook digital + 3 bônus | <strong className="font-display text-foreground">R$ 19,90</strong></p>
            </div>
          </div>
          <div className="relative animate-rise [animation-delay:150ms]">
            <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
              <img src={hero.url} alt="Comparação de farol amarelado e farol restaurado" className="aspect-[4/3] w-full object-cover" />
            </div>
            <span className="absolute left-4 top-4 rounded-md bg-destructive px-3 py-1 font-display text-xs font-bold">ANTES</span>
            <span className="absolute right-4 top-4 rounded-md bg-success px-3 py-1 font-display text-xs font-bold text-primary-foreground">DEPOIS</span>
            <p className="mt-3 text-center text-xs text-muted-foreground">Imagem ilustrativa.</p>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="border-y border-border bg-secondary py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle title="Você não precisa apenas saber polir. Precisa saber fazer do jeito certo.">
            <p>Um farol amarelado, fosco ou oxidado compromete a aparência do veículo e pode afetar a iluminação. Mas tentar recuperar uma lente sem conhecer o processo pode gerar marcas, manchas e acabamentos irregulares.</p>
          </SectionTitle>
          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <img src={compare.url} alt="Lente oxidada ao lado de lente restaurada" className="w-full rounded-2xl border border-border object-cover shadow-soft" />
            <div className="grid gap-4 sm:grid-cols-2">
              {problems.map(({ icon: I, t, d }) => (
                <div key={t} className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                  <I className="h-7 w-7 text-primary" />
                  <h3 className="mt-4 font-bold">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OPORTUNIDADE */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
          <img src={pro.url} alt="Profissional lixando um farol automotivo" className="w-full rounded-2xl border border-border object-cover shadow-soft" />
          <div>
            <span className="eyebrow">A oportunidade</span>
            <h2 className="mt-4 text-2xl font-extrabold uppercase leading-tight sm:text-4xl">Uma habilidade prática pode se transformar em uma nova oportunidade.</h2>
            <div className="mt-5 space-y-4 text-muted-foreground">
              <p>Veículos com faróis amarelados e deteriorados fazem parte da realidade de muitas cidades. Quando a condição da lente permite recuperação, a restauração pode ser uma alternativa à substituição.</p>
              <p>É um serviço que pode ser estudado por iniciantes e incorporado por profissionais que já trabalham com estética automotiva.</p>
            </div>
            <blockquote className="mt-6 rounded-xl border-l-4 border-primary bg-card p-5 font-medium">
              Você não precisa começar com uma oficina completa. Precisa começar entendendo o processo, os materiais e os cuidados necessários.
            </blockquote>
          </div>
        </div>
      </section>

      {/* MÉTODO */}
      <section className="border-y border-border bg-secondary py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle eyebrow="O método" title="Do primeiro diagnóstico à possibilidade de oferecer seu primeiro serviço." />
          <div className="relative mt-12 grid gap-6 md:grid-cols-3">
            <div className="absolute left-[16%] right-[16%] top-[5.5rem] hidden h-px bg-gradient-to-r from-primary/0 via-primary to-primary/0 md:block" />
            {steps.map((s) => (
              <div key={s.n} className="relative overflow-hidden rounded-2xl border border-border bg-card">
                <img src={s.img} alt={s.t} className="h-44 w-full object-cover opacity-80" />
                <div className="p-6">
                  <span className="font-display text-sm font-extrabold tracking-widest text-primary">ETAPA {s.n}</span>
                  <h3 className="mt-1 text-2xl font-extrabold uppercase">{s.t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE VAI APRENDER */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle eyebrow="Conteúdo do guia" title="Um guia completo para entender a restauração de faróis." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {learn.map(({ icon: I, t, d }, i) => (
              <div key={t} className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary"><I className="h-5 w-5" /></span>
                  <span className="font-display text-sm font-bold text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-4 font-bold uppercase">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
            <div className="relative overflow-hidden rounded-xl border border-border">
              <img src={polish.url} alt="Polimento de farol" className="h-full min-h-48 w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* BÔNUS */}
      <section className="border-y border-border bg-secondary py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle eyebrow="Bônus inclusos" title="E não é só o guia. Você também recebe 3 ferramentas para facilitar sua jornada!">
            <p>Além de aprender o processo de restauração, você recebe materiais práticos para organizar seus serviços, controlar seus custos e conversar com seus primeiros clientes.</p>
          </SectionTitle>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {bonuses.map((b, i) => (
              <div key={b.n} className="animate-rise overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-colors hover:border-primary/40" style={{ animationDelay: `${i * 120}ms` }}>
                <img src={b.img} alt={b.t} className="w-full object-contain" />
                <div className="p-6 sm:p-7">
                  <span className="font-display text-sm font-extrabold tracking-widest text-primary">BÔNUS {b.n}</span>
                  <h3 className="mt-2 text-xl font-extrabold uppercase leading-tight">{b.t}</h3>
                  <p className="mt-2 font-display font-bold text-primary">{b.highlight}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{b.d}</p>
                  <ul className="mt-5 space-y-2.5">
                    {b.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-success/15 text-success"><Check className="h-3.5 w-3.5" /></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 border-t border-border pt-4 text-sm font-medium text-muted-foreground">{b.closing}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-primary/40 bg-card p-8 text-center shadow-glow">
            <h3 className="text-xl font-extrabold uppercase leading-tight sm:text-2xl">Você aprende a restaurar e ainda recebe ferramentas para colocar o conhecimento em prática.</h3>
            <p className="mt-3 text-muted-foreground">São quatro materiais digitais em uma única oferta: o guia principal e três bônus complementares.</p>
            <p className="mt-6 font-display text-5xl font-extrabold text-primary">R$ 19,90</p>
            <Cta href={CHECKOUT_URL} className="mt-6 w-full sm:w-auto">QUERO RECEBER MEU KIT COMPLETO!</Cta>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="scroll-mt-16 border-y border-border bg-secondary py-16 sm:py-24">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 lg:grid-cols-2">
          <img src={ebook.url} alt="Ebook Farol Turbo Pro" className="mx-auto w-full max-w-md rounded-2xl shadow-soft" />
          <div className="rounded-2xl border border-primary/40 bg-card p-8 shadow-glow">
            <span className="eyebrow">Oferta</span>
            <h2 className="mt-4 text-2xl font-extrabold uppercase sm:text-3xl">Farol Turbo Pro</h2>
            <ul className="mt-6 space-y-3">
              <li className="flex gap-3"><BookOpen className="h-5 w-5 shrink-0 text-primary" /> Ebook digital completo</li>
              <li className="flex gap-3"><Gift className="h-5 w-5 shrink-0 text-primary" /> 3 bônus inclusos</li>
              <li className="flex gap-3"><Sparkles className="h-5 w-5 shrink-0 text-primary" /> Acesso imediato após a compra</li>
            </ul>
            <div className="mt-8 border-t border-border pt-6">
              <p className="text-sm text-muted-foreground">Pagamento único</p>
              <p className="font-display text-5xl font-extrabold text-primary">R$ 19,90</p>
            </div>
            <Cta href={CHECKOUT_URL} className="mt-6 w-full">QUERO MEU ACESSO</Cta>
            <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground"><Lock className="h-3.5 w-3.5" /> Compra segura</p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <img src={glow.url} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background" />
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-extrabold uppercase leading-tight sm:text-4xl">Comece a entender o processo <span className="text-primary">hoje.</span></h2>
          <p className="mt-4 text-muted-foreground">Ebook digital + 3 bônus por apenas R$ 19,90.</p>
          <Cta href={CHECKOUT_URL} className="mt-8" />
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        <p className="font-display font-extrabold text-foreground">FAROL <span className="text-primary">TURBO PRO</span></p>
        <p className="mt-2">Imagens ilustrativas. Resultados dependem da condição da lente e da aplicação correta do processo.</p>
        <p className="mt-1">© {new Date().getFullYear()} Farol Turbo Pro. Todos os direitos reservados.</p>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-4">
          <Link to="/privacidade" className="text-primary underline">Política de privacidade</Link>
          <Button variant="link" size="sm" onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}>Configurações de cookies</Button>
        </div>
      </footer>
    </div>
  );
}
