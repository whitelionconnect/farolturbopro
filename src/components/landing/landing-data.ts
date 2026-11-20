import {
  BadgeDollarSign,
  BookOpen,
  CreditCard,
  Download,
  FolderDown,
  Mail,
  Megaphone,
  Package,
  PenTool,
  Rocket,
  Search,
  ShieldCheck,
  Target,
  TriangleAlert,
  Users,
  Wrench,
} from "lucide-react";

import pro from "@/assets/pro.webp";
import restored from "@/assets/restored.webp";
import pricing from "@/assets/pricing.webp";
import bonusChecklist from "@/assets/bonus-checklist.webp";
import bonusCostCover from "@/assets/product-preview/cost-cover.webp";
import bonusWhatsapp from "@/assets/bonus-whatsapp.webp";

export const CHECKOUT_URL = "https://pay.cakto.com.br/3br6uum_1309312";

export type HeadlineKey = "dominio" | "inventario" | "descoberta";

export const HEADLINE_OPTIONS: ReadonlyArray<{
  key: HeadlineKey;
  label: string;
  prefix: string;
  highlight: string;
  suffix?: string;
}> = [
  {
    key: "dominio",
    label: "Domínio",
    prefix: "Domine a restauração de faróis do zero e transforme uma técnica prática em ",
    highlight: "um serviço profissional.",
  },
  {
    key: "inventario",
    label: "Inventário",
    prefix: "22 videoaulas, ebook e 5 bônus práticos para aprender ",
    highlight: "restauração de faróis do zero.",
  },
  {
    key: "descoberta",
    label: "Descoberta",
    prefix: "Descubra o passo a passo técnico para restaurar faróis, calcular custos e ",
    highlight: "apresentar seu serviço.",
  },
];

export const PAIN_POINTS = [
  {
    icon: TriangleAlert,
    title: "Improviso na sequência de lixas e polimento",
    description:
      "Sem seguir a progressão adequada para cada grau de desgaste, a lente pode ficar marcada, fosca ou exigir retrabalho.",
  },
  {
    icon: ShieldCheck,
    title: "Proteção UV aplicada sem critério",
    description:
      "Ignorar a preparação da superfície ou o tempo de cura do produto compromete a durabilidade do acabamento final.",
  },
  {
    icon: PenTool,
    title: "Insegurança para cobrar e atender",
    description:
      "Sem clareza dos custos de materiais e do tempo gasto, fica difícil montar orçamentos coerentes e apresentar o serviço.",
  },
];

export const METHOD_STEPS = [
  {
    n: "01",
    t: "Recuperar",
    d: "Avalie a lente antes de começar, identifique quando a restauração é indicada e execute o lixamento e o polimento na ordem certa.",
    img: pro,
    width: 1264,
    height: 848,
    alt: "Profissional executando o preparo e lixamento de um farol automotivo",
  },
  {
    n: "02",
    t: "Proteger",
    d: "Entenda o papel da proteção UV final, a compatibilidade dos produtos e o respeito às orientações e ao tempo de cura do fabricante.",
    img: restored,
    width: 1264,
    height: 848,
    alt: "Farol automotivo após etapa de acabamento e proteção",
  },
  {
    n: "03",
    t: "Monetizar",
    d: "Calcule o custo real por serviço, estruture seus preços e use roteiros práticos para apresentar o trabalho a potenciais clientes.",
    img: pricing,
    width: 1264,
    height: 848,
    alt: "Planejamento de custos e precificação de serviço de restauração de faróis",
  },
];

export const LEARN_TOPICS = [
  {
    icon: Search,
    t: "Diagnóstico da lente",
    d: "Identifique oxidação, amarelamento, riscos, umidade interna e casos em que a restauração não é recomendada.",
  },
  {
    icon: Wrench,
    t: "Lixamento e polimento",
    d: "Sequência de granulações, movimentos de trabalho e cuidados para buscar um acabamento limpo e uniforme.",
  },
  {
    icon: ShieldCheck,
    t: "Proteção UV",
    d: "Aplicação da proteção final, compatibilidade entre produtos e respeito ao tempo de cura.",
  },
  {
    icon: Package,
    t: "Materiais e kit inicial",
    d: "Visão clara dos insumos e ferramentas usados no processo para planejar seu investimento inicial.",
  },
  {
    icon: TriangleAlert,
    t: "Erros e correções",
    d: "Como reconhecer marcas, manchas, aspecto opaco e causas comuns de falhas durante a execução.",
  },
  {
    icon: PenTool,
    t: "Precificação",
    d: "Como considerar materiais, tempo de trabalho e margem para definir o preço de cada atendimento.",
  },
  {
    icon: Megaphone,
    t: "Divulgação e primeiros clientes",
    d: "Formas práticas de apresentar o serviço, conversar com interessados e conquistar seus primeiros atendimentos.",
  },
];

