import type { Metadata } from "next";
import { restaurantInfo } from "@/lib/menu-data";

export const metadata: Metadata = {
  title: "Contact | Passione Emporio",
  description: "Get in touch with, or find directions to, Passione Emporio on 5th in Berkeley, CA.",
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(restaurantInfo.address);

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
        Contact
      </p>
      <h1 className="mt-3 text-center font-display text-4xl italic text-brand-black">
        Find Us
      </h1>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-green">
              Address
            </h2>
            <p className="mt-2 text-brand-black/80">{restaurantInfo.address}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-green">
              Phone
            </h2>
            <a href={restaurantInfo.phoneHref} className="mt-2 block text-brand-black/80 hover:text-brand-red">
              {restaurantInfo.phone}
            </a>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-green">
              Hours
            </h2>
            <p className="mt-2 text-brand-black/80">{restaurantInfo.hours}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-green">
              Follow
            </h2>
            <a
              href={restaurantInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-brand-black/80 hover:text-brand-red"
            >
              @passione_emporioon5th
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-black/10">
          <iframe
            title="Map to Passione Emporio"
            className="h-full min-h-[320px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
          />
        </div>
      </div>
    </div>
  );
}
