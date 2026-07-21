import type { Metadata } from "next";
import Link from "next/link";
import { dinnerMenu } from "@/lib/menu-data";

export const metadata: Metadata = {
  title: "Dinner Menu | Passione Emporio",
  description:
    "The full Passione Emporio dinner menu — antipasti, pasta, wood-fired pizza, calzoni, secondi, dolci, and Italian beer.",
};

export default function MenuPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
          Dinner Menu
        </p>
        <h1 className="mt-3 font-display text-4xl italic text-brand-black">
          A Corner of Italy in Berkeley
        </h1>
        <p className="mt-4 text-sm text-brand-black/60">
          Ask your server about our vegan &amp; gluten-free pasta and pizza options.
          <br />
          Consumer Advisory: Consumption of undercooked meat, poultry, eggs, or
          seafood may increase the risk of food-borne illness.
        </p>
        <div className="mt-6">
          <Link
            href="/order"
            className="rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-green/90"
          >
            Order This Menu for Pickup
          </Link>
        </div>
      </div>

      <nav className="mt-10 flex flex-wrap justify-center gap-x-4 gap-y-2 border-y border-black/10 py-4 text-sm">
        {dinnerMenu.map((cat) => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            className="text-brand-black/70 hover:text-brand-red"
          >
            {cat.title}
          </a>
        ))}
      </nav>

      <div className="mt-12 space-y-16">
        {dinnerMenu.map((cat) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-24">
            <h2 className="font-display text-2xl italic text-brand-green">
              {cat.title}
            </h2>
            {cat.note && (
              <p className="mt-2 text-xs italic text-brand-black/50">{cat.note}</p>
            )}
            <ul className="mt-6 divide-y divide-black/5">
              {cat.items.map((item) => (
                <li key={item.name} className="flex gap-4 py-4">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2">
                      <span className="font-semibold text-brand-black">
                        {item.name}
                      </span>
                      {item.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-brand-green/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-green"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {item.description && (
                      <p className="mt-1 text-sm text-brand-black/60">
                        {item.description}
                      </p>
                    )}
                  </div>
                  {item.price && (
                    <span className="whitespace-nowrap self-start font-semibold text-brand-black/80">
                      ${item.price}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
