
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ProductPreview } from "@/components/product-preview/ProductPreview";
import {
  ArrowRight,
  BadgeDollarSign,
  BookOpen,
  Check,
  CreditCard,
  Download,
  FolderDown,
  Gift,
  Lock,
  Mail,
  Megaphone,
  Package,
  PenTool,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
  Wrench,
} from "lucide-react";

import hero from "@/assets/hero.jpg";
import pro from "@/assets/pro.jpg";
import polish from "@/assets/polish.jpg";
import pricing from "@/assets/pricing.jpg";
import ebook from "@/assets/ebook.png";
import glow from "@/assets/glow.jpg";
import restored from "@/assets/restored.jpg";
import bonusChecklist from "@/assets/bonus-checklist.jpg";
import bonusPlanilha from "@/assets/bonus-planilha.jpg";
import bonusWhatsapp from "@/assets/bonus-whatsapp.jpg";

const CHECKOUT_URL = "https://pay.cakto.com.br/3br6uum_1309312";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Farol Turbo Pro — Treinamento completo de restauração de faróis" },
      {
        name: "description",
        content:
          "Guia prático de restauração de faróis: diagnóstico, lixamento, polimento, proteção UV, precificação e primeiros clientes.",
      },
      {
        property: "og:title",
        content: "Farol Turbo Pro — Restauração de faróis do zero",
      },
      {
        property: "og:description",
        content:
          "Aprenda restauração de faróis com 22 videoaulas, ebook e cinco bônus práticos por R$ 19,90.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: Index,
});

function Cta({
  children = "QUERO APRENDER AGORA!",
  href = CHECKOUT_URL,
  className = "",
}: {
  children?: React.ReactNode;
  href?: string;
  className?: string;
}) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`btn-cta px-7 py-4 text-base ${className}`}
    >
      {children} <ArrowRight className="h-5 w-5" />
    </a>
  );
}

function SectionTitle({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-4 text-2xl font-extrabold uppercase leading-tight sm:text-4xl">
        {title}
      </h2>
      {children && (
        <div className="mt-5 space-y-4 text-muted-foreground sm:text-lg">
          {children}
        </div>
      )}
    </div>
  );
}

