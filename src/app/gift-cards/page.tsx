import type { Metadata } from "next";
import GiftCardForm from "@/components/GiftCardForm";

export const metadata: Metadata = {
  title: "Gift Cards | Passione Emporio",
  description: "Buy a Passione Emporio gift card, redeemable in-restaurant or for takeout.",
};

export default function GiftCardsPage() {
  return <GiftCardForm />;
}
