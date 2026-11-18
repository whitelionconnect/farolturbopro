import whatsapp from "@/assets/product-preview/whatsapp-cover.png.asset.json";
import checklist from "@/assets/product-preview/checklist-cover.png.asset.json";
import visibility from "@/assets/product-preview/visibility-page.png.asset.json";
import materials from "@/assets/product-preview/materials-page.png.asset.json";
import clients from "@/assets/product-preview/clients-page.png.asset.json";
import sheet from "@/assets/product-preview/cost-sheet.png.asset.json";
import cost from "@/assets/product-preview/cost-cover.png.asset.json";
import sales from "@/assets/product-preview/sales-page.png.asset.json";

// Actual supplied covers and pages, in display order.
export const productPreviewImages = [
  { src: whatsapp.url, alt: "Capa do material WhatsApp que Vende", width: 844, height: 1209 },
  { src: visibility.url, alt: "Página interna sobre divulgação do serviço", width: 1006, height: 1424 },
  { src: checklist.url, alt: "Capa do Checklist de Restauração de Faróis", width: 850, height: 1211 },
  { src: materials.url, alt: "Página interna sobre materiais, ferramentas e produtos essenciais", width: 1002, height: 1419 },
  { src: cost.url, alt: "Capa da Planilha de Custo por Serviço", width: 1024, height: 1536 },
  { src: sheet.url, alt: "Prévia da planilha de custo por serviço", width: 625, height: 1041 },
  { src: clients.url, alt: "Página interna sobre onde encontrar os primeiros clientes", width: 1008, height: 1421 },
  { src: sales.url, alt: "Página interna sobre apresentação e venda do serviço", width: 768, height: 1080 },
];