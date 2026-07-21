import type { Metadata } from "next";
import OpenTableWidget from "@/components/OpenTableWidget";
import { restaurantInfo } from "@/lib/menu-data";

export const metadata: Metadata = {
  title: "Reservations | Passione Emporio",
  description: "Reserve a table at Passione Emporio on 5th in Berkeley, CA via OpenTable.",
};

export default function ReservePage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
        Reservations
      </p>
      <h1 className="mt-3 font-display text-4xl italic text-brand-black">
        Book Your Table
      </h1>
      <p className="mt-4 text-brand-black/70">
        {restaurantInfo.hours} · {restaurantInfo.hoursClosed}
      </p>

      <div className="mt-10">
        <OpenTableWidget />
      </div>

      <p className="mt-8 text-sm text-brand-black/60">
        Prefer to call? Reach us at{" "}
        <a href={restaurantInfo.phoneHref} className="font-semibold text-brand-green">
          {restaurantInfo.phone}
        </a>
        .
      </p>
    </div>
  );
}