export const AUDIENCE_PROFILES = [
  {
    icon: BookOpen,
    title: "Quem está começando do zero",
    description:
      "Nunca restaurou um farol? Aprenda os fundamentos, conheça os materiais e siga uma sequência organizada para praticar com segurança.",
  },
  {
    icon: Wrench,
    title: "Profissionais do setor automotivo",
    description:
      "Já atua com estética, lavagem ou mecânica? Acrescente um serviço complementar ao seu portfólio com processo padronizado.",
  },
  {
    icon: BadgeDollarSign,
    title: "Quem busca uma renda extra",
    description:
      "Quer desenvolver uma habilidade prática no tempo livre? Entenda a execução técnica, os custos e a apresentação do serviço.",
  },
];

export const BENEFITS = [
  {
    icon: Wrench,
    title: "Sequência técnica organizada",
    description: "Estude cada etapa na ordem correta, reduzindo tentativa e erro no lixamento, polimento e proteção.",
  },
  {
    icon: Search,
    title: "Diagnóstico honesto da lente",
    description: "Saiba avaliar antes de começar quando a lente permite recuperação e quando o ideal é não prometer restauração.",
  },
  {
    icon: BadgeDollarSign,
    title: "Controle real de custos e preços",
    description: "Use a planilha de apoio para registrar insumos e tempo, evitando cobrar abaixo do que o serviço exige.",
  },
  {
    icon: FolderDown,
    title: "Acesso digital no seu ritmo",
    description: "Consulte os arquivos baixados do Google Drive quando precisar revisar etapas, custos ou mensagens.",
  },
];

export const BONUSES = [
  {
    n: "01",
    t: "Checklist de Restauração em 12 Etapas",
    highlight: "Mais organização durante a execução.",
    d: "Material de consulta rápida para acompanhar da avaliação inicial da lente até a conferência do acabamento final.",
    items: [
      "Sequência de trabalho em 12 passos claros",
      "Conferência prévia de materiais e insumos",
      "Verificação da proteção UV e acabamento final",
    ],
    img: bonusChecklist,
    width: 928,
    height: 1152,
    icon: null,
  },
  {
    n: "02",
    t: "Planilha de Custo por Serviço",
    highlight: "Clareza sobre quanto custa cada restauração.",
    d: "Planilha editável para registrar insumos, tempo de trabalho e comparar custo com o preço cobrado.",
    items: [
      "Registro de materiais e custos operacionais",
      "Acompanhamento do tempo dedicado por serviço",
      "Estimativa clara de margem por atendimento",
    ],
    img: bonusCostCover,
    width: 1024,
    height: 1536,
    icon: null,
  },
  {
    n: "03",
    t: "WhatsApp que Vende: 33 mensagens prontas",
    highlight: "Modelos prontos para atender e enviar orçamentos.",
    d: "Coleção de mensagens editáveis para responder interessados, pedir fotos do farol e conduzir o agendamento.",
    items: [
      "Primeira resposta e pedido de fotos da lente",
      "Apresentação do serviço e envio de orçamento",
      "Acompanhamento de contatos e confirmação de horário",
    ],
    img: bonusWhatsapp,
    width: 928,
    height: 1152,
    icon: null,
  },
  {
    n: "04",
    t: "Kit Primeiros 10 Clientes",
    highlight: "Plano prático para divulgar seus primeiros atendimentos.",
    d: "Orientações objetivas para apresentar seu serviço localmente e abordar os primeiros contatos com profissionalismo.",
    items: [
      "Onde encontrar os primeiros interessados na sua região",
      "Como apresentar o serviço de forma clara e honesta",
      "Ações práticas para gerar os primeiros pedidos de orçamento",
    ],
    img: null,
    width: 0,
    height: 0,
    icon: Users,
  },
  {
    n: "05",
    t: "Planilha de Prospecção de Clientes",
    highlight: "Acompanhe cada contato sem perder oportunidades.",
    d: "Planilha simples para organizar contatos, orçamentos enviados, retornos pendentes e serviços agendados.",
    items: [
      "Registro de interessados e origem do contato",
      "Controle de orçamentos enviados e follow-ups",
      "Histórico de atendimentos para organização semanal",
    ],
    img: null,
    width: 0,
    height: 0,
    icon: Target,
  },
];

