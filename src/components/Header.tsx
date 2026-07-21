"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { restaurantInfo } from "@/lib/menu-data";

const navLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/reserve", label: "Reservations" },
  { href: "/order", label: "Order Takeout" },
  { href: "/gift-cards", label: "Gift Cards" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-brand-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt={restaurantInfo.name}
            width={160}
            height={48}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-brand-black/80 transition hover:text-brand-red"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/reserve"
            className="rounded-full bg-brand-green px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-green/90"
          >
            Reserve a Table
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span className="h-0.5 w-6 bg-brand-black" />
          <span className="h-0.5 w-6 bg-brand-black" />
          <span className="h-0.5 w-6 bg-brand-black" />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-black/10 bg-brand-cream px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded px-2 py-2 text-base font-medium text-brand-black/85 hover:bg-black/5"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/reserve"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-brand-green px-5 py-2 text-center text-sm font-semibold text-white"
          >
            Reserve a Table
          </Link>
        </nav>
      )}
    </header>
  );
}
