import type { Metadata } from "next";
import { Manrope, Fraunces } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: "Passione Emporio | A Corner of Italy",
  description:
    "Passione Emporio on 5th — an authentic Italian restaurant in Berkeley, CA serving handmade pasta, wood-fired pizza, and Italian wine. Reserve a table, order takeout, or send a gift card.",
  metadataBase: new URL("https://www.passioneemporio.com"),
  openGraph: {
    title: "Passione Emporio | A Corner of Italy",
    description:
      "Authentic Italian dining in Berkeley, CA. Handmade pasta, wood-fired pizza, and Italian wine.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${fraunces.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
