import Image from "next/image";
import Link from "next/link";
import { restaurantInfo } from "@/lib/menu-data";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-brand-black text-brand-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <div className="inline-block rounded-lg bg-white px-3 py-2">
            <Image
              src="/images/logo.png"
              alt={restaurantInfo.name}
              width={180}
              height={54}
              className="h-10 w-auto"
            />
          </div>
          <p className="mt-4 max-w-xs text-sm text-brand-cream/70">
            {restaurantInfo.tagline}. Handmade pasta, wood-fired pizza, and Italian
            wine in the heart of Berkeley.
          </p>
        </div>

        <div>
          <h3 className="font-display italic text-lg text-brand-cream">Visit</h3>
          <p className="mt-3 text-sm text-brand-cream/80">{restaurantInfo.address}</p>
          <p className="mt-1 text-sm text-brand-cream/80">
            <a href={restaurantInfo.phoneHref} className="hover:text-brand-red">
              {restaurantInfo.phone}
            </a>
          </p>
          <p className="mt-3 text-sm text-brand-cream/80">{restaurantInfo.hours}</p>
          <p className="text-sm text-brand-cream/80">{restaurantInfo.hoursClosed}</p>
        </div>

        <div>
          <h3 className="font-display italic text-lg text-brand-cream">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm text-brand-cream/80">
            <li>
              <Link href="/menu" className="hover:text-brand-red">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/reserve" className="hover:text-brand-red">
                Reservations
              </Link>
            </li>
            <li>
              <Link href="/order" className="hover:text-brand-red">
                Order Takeout
              </Link>
            </li>
            <li>
              <Link href="/gift-cards" className="hover:text-brand-red">
                Gift Cards
              </Link>
            </li>
            <li>
              <a href={restaurantInfo.instagram} className="hover:text-brand-red">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-brand-cream/50">
        © {new Date().getFullYear()} {restaurantInfo.name}. All rights reserved.
      </div>
    </footer>
  );
}