function Index() {
  const [weeklyServices, setWeeklyServices] = useState(5);
  const [servicePrice, setServicePrice] = useState(250);
  const [serviceCost, setServiceCost] = useState(50);
  const [headlineModel, setHeadlineModel] = useState<"inventario" | "dominio" | "descoberta">("dominio");
  const headlines = {
    inventario: <>Tenha 22 videoaulas e materiais práticos para aprender a <span className="text-primary">restaurar faróis.</span></>,
    dominio: <>Aprenda a restaurar faróis e transforme essa habilidade em um <span className="text-primary">novo serviço.</span></>,
    descoberta: <>Descubra uma sequência organizada para restaurar faróis, mesmo que você esteja <span className="text-primary">começando do zero.</span></>,
  };

  const monthlyRevenue = weeklyServices * 4 * servicePrice;
  const monthlyCosts = weeklyServices * 4 * serviceCost;
  const monthlyResult = monthlyRevenue - monthlyCosts;

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    }).format(value);

  const steps = [
    {
      n: "01",
      t: "Recuperar",
      d: "Aprenda a avaliar a lente, identificar os tipos de desgaste e executar as etapas de lixamento e polimento.",
      img: pro,
    },
    {
      n: "02",
      t: "Proteger",
      d: "Entenda a importância da proteção final, dos produtos adequados e do respeito às instruções e ao tempo de cura do fabricante.",
      img: restored,
    },
    {
      n: "03",
      t: "Monetizar",
      d: "Aprenda a calcular os custos, definir preços e apresentar seu trabalho para potenciais clientes.",
      img: pricing,
    },
  ];

  const bonuses = [
    {
      n: "01",
      t: "Checklist de Restauração em 12 Etapas",
      highlight: "Mais organização. Menos etapas esquecidas.",
      d: "Um material de consulta rápida para acompanhar as etapas de cada restauração, desde a avaliação inicial da lente até a conferência do acabamento final.",
      items: [
        "Sequência de trabalho organizada.",
        "Conferência dos materiais necessários.",
        "Acompanhamento das etapas de lixamento e polimento.",
        "Verificação da proteção final e do acabamento.",
      ],
      closing:
        "Tenha um roteiro visual para consultar durante a execução dos serviços.",
      img: bonusChecklist,
    },
    {
      n: "02",
      t: "Planilha de Custo por Serviço",
      highlight: "Saiba quanto custa cada restauração.",
      d: "Uma planilha editável para registrar seus gastos e entender melhor os custos envolvidos em cada serviço.",
      items: [
        "Registro dos materiais utilizados.",
        "Cálculo do custo dos produtos.",
        "Controle de custos adicionais.",
        "Registro do tempo de trabalho.",
        "Comparação entre custo e preço cobrado.",
        "Estimativa do resultado por serviço.",
      ],
      closing:
        "Tenha mais clareza para definir seus preços e acompanhar seus custos.",
      img: bonusPlanilha,
    },
    {
      n: "03",
      t: "Mensagens Prontas para WhatsApp",
      highlight: "Saiba o que responder ao seu cliente.",
      d: "Uma coleção de modelos editáveis de mensagens para ajudar você a apresentar seu serviço, conversar com interessados e enviar orçamentos.",
      items: [
        "Primeira resposta ao interessado.",
        "Solicitação de fotos do veículo.",
        "Apresentação do serviço.",
        "Envio de orçamento.",
        "Respostas a objeções de preço.",
        "Acompanhamento de interessados.",
        "Confirmação de agendamento.",
      ],
      closing:
        "Tenha modelos de comunicação para atender com mais clareza e profissionalismo.",
      img: bonusWhatsapp,
    },
  ];

  const learn = [
    {
      icon: Search,
      t: "Diagnóstico da lente",
      d: "Identifique oxidação, amarelamento, riscos, umidade interna e situações em que a restauração não é indicada.",
    },
    {
      icon: Wrench,
      t: "Lixamento e polimento",
      d: "Conheça a sequência de granulações, os movimentos de trabalho e os cuidados para alcançar um acabamento adequado.",
    },
    {
      icon: ShieldCheck,
      t: "Proteção UV",
      d: "Aprenda sobre a aplicação da proteção final, compatibilidade dos produtos e respeito ao tempo de cura.",
    },
    {
      icon: Package,
      t: "Materiais e kit inicial",
      d: "Conheça os materiais e ferramentas necessários para planejar seu início.",
    },
    {
      icon: TriangleAlert,
      t: "Erros e correções",
      d: "Entenda como identificar marcas, manchas, acabamento fosco e possíveis causas de falhas.",
    },
    {
      icon: PenTool,
      t: "Precificação",
      d: "Aprenda a considerar materiais, tempo de trabalho e margem para calcular o preço do serviço.",
    },
    {
      icon: Megaphone,
      t: "Divulgação e primeiros clientes",
      d: "Descubra como apresentar seu trabalho e conquistar os primeiros clientes, mesmo começando do zero.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* HEADER */}
      <div className="border-b border-primary/20 bg-primary px-3 py-2 text-center text-xs font-extrabold uppercase tracking-wide text-primary-foreground sm:text-sm">
        ACESSO COMPLETO FAROL TURBO PRO • 22 VIDEOAULAS + EBOOK + 5 BÔNUS • R$ 19,90
      </div>
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16">
          <a href="#" className="truncate font-display text-lg font-extrabold tracking-tight sm:text-xl">
            FAROL <span className="text-primary">TURBO PRO</span>
          </a>
          <a href="#product-preview" className="shrink-0 rounded-lg border border-primary px-4 py-2 text-xs font-extrabold text-primary transition-colors hover:bg-primary/10 sm:text-sm">
            VER O CONTEÚDO
          </a>
        </div>
      </header>

      {/* HERO / PRIMEIRA DOBRA */}
      <section className="relative flex min-h-[calc(100svh-7.5rem)] items-center overflow-hidden py-5 sm:py-8">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-5 px-4 sm:gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <div className="animate-rise text-left">
            <span className="eyebrow">Treinamento digital • Do básico à aplicação</span>
            <div className="mb-3 flex flex-wrap gap-1.5" aria-label="Testar modelos de headline">
              {[
                { id: "inventario", label: "Inventário" },
                { id: "dominio", label: "Domínio" },
                { id: "descoberta", label: "Descoberta" },
              ].map((model) => (
                <button key={model.id} type="button" onClick={() => setHeadlineModel(model.id as typeof headlineModel)} aria-pressed={headlineModel === model.id} className={headlineModel === model.id ? "rounded-full border border-primary bg-primary px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-primary-foreground sm:text-xs" : "rounded-full border border-border px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-muted-foreground sm:text-xs"}>
                  {model.label}
                </button>
              ))}
            </div>
            <h1 className="mt-3 text-[clamp(1.8rem,5vw,3.45rem)] font-extrabold uppercase leading-[1.04]">
              {headlines[headlineModel]}
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
              Siga um caminho organizado: diagnóstico, lixamento, polimento,
              proteção UV e noções para calcular custos e apresentar seu trabalho.
            </p>
            <ul className="mt-4 grid gap-2 text-sm sm:mt-5 sm:text-base">
              {[
                "22 videoaulas para acompanhar o processo.",
                "Ebook Farol Turbo Pro para consultar os conteúdos.",
                "5 bônus práticos para organizar custos e buscar clientes.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-success/15 text-success">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a href="#product-preview" className="btn-cta px-6 py-3 text-sm">
                VER POR DENTRO DO TREINAMENTO <ArrowRight className="h-4 w-4" />
              </a>
              <span className="text-xs text-muted-foreground">Conheça os materiais antes de decidir</span>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
              <span className="rounded-full border border-border px-3 py-1">Acesso digital</span>
              <span className="rounded-full border border-border px-3 py-1">Pagamento único</span>
              <span className="rounded-full border border-border px-3 py-1">7 dias de garantia</span>
            </div>
          </div>
          <div className="relative mx-auto flex w-full max-w-sm items-center justify-center animate-rise [animation-delay:120ms] lg:max-w-md">
            <div className="absolute inset-x-8 top-8 h-3/4 rounded-full bg-primary/15 blur-3xl" />
            <div className="relative w-full rounded-2xl border border-primary/30 bg-card p-3 shadow-glow sm:p-5">
              <img src={ebook} alt="Capa do ebook Farol Turbo Pro" className="mx-auto max-h-[clamp(9rem,28vh,19rem)] w-auto rounded-lg object-contain drop-shadow-2xl" fetchPriority="high" />
              <div className="mt-3 rounded-xl bg-secondary p-3 text-center">
                <p className="font-display text-sm font-extrabold uppercase sm:text-base">Farol Turbo Pro</p>
                <p className="mt-1 text-xs text-muted-foreground">Treinamento + ebook + cinco bônus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOR / AGITAÇÃO */}
      <section className="border-y border-border bg-secondary py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <span className="eyebrow">Você reconhece essa situação?</span>
            <h2 className="mt-3 text-2xl font-extrabold uppercase leading-tight sm:text-3xl">
              Faróis amarelados chamam atenção. Mas você sabe por onde começar a recuperar uma lente?
            </h2>
          </div>
          <div className="space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>Sem conhecer a sequência correta, é fácil ficar em dúvida sobre os materiais, as etapas de lixamento, o polimento e a proteção final.</p>
            <p>E mesmo aprendendo a parte prática, ainda surgem outras perguntas: quanto cobrar, como calcular os custos e como explicar o serviço ao cliente?</p>
            <p className="font-semibold text-foreground">O Farol Turbo Pro reúne o conteúdo técnico e materiais de apoio para você estudar esses pontos em uma sequência organizada.</p>
          </div>
        </div>
      </section>

      {/* CARROSSEL DE PRODUTOS */}
      <div id="product-preview" className="scroll-mt-20"><ProductPreview /></div>

      {/* PARA QUEM É */}
      <section className="border-y border-border bg-secondary py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle
            eyebrow="Para quem é o Farol Turbo Pro?"
            title="Uma habilidade prática para quem quer sair da intenção e começar a construir uma nova oportunidade de renda."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              {
                icon: BookOpen,
                title: "Quem está começando do zero",
                description:
                  "Nunca restaurou um farol? Aprenda desde os fundamentos, conheça os materiais e siga uma sequência organizada para desenvolver essa habilidade.",
              },
              {
                icon: Wrench,
                title: "Profissionais do setor automotivo",
                description:
                  "Já trabalha com estética, lavagem ou mecânica? Aprenda um novo serviço para ampliar seu portfólio e oferecer mais soluções aos seus clientes.",
              },
              {
                icon: BadgeDollarSign,
                title: "Quem busca uma renda extra",
                description:
                  "Quer aproveitar o tempo livre para desenvolver uma nova atividade? Aprenda a executar o serviço, calcular seus custos e divulgar seu trabalho.",
              },
            ].map(({ icon: I, title, description }) => (
              <div
                key={title}
                className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <I className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPORTUNIDADE */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
          <img
            src={pro}
            alt="Profissional lixando um farol automotivo"
            className="w-full rounded-2xl border border-border object-cover shadow-soft"
          />

          <div>
            <span className="eyebrow">A oportunidade</span>

            <h2 className="mt-4 text-2xl font-extrabold uppercase leading-tight sm:text-4xl">
              Uma habilidade prática pode se transformar em uma nova
              oportunidade.
            </h2>

            <div className="mt-5 space-y-4 text-muted-foreground">
              <p>
                Veículos com faróis amarelados e deteriorados fazem parte da
                realidade de muitas cidades. Quando a condição da lente permite
                recuperação, a restauração pode ser uma alternativa à
                substituição.
              </p>

              <p>
                É um serviço que pode ser estudado por iniciantes e incorporado
                por profissionais que já trabalham com estética automotiva.
              </p>
            </div>

            <blockquote className="mt-6 rounded-xl border-l-4 border-primary bg-card p-5 font-medium">
              Você não precisa começar com uma oficina completa. Precisa
              começar entendendo o processo, os materiais e os cuidados
              necessários.
            </blockquote>
          </div>
        </div>
      </section>

      {/* CALCULADORA DE FATURAMENTO */}
      <section className="border-y border-border bg-secondary py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle
            eyebrow="Faça sua simulação"
            title="Descubra o potencial financeiro de oferecer restauração de faróis."
          >
            <p>
              Ajuste os valores e veja uma simulação de faturamento e custos
              com a prestação desse serviço.
            </p>
          </SectionTitle>

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <label htmlFor="weekly-services" className="font-semibold">
                      Faróis restaurados por semana
                    </label>
                    <span className="font-display text-xl font-bold text-primary">
                      <output id="weekly-services-value">{weeklyServices}</output>
                    </span>
                  </div>
                  <input
                    id="weekly-services"
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    value={weeklyServices}
                    onChange={(event) => setWeeklyServices(Number(event.target.value))}
                    className="mt-4 w-full accent-primary"
                  />
                  <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                    <span>1 farol</span>
                    <span>30 faróis</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between gap-4">
                    <label htmlFor="service-price" className="font-semibold">
                      Preço cobrado por farol
                    </label>
                    <span className="font-display text-xl font-bold text-primary">
                      <output id="service-price-value">{formatCurrency(servicePrice)}</output>
                    </span>
                  </div>
                  <input
                    id="service-price"
                    type="range"
                    min="100"
                    max="500"
                    step="10"
                    value={servicePrice}
                    onChange={(event) => setServicePrice(Number(event.target.value))}
                    className="mt-4 w-full accent-primary"
                  />
                  <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                    <span>R$ 100</span>
                    <span>R$ 500</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between gap-4">
                    <label htmlFor="service-cost" className="font-semibold">
                      Custo estimado por farol
                    </label>
                    <span className="font-display text-xl font-bold text-primary">
                      <output id="service-cost-value">{formatCurrency(serviceCost)}</output>
                    </span>
                  </div>
                  <input
                    id="service-cost"
                    type="range"
                    min="0"
                    max="200"
                    step="5"
                    value={serviceCost}
                    onChange={(event) => setServiceCost(Number(event.target.value))}
                    className="mt-4 w-full accent-primary"
                  />
                  <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                    <span>R$ 0</span>
                    <span>R$ 200</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <span className="eyebrow">Sua simulação mensal</span>
              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Faturamento bruto estimado
                  </p>
                  <p id="monthly-revenue" className="mt-1 font-display text-3xl font-extrabold text-primary">
                    {formatCurrency(monthlyRevenue)}
                  </p>
                </div>
                <div className="border-t border-border pt-5">
                  <p className="text-sm text-muted-foreground">
                    Custos estimados
                  </p>
                  <p id="monthly-costs" className="mt-1 font-display text-2xl font-bold">
                    {formatCurrency(monthlyCosts)}
                  </p>
                </div>
                <div className="border-t border-border pt-5">
                  <p className="text-sm text-muted-foreground">
                    Resultado após custos estimados
                  </p>
                  <p id="monthly-result" className="mt-1 font-display text-3xl font-extrabold text-primary">
                    {formatCurrency(monthlyResult)}
                  </p>
                </div>
              </div>
              <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                Simulação ilustrativa considerando quatro semanas por mês.
                Os valores não representam garantia de faturamento ou lucro.
                Os resultados reais dependem da demanda, dos preços praticados,
                dos materiais, impostos e demais despesas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MÉTODO */}
      <section className="border-y border-border bg-secondary py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle
            eyebrow="Mecanismo de aprendizagem"
            title="Entenda a sequência: recuperar, proteger e preparar para oferecer o serviço."
          />

          <div className="relative mt-12 grid gap-6 md:grid-cols-3">
            <div className="absolute left-[16%] right-[16%] top-[5.5rem] hidden h-px bg-gradient-to-r from-primary/0 via-primary to-primary/0 md:block" />

            {steps.map((s) => (
              <div
                key={s.n}
                className="relative overflow-hidden rounded-2xl border border-border bg-card"
              >
                <img
                  src={s.img}
                  alt={s.t}
                  className="h-44 w-full object-cover opacity-80"
                />

                <div className="p-6">
                  <span className="font-display text-sm font-extrabold tracking-widest text-primary">
                    ETAPA {s.n}
                  </span>

                  <h3 className="mt-1 text-2xl font-extrabold uppercase">
                    {s.t}
                  </h3>

                  <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ANTES E DEPOIS */}
      <section className="border-y border-border bg-secondary py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-6 px-4 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="eyebrow">Demonstração visual</span>
            <h2 className="mt-3 text-2xl font-extrabold uppercase leading-tight sm:text-3xl">Veja a diferença entre um farol desgastado e um farol restaurado.</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">A imagem ilustra o tipo de transformação que o processo busca alcançar. O resultado depende das condições da lente, dos materiais e da execução.</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
            <img src="/hero-antes-depois.png" alt="Comparação visual de farol antes e depois da restauração" className="w-full object-cover" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      {/* O QUE VAI APRENDER */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle
            eyebrow="Benefícios e conteúdo"
            title="Aprenda as etapas e entenda o que observar em cada serviço."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {learn.map(({ icon: I, t, d }, i) => (
              <div
                key={t}
                className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary">
                    <I className="h-5 w-5" />
                  </span>

                  <span className="font-display text-sm font-bold text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-4 font-bold uppercase">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}

            <div className="relative overflow-hidden rounded-xl border border-border">
              <img
                src={polish}
                alt="Polimento de farol"
                className="h-full min-h-48 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>


      {/* BÔNUS */}
      <section className="border-y border-border bg-secondary py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <span className="eyebrow">Materiais extras incluídos</span>
            <h2 className="mt-3 text-2xl font-extrabold uppercase leading-tight sm:text-4xl">Cinco bônus para apoiar a aplicação do que você aprende.</h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">Materiais de consulta e organização que complementam o treinamento principal.</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              { n: "01", title: "Checklist de Restauração em 12 Etapas", desc: "Um roteiro visual para acompanhar as etapas do serviço." },
              { n: "02", title: "Planilha de Custo por Serviço", desc: "Organize materiais, gastos e valores de cada restauração." },
              { n: "03", title: "WhatsApp que Vende: 33 mensagens prontas", desc: "Modelos de mensagens para conversar com interessados e enviar orçamentos." },
              { n: "04", title: "Kit Primeiros 10 Clientes", desc: "Material de apoio para organizar os primeiros contatos e a divulgação." },
              { n: "05", title: "Planilha de Prospecção de Clientes", desc: "Registre contatos e acompanhe oportunidades de atendimento." },
            ].map((bonus) => (
              <article key={bonus.n} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 sm:p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 font-display font-extrabold text-primary">{bonus.n}</span>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-wide text-primary">BÔNUS {bonus.n}</p>
                  <h3 className="mt-1 font-extrabold">{bonus.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{bonus.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTA ÚNICA */}
      <section
        id="oferta"
        className="scroll-mt-16 border-y border-border bg-secondary py-16 sm:py-24"
      >
        <div className="mx-auto max-w-4xl px-4">
          <SectionTitle
            eyebrow="Oferta especial Farol Turbo Pro"
            title="Tudo o que você precisa para aprender restauração de faróis."
          >
            <p>
              Um único acesso com treinamento completo, ebook e cinco bônus
              para ajudar você a aprender, organizar seus custos e conquistar clientes.
            </p>
          </SectionTitle>

          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-primary/50 bg-card p-7 shadow-glow sm:p-9">
            <div className="mb-6 flex items-center justify-center gap-4 rounded-xl bg-secondary p-4 sm:gap-6">
              <img src={ebook} alt="Ebook Farol Turbo Pro incluído na oferta" className="h-28 w-auto rounded-md object-contain sm:h-36" loading="lazy" decoding="async" />
              <div className="text-left">
                <p className="text-xs font-extrabold uppercase tracking-wide text-primary">Combo completo</p>
                <p className="mt-1 font-display text-lg font-extrabold uppercase sm:text-xl">Treinamento + materiais</p>
                <p className="mt-1 text-xs text-muted-foreground">22 videoaulas, ebook e 5 bônus digitais</p>
              </div>
            </div>
            <div className="text-left">
              <span className="eyebrow">FAROL TURBO PRO | ACESSO COMPLETO</span>
              <h3 className="mt-3 text-2xl font-extrabold uppercase sm:text-3xl">
                Treinamento completo + materiais
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Aprenda o processo de restauração e tenha materiais práticos
                para aplicar o conhecimento e estruturar seus serviços.
              </p>
            </div>

            <div className="mt-8">
              <p className="text-left font-bold">Você recebe:</p>
              <ul className="mt-4 flex flex-col gap-3">
                {[
                  "Treinamento completo com 22 videoaulas",
                  "Ebook completo Farol Turbo Pro",
                  "BÔNUS 1 — Checklist de Restauração em 12 Etapas",
                  "BÔNUS 2 — Planilha de Custo por Serviço",
                  "BÔNUS 3 — WhatsApp que Vende: 33 mensagens prontas",
                  "BÔNUS 4 — Kit Primeiros 10 Clientes",
                  "BÔNUS 5 — Planilha de Prospecção de Clientes",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base sm:text-lg">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-success/15 text-success">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border-t border-border pt-6 text-center">
              <p className="text-sm text-muted-foreground">Pagamento único</p>
              <p className="font-display text-5xl font-extrabold text-primary">
                R$ 19,90
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Acesso digital ao treinamento e a todos os materiais
              </p>
            </div>

            <Cta href={CHECKOUT_URL} className="mt-6 w-full">
              QUERO MEU ACESSO COMPLETO
            </Cta>

            <div className="mt-5 flex items-start gap-3 rounded-xl border border-primary/40 bg-primary/5 p-4 text-left">
              <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-extrabold uppercase">
                  7 dias de garantia
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Acesse o conteúdo com tranquilidade e avalie o material dentro
                  do prazo de garantia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENTREGA DIGITAL */}
      <section className="border-b border-border bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle
            eyebrow="Acesso fácil e sem espera"
            title="📦 ENTREGA DIGITAL SIMPLES E RÁPIDA"
          >
            <p>Você não precisa esperar nenhum produto chegar à sua casa!</p>
          </SectionTitle>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: CreditCard,
                n: "01",
                title: "Faça sua compra",
                description: "Conclua o pagamento com segurança.",
              },
              {
                icon: Mail,
                n: "02",
                title: "Receba seu acesso",
                description:
                  "Após a confirmação do pagamento, você receberá acesso aos arquivos pelo Google Drive. Na Oferta Completa, as 22 videoaulas ficam disponíveis pela área de membros da Cakto Members.",
              },
              {
                icon: Download,
                n: "03",
                title: "Acesse seus arquivos",
                description:
                  "Acesse os materiais digitais pelo Google Drive. Se você adquiriu a Oferta Completa, também poderá acessar as videoaulas pela Cakto Members.",
              },
              {
                icon: Rocket,
                n: "04",
                title: "Comece a aplicar",
                description:
                  "Utilize os materiais e coloque seu conhecimento em prática!",
              },
            ].map(({ icon: I, n, title, description }) => (
              <div
                key={n}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                    <I className="h-6 w-6" />
                  </span>

                  <span className="font-display text-sm font-extrabold tracking-widest text-primary">
                    ETAPA {n}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-extrabold uppercase">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 flex max-w-4xl items-start gap-4 rounded-2xl border border-primary/40 bg-secondary/70 p-6 sm:p-7">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
              <FolderDown className="h-6 w-6" />
            </span>

            <div>
              <h3 className="font-extrabold uppercase">
                Importante: produto 100% digital
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                A entrega é digital: os materiais em arquivo são disponibilizados pelo
                Google Drive. Na Oferta Completa, as 22 videoaulas são acessadas
                pela área de membros da Cakto Members. Não há envio de produtos
                físicos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border bg-secondary py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <SectionTitle
            eyebrow="Tire suas dúvidas"
            title="PERGUNTAS FREQUENTES"
          >
            <p>Confira as principais informações antes de adquirir o seu material.</p>
          </SectionTitle>

          <div className="mt-10 rounded-2xl border border-border bg-card px-5 sm:px-7">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="faq-1">
                <AccordionTrigger className="text-primary hover:text-primary">O FAROL TURBO PRO serve para qualquer carro?</AccordionTrigger>
                <AccordionContent>
                  O treinamento apresenta técnicas de restauração de faróis automotivos. A aplicação e os resultados dependem do tipo de lente, dos materiais e do estado de conservação de cada farol.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2">
                <AccordionTrigger className="text-primary hover:text-primary">Preciso comprar ferramentas caras para começar?</AccordionTrigger>
                <AccordionContent>
                  Não necessariamente. O material apresenta ferramentas, produtos e itens utilizados no processo, ajudando você a conhecer o que precisa antes de organizar seu investimento.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3">
                <AccordionTrigger className="text-primary hover:text-primary">O que está incluído na oferta Farol Turbo Pro?</AccordionTrigger>
                <AccordionContent>
                  Você recebe o treinamento completo com 22 videoaulas, o ebook Farol Turbo Pro e cinco bônus: Checklist de Restauração em 12 Etapas, Planilha de Custo por Serviço, WhatsApp que Vende com 33 mensagens prontas, Kit Primeiros 10 Clientes e Planilha de Prospecção de Clientes. O Kit de Divulgação é uma oferta adicional opcional apresentada no checkout.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-4">
                <AccordionTrigger className="text-primary hover:text-primary">Como recebo o produto depois da compra?</AccordionTrigger>
                <AccordionContent>
                  Após a confirmação do pagamento, os arquivos digitais são disponibilizados pelo Google Drive. Na Oferta Completa, você também recebe acesso às 22 videoaulas pela área de membros da Cakto Members.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-5">
                <AccordionTrigger className="text-primary hover:text-primary">O conteúdo é indicado para iniciantes?</AccordionTrigger>
                <AccordionContent>
                  Sim. O material foi organizado para apresentar conhecimentos e etapas do processo de restauração de faróis, ajudando você a estudar e entender como colocar o conhecimento em prática.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-6">
                <AccordionTrigger className="text-primary hover:text-primary">O produto inclui suporte ou acompanhamento pelo WhatsApp?</AccordionTrigger>
                <AccordionContent>
                  Não. O FAROL TURBO PRO é um conjunto de materiais digitais para estudo individual. A compra não inclui consultoria, acompanhamento ou suporte individual pelo WhatsApp.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-7">
                <AccordionTrigger className="text-primary hover:text-primary">Como funciona a garantia de 7 dias?</AccordionTrigger>
                <AccordionContent>
                  Você tem até 7 dias após a compra para avaliar o material. Caso não fique satisfeito, poderá solicitar o reembolso dentro desse prazo, conforme as condições e os procedimentos da plataforma de pagamento.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <img
          src={glow}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background" />

        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-extrabold uppercase leading-tight sm:text-4xl">
            Comece a entender o processo{" "}
            <span className="text-primary">hoje.</span>
          </h2>

          <p className="mt-4 text-muted-foreground">
            Treinamento com 22 videoaulas, ebook e cinco bônus por apenas R$ 19,90.
          </p>

          <div className="mx-auto mt-8 flex max-w-xl items-center gap-3 rounded-2xl border border-primary/40 bg-card/80 p-5 text-left">
            <ShieldCheck className="h-8 w-8 shrink-0 text-primary" />
            <div>
              <h3 className="text-sm font-extrabold uppercase">
                Sua compra está protegida
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Sua compra conta com 7 dias de garantia para você começar sua jornada com mais tranquilidade.
              </p>
            </div>
          </div>

          <Cta href="#oferta" className="mt-8">VER A OFERTA COMPLETA</Cta>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        <p className="font-display font-extrabold text-foreground">
          FAROL <span className="text-primary">TURBO PRO</span>
        </p>

        <p className="mt-2">
          Imagens ilustrativas. Resultados dependem da condição da lente e da
          aplicação correta do processo.
        </p>

        <p className="mt-1">
          © {new Date().getFullYear()} Farol Turbo Pro. Todos os direitos
          reservados.
        </p>

        <div className="mt-3 flex flex-wrap items-center justify-center gap-4">
          <Link to="/privacidade" className="text-primary underline">
            Política de privacidade
          </Link>

          <Button
            variant="link"
            size="sm"
            onClick={() =>
              window.dispatchEvent(new Event("open-cookie-settings"))
            }
          >
            Configurações de cookies
          </Button>
        </div>
      </footer>
    </div>
  );
}
