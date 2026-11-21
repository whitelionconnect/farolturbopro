# Auditoria técnica da landing publicada (main @ 0aa22d2)

Escopo: somente a página atual (`src/routes/index.tsx` e o que ela importa). Nenhuma referência à branch preview/landing-conversao ou PR #4. Sem mudanças visuais, de texto, oferta, preço, bônus, checkout, entrega, consentimento ou Pixel. Sem publicar.

## 1. Cobertura de testes da rota `/` — CONFIRMADO: não cobre

- `src/routes/index.tsx` (926 linhas) importa apenas `ProductPreview` de componentes próprios (linha 6). Hero, calculadora (linhas 116-122, 441-496), bônus e oferta são implementados inline.
- `src/test/landing-conversion.test.tsx` testa `HeroSection`, `BonusesSection`, `OfferAndDelivery` e `landing-data.ts`. `rg` mostra que esses componentes e `RevenueCalculator.tsx` só são referenciados pelo teste e entre si: são código órfão, não renderizado em `/`.
- `src/test/app-routing.test.tsx` só verifica que `/` casa com uma rota; não renderiza a página.
- Há dois `CHECKOUT_URL` idênticos e independentes: `index.tsx:40` e `landing-data.ts:27`. O teste valida o segundo; um erro no primeiro (o publicado) passaria despercebido.
- `meta-pixel.test.ts` cobre de fato `src/lib/meta-pixel.ts` e `src/lib/consent.ts`, que são os usados em produção (via `CookieConsent` no root). Essa parte é válida.

Conclusão: o teste de conversão dá falsa segurança; a rota real não tem teste de renderização.

## 2. Riscos funcionais

Confirmados (lidos no código):
- **Código morto divergente**: `src/components/landing/*` contém copy/estrutura diferente da página publicada (ex.: headline "Domine a restauração de faróis", CTA para `#product-preview`). Risco de alguém editá-lo achando que altera a página.
- **Checkout duplicado** (ver acima).
- **Carrossel**: `ProductPreview.tsx:67` voltou a ter `loading="lazy"` nas 16 imagens; antes isso foi removido porque imagens fora da viewport não carregavam a tempo no loop. Com `overflow-hidden` e animação por transform, a cópia duplicada pode aparecer em branco até rolar — HIPÓTESE a confirmar no navegador.
- **Calculadora**: usa `type="range"` com min/max (linhas 441-496), então não há NaN nem valores negativos de entrada; custo máximo (200) < preço mínimo (100)? Não: custo 200 com preço 100 gera resultado negativo — exibição de valor negativo é aceitável, mas precisa confirmar como aparece (HIPÓTESE de formatação "-R$ 400").

Hipóteses a verificar (não confirmadas):
- Sliders sem `<label htmlFor>`/`aria-valuetext` em BRL (leitor de tela lê só o número).
- Carrossel: região com `tabIndex=0` sem instrução visível de setas; animação contínua respeita pause e `prefers-reduced-motion` (verificado em turno anterior, revalidar).
- Banner de cookies com `aria-modal="false"` pode sobrepor CTAs no mobile (390px).
- Pixel: inicialização e PageView únicos já cobertos por testes; recebimento real na Meta continua não verificável daqui. Evento Purchase é da Cakto (CAPI), fora deste código.
- Imagens importadas como `@/assets/*.jpg` dependem dos ponteiros `.asset.json`; confirmar que todas resolvem no build.

## 3. Correções mínimas propostas (sem efeito visual)

1. Adicionar `src/test/landing-route.test.tsx` que renderiza o componente real da rota `/` e verifica: todos os links de compra apontam para o checkout Cakto e abrem em nova aba; preço R$ 19,90 presente; 3 bônus presentes; seção de entrega e aviso "100% digital" presentes; `#product-preview` existe.
2. Unificar a URL de checkout: `index.tsx` passa a importar a constante de um único módulo (mesmo valor). Sem mudança de comportamento.
3. Remover o código órfão (`HeroSection`, `BonusesSection`, `OfferAndDelivery`, `RevenueCalculator` e partes não usadas de `landing-data.ts`) e o teste que só os cobre, substituído pelo teste do item 1. Alternativa, se preferir manter: marcar como não usado e excluir do teste. Decisão sua.
4. Carrossel: se o item de hipótese for confirmado, remover `loading="lazy"` da linha 67 (comportamento previamente aprovado).
5. Acessibilidade dos sliders (só se confirmado): `aria-valuetext` com valor em reais e `label` associada — invisível visualmente.

Nada mais é alterado.

## Validação

- `bunx vitest run` (todos os testes, incluindo o novo da rota e os de Pixel)
- `bun run lint`
- build: verificado pelo log automático de build do Lovable
- Playwright em 1280x1800 e 390x844: carregamento das 16 imagens do carrossel após um ciclo, calculadora nos extremos, banner de cookies sobre CTAs, links de checkout, nenhum Pixel antes do consentimento.

Resultado entregue em chat separando confirmados de hipóteses descartadas/confirmadas, com arquivos e linhas. Sem publicar.
