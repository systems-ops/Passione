import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Passione Emporio",
  description:
    "The story of Passione Emporio and Hot Italian, and founder Fabrizio Cercatore's journey from Cinque Terre to Berkeley, CA.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
        About Us
      </p>
      <h1 className="mt-3 text-center font-display text-4xl italic text-brand-black">
        A Corner of Italy
      </h1>

      <div className="mt-10 space-y-6 text-lg leading-relaxed text-brand-black/75">
        <p>
          Welcome to Passione Emporio and Hot Italian, two distinct brands united
          by one vision: to bring authentic, high-quality Italian cuisine to
          Berkeley.
        </p>
      </div>

      <section className="mt-14">
        <h2 className="font-display text-2xl italic text-brand-green">Our Story</h2>
        <div className="mt-4 space-y-5 leading-relaxed text-brand-black/75">
          <p>
            Founded by Fabrizio Cercatore, a passionate Italian Maestro pizzaiolo
            and entrepreneur, our journey began with a simple mission: to share
            the art of Italian cooking with the world. Born and raised in Italy,
            Fabrizio honed his skills in the kitchens of his homeland, mastering
            traditional techniques while fostering a deep respect for quality
            ingredients.
          </p>
          <p>
            In 2008, Fabrizio brought his culinary expertise to California,
            introducing innovative concepts that redefined Italian dining. With
            over a decade of experience and a commitment to excellence, Fabrizio
            created two unique brands:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <span className="font-semibold text-brand-black">Passione Emporio</span>,
              a celebration of fresh, handmade pasta and gnocchi, rooted in the
              traditions of Italian craftsmanship.
            </li>
            <li>
              <span className="font-semibold text-brand-black">Hot Italian</span>,
              a modern twist on artisanal pizza, featuring organic ingredients,
              creative crust options, and bold, flavorful combinations.
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl italic text-brand-green">
          Our Berkeley Location
        </h2>
        <div className="mt-4 space-y-5 leading-relaxed text-brand-black/75">
          <p>
            At our Berkeley location, you&apos;ll experience the best of both
            worlds. Our menu brings together the handmade pasta and gnocchi of
            Passione Emporio with the signature pizzas and salads of Hot Italian,
            creating a dining experience that showcases the diversity of Italian
            cuisine.
          </p>
          <p>
            Every dish is crafted using products made by Passione Brands, our
            in-house production hub located right here in Berkeley. From organic
            pasta and pizza dough to gelato, our commitment to quality and
            authenticity shines through every bite.
          </p>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl italic text-brand-green">Our Mission</h2>
        <div className="mt-4 space-y-5 leading-relaxed text-brand-black/75">
          <p>
            We believe in making food with passione and purpose. For us,
            it&apos;s about more than just cooking — it&apos;s about creating
            moments, building community, and sharing the flavors of Italy with
            our guests.
          </p>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl italic text-brand-green">
          Meet Fabrizio Cercatore
        </h2>
        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-start">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl">
            <Image
              src="/images/fabrizio.jpg"
              alt="Fabrizio Cercatore tossing pizza dough"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
          <div className="space-y-5 leading-relaxed text-brand-black/75">
            <p>
              Fabrizio&apos;s journey began in Italy, where he opened his first
              restaurant, La Tavernetta, at just 21 years old in the picturesque
              Cinque Terre region. Over 17 years, Fabrizio expanded his menu to
              include over 90 types of pizza, earning a reputation as a Maestro
              Pizzaiolo.
            </p>
            <p>
              After moving to California, Fabrizio introduced Hot Italian in
              2008, bringing a modern wave of Italian pizza to the West Coast.
              Later, he founded Passione Emporio to highlight his passion for
              artisanal pasta and authentic Italian cooking.
            </p>
            <p>
              Today, Fabrizio continues to innovate, combining tradition with
              creativity to deliver unforgettable culinary experiences. His
              energy, dedication, and love for Italian cuisine are at the heart
              of everything we do.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl italic text-brand-green">
          Why Choose Us?
        </h2>
        <ul className="mt-4 space-y-4 leading-relaxed text-brand-black/75">
          <li>
            <span className="font-semibold text-brand-black">Authenticity:</span>{" "}
            From our pasta to our pizza dough, everything is crafted with the
            care and expertise you&apos;d find in Italy.
          </li>
          <li>
            <span className="font-semibold text-brand-black">
              Quality Ingredients:
            </span>{" "}
            We use organic, non-GMO ingredients to ensure every dish meets the
            highest standards.
          </li>
          <li>
            <span className="font-semibold text-brand-black">
              Community Focus:
            </span>{" "}
            As a family-run business, we take pride in creating a welcoming
            space where people can gather and enjoy the best of Italian cuisine.
          </li>
        </ul>
      </section>

      <p className="mt-14 text-center text-lg leading-relaxed text-brand-black/75">
        Join us at Passione Emporio / Hot Italian in Berkeley and let us take you
        on a journey through the flavors of Italy. Whether you&apos;re savoring
        handmade gnocchi, indulging in a slice of artisanal pizza, or enjoying a
        scoop of gelato, we promise an experience you&apos;ll never forget.
      </p>
    </div>
  );
}
