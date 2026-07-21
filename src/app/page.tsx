import Link from "next/link";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { restaurantInfo } from "@/lib/menu-data";

const highlights = [
  {
    title: "Handmade Pasta",
    body: "Tagliatelle, gnocchi, and pappardelle made in-house with organic American grains.",
  },
  {
    title: "Wood-Fired Pizza",
    body: "Fourteen 12-inch pies on organic dough, from a classic Margherita to the truffle-kissed Fiori.",
  },
  {
    title: "Italian Wine & Beer",
    body: "A curated Italian wine list alongside Dolomiti, Menabrea, and Baladin on tap and in bottle.",
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-brand-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
              Berkeley, California
            </p>
            <h1 className="mt-4 font-display text-5xl italic leading-tight text-brand-black md:text-6xl">
              {restaurantInfo.tagline}
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-brand-black/70">
              Passione Emporio on 5th brings handmade pasta, wood-fired pizza, and
              honest Italian hospitality to Berkeley. Join us at the table, or bring
              the table to you.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/reserve"
                className="rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-green/90"
              >
                Reserve a Table
              </Link>
              <Link
                href="/order"
                className="rounded-full border border-brand-black/20 px-6 py-3 text-sm font-semibold text-brand-black transition hover:border-brand-red hover:text-brand-red"
              >
                Order Takeout
              </Link>
              <Link
                href="/gift-cards"
                className="rounded-full border border-brand-black/20 px-6 py-3 text-sm font-semibold text-brand-black transition hover:border-brand-red hover:text-brand-red"
              >
                Send a Gift Card
              </Link>
            </div>
          </div>
          <PhotoPlaceholder label="Hero shot — dining room, a hero dish, or the wood-fired oven" />
        </div>
      </section>

      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
          {highlights.map((h) => (
            <div key={h.title}>
              <h2 className="font-display text-2xl italic text-brand-black">
                {h.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-black/70">
                {h.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <p className="font-display text-2xl italic leading-relaxed text-brand-black md:text-3xl">
          &ldquo;Food made with passione, shared with familia.&rdquo;
        </p>
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-black/50">
          Fabrizio Cercatore · Founder
        </p>
      </section>

      <section className="bg-brand-green text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-3xl italic">Visit Us</h2>
            <p className="mt-4 text-white/90">{restaurantInfo.address}</p>
            <p className="mt-1 text-white/90">
              <a href={restaurantInfo.phoneHref} className="hover:underline">
                {restaurantInfo.phone}
              </a>
            </p>
            <p className="mt-4 text-white/90">{restaurantInfo.hours}</p>
            <p className="text-white/70">{restaurantInfo.hoursClosed}</p>
          </div>
          <div className="flex flex-wrap gap-4 md:justify-end">
            <Link
              href="/reserve"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-green hover:bg-white/90"
            >
              Reserve a Table
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
