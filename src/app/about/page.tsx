import type { Metadata } from "next";
import { restaurantInfo } from "@/lib/menu-data";

export const metadata: Metadata = {
  title: "About | Passione Emporio",
  description: "The story behind Passione Emporio on 5th, a corner of Italy in Berkeley, CA.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
        Our Story
      </p>
      <h1 className="mt-3 text-center font-display text-4xl italic text-brand-black">
        A Corner of Italy in Berkeley
      </h1>

      <div className="mt-10 space-y-6 text-lg leading-relaxed text-brand-black/75">
        <p>
          {restaurantInfo.name} was born from a simple idea: bring the warmth,
          craft, and flavor of an Italian table to the East Bay. Every plate that
          leaves our kitchen starts with the same values — organic grains, honest
          technique, and a house made touch, from our hand-rolled pasta to our
          wood-fired pizza dough.
        </p>
        <p>
          On 5th Street in Berkeley, our dining room is small on purpose. It keeps
          things personal — a place where regulars are greeted by name and first
          time guests are treated like they&apos;ve been coming for years.
        </p>
        <p>
          Whether you&apos;re joining us for a long dinner over a bottle of
          Italian wine, picking up a pizza on the way home, or sending a gift
          card to someone who needs a little passione in their life, we&apos;re
          glad you&apos;re here.
        </p>
      </div>
    </div>
  );
}
