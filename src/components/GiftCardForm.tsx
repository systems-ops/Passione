"use client";

import { useState } from "react";
import { restaurantInfo } from "@/lib/menu-data";

const presetAmounts = [25, 50, 75, 100, 150];

export default function GiftCardForm() {
  const [amount, setAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const effectiveAmount = customAmount ? parseFloat(customAmount) : amount;
  const isValidAmount = Number.isFinite(effectiveAmount) && effectiveAmount >= 5;

  async function handleCheckout() {
    if (!isValidAmount) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lines: [
            {
              name: "Gift Card",
              unitAmount: Math.round(effectiveAmount * 100),
              quantity: 1,
            },
          ],
          successPath: "/gift-cards/success",
          cancelPath: "/gift-cards",
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
    <div className="mx-auto max-w-xl px-6 py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
        Gift Cards
      </p>
      <h1 className="mt-3 font-display text-4xl italic text-brand-black">
        Share a Taste of Italy
      </h1>
      <p className="mt-4 text-brand-black/70">
        {restaurantInfo.name} gift cards are delivered by email and can be
        redeemed in-restaurant or for takeout orders.
      </p>

      <div className="mt-10 rounded-2xl border border-black/10 bg-white p-8">
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
          {presetAmounts.map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => {
                setAmount(preset);
                setCustomAmount("");
              }}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                !customAmount && amount === preset
                  ? "border-brand-green bg-brand-green text-white"
                  : "border-black/20 text-brand-black hover:border-brand-green"
              }`}
            >
              ${preset}
            </button>
          ))}
        </div>

        <div className="mt-6">
          <label className="block text-left text-sm font-medium text-brand-black/70">
            Or enter a custom amount
          </label>
          <input
            type="number"
            min={5}
            step={1}
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
            placeholder="$50"
            className="mt-2 w-full rounded-lg border border-black/20 px-4 py-2 text-brand-black focus:border-brand-green focus:outline-none"
          />
        </div>

        {error && <p className="mt-4 text-sm text-brand-red">{error}</p>}

        <button
          type="button"
          onClick={handleCheckout}
          disabled={!isValidAmount || loading}
          className="mt-6 w-full rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-green/90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {loading ? "Redirecting…" : `Buy $${isValidAmount ? effectiveAmount : "—"} Gift Card`}
        </button>
      </div>
    </div>
  );
}
