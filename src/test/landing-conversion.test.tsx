import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { CHECKOUT_URL, INCLUDED_ITEMS } from "@/components/landing/landing-data";
import { HeroSection } from "@/components/landing/HeroSection";
import { OfferAndDelivery } from "@/components/landing/OfferAndDelivery";
import { BonusesSection } from "@/components/landing/BonusesSection";

vi.mock("@tanstack/react-router", async () => {
  const actual = await vi.importActual<typeof import("@tanstack/react-router")>("@tanstack/react-router");
  return {
    ...actual,
    Link: ({ to, children, ...props }: { to: string; children: React.ReactNode }) => (
      <a href={to} {...props}>
        {children}
      </a>
    ),
  };
});

describe("Landing page conversion rules", () => {
  it("renders a default hero headline without interaction, supports Inventário/Domínio/Descoberta switching, and links primary CTA to #product-preview", () => {
    render(<HeroSection />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading.textContent).toContain("Domine a restauração de faróis");

    fireEvent.click(screen.getByRole("tab", { name: "Inventário" }));
    expect(heading.textContent).toContain("22 videoaulas, ebook e 5 bônus práticos");

    fireEvent.click(screen.getByRole("tab", { name: "Descoberta" }));
    expect(heading.textContent).toContain("Descubra o passo a passo técnico");

    const primaryCta = screen.getByRole("link", { name: /ver por dentro do material/i });
    expect(primaryCta.getAttribute("href")).toBe("#product-preview");
    expect(primaryCta.getAttribute("href")).not.toBe(CHECKOUT_URL);
  });

  it("keeps the official checkout link only inside #oferta and lists all 5 bonuses plus R$ 19,90 and Google Drive delivery", () => {
    const { container } = render(
      <>
        <HeroSection />
        <BonusesSection />
        <OfferAndDelivery />
      </>,
    );

    const checkoutLinks = Array.from(container.querySelectorAll(`a[href="${CHECKOUT_URL}"]`));
    expect(checkoutLinks).toHaveLength(1);
    expect(checkoutLinks[0]?.closest("#oferta")).not.toBeNull();

    for (const item of INCLUDED_ITEMS) {
      expect(screen.getByText(item)).toBeTruthy();
    }
    expect(screen.getAllByText(/R\$ 19,90/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/Importante: produto 100% digital/i)).toBeTruthy();
  });
});