import Image from "next/image";
import Link from "next/link";
import { restaurantInfo } from "@/lib/menu-data";

const highlights = [
  {
    title: "Handmade Pasta",
    body: "Tagliatelle, gnocchi, and pappardelle made in-house with organic American grains.",
    image: {
      src: "/images/pasta.jpg",
      alt: "A bowl of house-made tagliatelle with a creamy sauce and basil",
    },
  },
  {
    title: "Wood-Fired Pizza",
    body: "Fourteen 12-inch pies on organic dough, from a classic Margherita to the truffle-kissed Fiori.",
    image: {
      src: "/images/pizza-prep.jpg",
      alt: "Pizzas being hand-topped in the Passione Emporio kitchen",
    },
  },
  {
    title: "Italian Wine & Beer",
    body: "A curated Italian wine list alongside Dolomiti, Menabrea, and Baladin on tap and in bottle.",
    image: {
      src: "/images/wine.jpg",
      alt: "A row of Italian red wine bottles",
    },
  },
];

const kitchenGallery = [
  {
    src: "/images/charcuterie-overhead.jpg",
    alt: "A charcuterie and cheese board with prosciutto, bresaola, and an Aperol spritz",
  },
  {
    src: "/images/seafood.jpg",
    alt: "A seafood dish with mussels, clams, and shrimp, served with an Aperol spritz",
  },
  {
    src: "/images/seafood-pasta.jpg",
    alt: "Squid ink pasta with mussels, clams, and shrimp",
  },
  {
    src: "/images/charcuterie-table.jpg",
    alt: "A charcuterie board set at a table in the Passione Emporio dining room",
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
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
            <Image
              src="/images/dining-room.webp"
              alt="The Passione Emporio dining room in Berkeley"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
          {highlights.map((h) => (
            <div key={h.title}>
              {h.image && (
                <div className="relative mb-5 aspect-[4/3] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={h.image.src}
                    alt={h.image.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
              )}
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

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-3xl italic text-brand-black">
            From Our Kitchen
          </h2>
          <Link
            href="/menu"
            className="text-sm font-semibold text-brand-red hover:underline"
          >
            View full menu →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {kitchenGallery.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 25vw, 50vw"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-cream">
        <div className="mx-auto grid max-w-4xl gap-8 px-6 py-16 md:grid-cols-[auto_1fr] md:items-center">
          <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-full md:w-48">
            <Image
              src="/images/fabrizio-laughing.jpg"
              alt="Fabrizio Cercatore laughing while tossing pizza dough"
              fill
              className="object-cover"
              sizes="192px"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="font-display text-2xl italic leading-relaxed text-brand-black md:text-3xl">
              &ldquo;Food made with passione, shared with familia.&rdquo;
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-black/50">
              Fabrizio Cercatore · Founder
            </p>
          </div>
        </div>
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
