import { useState } from "react";

export function RevenueCalculator() {
  const [weeklyServices, setWeeklyServices] = useState(5);
  const [servicePrice, setServicePrice] = useState(250);
  const [serviceCost, setServiceCost] = useState(50);

  const monthlyRevenue = weeklyServices * 4 * servicePrice;
  const monthlyCosts = weeklyServices * 4 * serviceCost;
  const monthlyResult = monthlyRevenue - monthlyCosts;

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    }).format(value);

  return (
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
        <span className="eyebrow">Simulação ilustrativa mensal</span>
        <div className="mt-6 space-y-5">
          <div>
            <p className="text-sm text-muted-foreground">Faturamento bruto estimado</p>
            <p id="monthly-revenue" className="mt-1 font-display text-3xl font-extrabold text-primary">
              {formatCurrency(monthlyRevenue)}
            </p>
          </div>
          <div className="border-t border-border pt-5">
            <p className="text-sm text-muted-foreground">Custos estimados</p>
            <p id="monthly-costs" className="mt-1 font-display text-2xl font-bold">
              {formatCurrency(monthlyCosts)}
            </p>
          </div>
          <div className="border-t border-border pt-5">
            <p className="text-sm text-muted-foreground">Resultado após custos estimados</p>
            <p id="monthly-result" className="mt-1 font-display text-3xl font-extrabold text-primary">
              {formatCurrency(monthlyResult)}
            </p>
          </div>
        </div>
        <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
          Simulação ilustrativa considerando quatro semanas por mês. Os valores não representam garantia de faturamento ou lucro; resultados reais variam conforme demanda local, preços, materiais, impostos e demais despesas.
        </p>
      </div>
    </div>
  );
}