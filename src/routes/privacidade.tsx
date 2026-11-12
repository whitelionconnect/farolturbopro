import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/privacidade")({
  head: () => ({ meta: [
    { title: "Privacidade e cookies | Farol Turbo Pro" },
    { name: "description", content: "Como o Farol Turbo Pro usa dados de visitas e cookies de publicidade e como alterar suas preferências." },
    { property: "og:title", content: "Privacidade e cookies | Farol Turbo Pro" },
    { property: "og:description", content: "Dados de visitas, publicidade e suas escolhas de privacidade no Farol Turbo Pro." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: Privacy,
});

function Privacy() {
  return <main className="mx-auto min-h-screen max-w-3xl px-5 py-12 text-foreground">
    <Link to="/" className="text-primary underline">Voltar ao Farol Turbo Pro</Link>
    <h1 className="mt-8 text-3xl font-bold">Privacidade e cookies</h1>
    <div className="mt-8 space-y-6 text-muted-foreground">
      <p>Atualizado em 12 de novembro de 2026.</p>
      <section><h2 className="mb-2 text-xl font-bold text-foreground">Dados de visitas</h2><p>A Lovable mede páginas visitadas, origem da visita, país, navegador, dispositivo, tempo de visita, desempenho e erros, sem cookies e sem identificar pessoas. Dados detalhados são mantidos por 90 dias e resumos por um ano. A medição de cliques respeita sua escolha de análise de visitas.</p></section>
      <section><h2 className="mb-2 text-xl font-bold text-foreground">Publicidade e Meta Pixel</h2><p>Utilizamos o Meta Pixel 259717535174766 para enviar à Meta o evento PageView da página de oferta. Isso pode compartilhar o endereço da página, origem da visita, informações do navegador e dispositivo, endereço IP e identificadores de cookies de publicidade, como _fbp e _fbc. Esses dados podem ser utilizados para medição, atribuição, otimização de anúncios e remarketing. Não enviamos dados de formulários nem eventos de compra por esta página.</p></section>
      <section><h2 className="mb-2 text-xl font-bold text-foreground">Suas escolhas</h2><p>Na UE/EEE, Reino Unido, Suíça e Canadá, e quando a localização não puder ser confirmada, o Pixel aguarda sua aceitação de publicidade. Nas demais regiões, pode funcionar antes de uma resposta, mas uma recusa ou o sinal Global Privacy Control bloqueia os envios. Você pode aceitar ou rejeitar cada finalidade separadamente e mudar sua escolha a qualquer momento. Uma retirada interrompe novos envios; não apaga dados já recebidos pelas plataformas. O registro da escolha e da versão deste aviso é mantido neste navegador.</p></section>
      <section><h2 className="mb-2 text-xl font-bold text-foreground">Pagamento externo</h2><p>Os botões de compra abrem o checkout do Cakto, que tem suas próprias práticas de privacidade. O Pixel desta página mede visitas, não confirma pagamentos no checkout.</p></section>
      <Button variant="outline" onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}>Configurações de cookies</Button>
    </div>
  </main>;
}