"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { formatCents } from "@/lib/price";

export default function CartSummary() {
  const { lines, updateQuantity, removeItem, subtotal, itemCount } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lines: lines.map((l) => ({
            name: l.name,
            unitAmount: l.unitPrice,
            quantity: l.quantity,
          })),
          successPath: "/order/success",
          cancelPath: "/order",
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Something went wrong.");
        return;
      }
      window.location.href = data.url;
    } catch {
      setError("Couldn't reach checkout. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="sticky top-24 rounded-2xl border border-black/10 bg-white p-6">
      <h2 className="font-display text-xl italic text-brand-black">
        Your Order {itemCount > 0 && `(${itemCount})`}
      </h2>

      {lines.length === 0 ? (
        <p className="mt-4 text-sm text-brand-black/60">
          Your cart is empty. Add items from the menu to get started.
        </p>
      ) : (
        <ul className="mt-4 space-y-4">
          {lines.map((line) => (
            <li key={line.name} className="flex items-start justify-between gap-2 text-sm">
              <div className="flex-1">
                <p className="font-medium text-brand-black">{line.name}</p>
                <div className="mt-1 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => updateQuantity(line.name, line.quantity - 1)}
                    className="h-6 w-6 rounded-full border border-black/20 text-xs"
                    aria-label={`Decrease ${line.name} quantity`}
                  >
                    −
                  </button>
                  <span>{line.quantity}</span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(line.name, line.quantity + 1)}
                    className="h-6 w-6 rounded-full border border-black/20 text-xs"
                    aria-label={`Increase ${line.name} quantity`}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={() => removeItem(line.name)}
                    className="ml-2 text-xs text-brand-red hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <span className="whitespace-nowrap font-semibold text-brand-black/80">
                ${formatCents(line.unitPrice * line.quantity)}
              </span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-4 font-semibold text-brand-black">
        <span>Subtotal</span>
        <span>${formatCents(subtotal)}</span>
      </div>

      {error && <p className="mt-3 text-sm text-brand-red">{error}</p>}

      <button
        type="button"
        onClick={handleCheckout}
        disabled={lines.length === 0 || loading}
        className="mt-4 w-full rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-green/90 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {loading ? "Redirecting…" : "Checkout"}
      </button>
      <p className="mt-3 text-center text-xs text-brand-black/50">
        Pickup only, at {"2324 Fifth Street Unit A, Berkeley"}.
      </p>
    </div>
  );
}
