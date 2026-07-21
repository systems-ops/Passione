"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function OrderSuccessPage() {
  const { clear } = useCart();

  useEffect(() => {
    clear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mx-auto max-w-lg px-6 py-24 text-center">
      <h1 className="font-display text-4xl italic text-brand-black">Grazie!</h1>
      <p className="mt-4 text-brand-black/70">
        Your order is confirmed. We&apos;ll have it ready for pickup at Passione
        Emporio on 5th — you&apos;ll receive a receipt by email.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white hover:bg-brand-green/90"
      >
        Back to Home
      </Link>
    </div>
  );
}
