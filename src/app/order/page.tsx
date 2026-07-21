import type { Metadata } from "next";
import TakeoutMenu from "@/components/TakeoutMenu";
import CartSummary from "@/components/CartSummary";

export const metadata: Metadata = {
  title: "Order Takeout | Passione Emporio",
  description: "Order Passione Emporio's dinner menu online for pickup in Berkeley, CA.",
};

export default function OrderPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
          Takeout
        </p>
        <h1 className="mt-3 font-display text-4xl italic text-brand-black">
          Order for Pickup
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-brand-black/70">
          Build your order from our full dinner menu and pick it up at Passione
          Emporio on 5th. Pizza, pasta, antipasti, and dolci, made to go.
        </p>
      </div>

      <div className="mt-12 grid gap-12 md:grid-cols-[2fr_1fr]">
        <TakeoutMenu />
        <CartSummary />
      </div>
    </div>
  );
}