export const INCLUDED_ITEMS = [
  "Treinamento completo com 22 videoaulas",
  "Ebook completo Farol Turbo Pro",
  "BÔNUS 1 — Checklist de Restauração em 12 Etapas",
  "BÔNUS 2 — Planilha de Custo por Serviço",
  "BÔNUS 3 — WhatsApp que Vende: 33 mensagens prontas",
  "BÔNUS 4 — Kit Primeiros 10 Clientes",
  "BÔNUS 5 — Planilha de Prospecção de Clientes",
];

export const DELIVERY_STEPS = [
  {
    icon: CreditCard,
    n: "01",
    title: "Faça sua compra",
    description: "Conclua o pagamento único de R$ 19,90 com segurança no checkout oficial.",
  },
  {
    icon: Mail,
    n: "02",
    title: "Receba seu acesso",
    description: "Após a confirmação do pagamento, você recebe o link do Google Drive para acessar todos os arquivos.",
  },
  {
    icon: Download,
    n: "03",
    title: "Acesse e baixe os arquivos",
    description: "Abra o link no celular ou computador, visualize os materiais e faça o download dos arquivos disponibilizados.",
  },
  {
    icon: Rocket,
    n: "04",
    title: "Comece a aplicar",
    description: "Estude as etapas no seu ritmo e utilize os materiais de apoio na prática.",
  },
];

export const FAQ_ITEMS = [
  {
    id: "faq-1",
    q: "O Farol Turbo Pro funciona para qualquer farol?",
    a: "O treinamento ensina técnicas de restauração para lentes automotivas, começando pelo diagnóstico. O resultado depende do tipo de lente, do nível de desgaste, de eventuais danos internos (como trincas ou ressecamento profundo) e da execução correta de cada etapa.",
  },
  {
    id: "faq-2",
    q: "Preciso comprar ferramentas caras para começar?",
    a: "Não necessariamente. O material detalha ferramentas, lixas e produtos usados no processo para que você entenda o que realmente precisa antes de planejar seu investimento inicial.",
  },
  {
    id: "faq-3",
    q: "O que está incluído no valor único de R$ 19,90?",
    a: "Você recebe acesso às 22 videoaulas, ao ebook completo Farol Turbo Pro e aos cinco bônus: Checklist de Restauração em 12 Etapas, Planilha de Custo por Serviço, WhatsApp que Vende (33 mensagens prontas), Kit Primeiros 10 Clientes e Planilha de Prospecção de Clientes.",
  },
  {
    id: "faq-4",
    q: "Como recebo o material depois da compra?",
    a: "Este é um produto 100% digital. Após a confirmação do pagamento, você recebe o link do Google Drive para acessar, visualizar e fazer o download dos arquivos. Não há envio de produtos físicos.",
  },
  {
    id: "faq-5",
    q: "O conteúdo é indicado para quem está começando do zero?",
    a: "Sim. As aulas e o ebook foram organizados em sequência progressiva, do diagnóstico inicial e lista de materiais até o acabamento, cálculo de custos e apresentação do serviço.",
  },
  {
    id: "faq-6",
    q: "A compra inclui suporte individual ou acompanhamento pelo WhatsApp?",
    a: "Não. O Farol Turbo Pro é um material digital para estudo independente. A compra não inclui consultoria nem acompanhamento individual pelo WhatsApp.",
  },
  {
    id: "faq-7",
    q: "Como funciona a garantia de 7 dias?",
    a: "Você tem até 7 dias após a compra para avaliar o material. Caso decida não continuar, pode solicitar o reembolso dentro desse prazo, conforme as condições e procedimentos da plataforma de pagamento.",
  },
];