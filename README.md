# Passione Emporio

Marketing site for Passione Emporio on 5th (Berkeley, CA) — homepage, full
dinner menu, table reservations, takeout ordering, and gift cards.

Built with Next.js (App Router) + Tailwind CSS v4.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

Copy `.env.example` to `.env.local` and fill in:

- `STRIPE_SECRET_KEY` — powers checkout for Order Takeout and Gift Cards. Without
  it, both pages render normally but checkout returns a friendly "not configured"
  message instead of charging anyone.
- `NEXT_PUBLIC_OPENTABLE_RID` — the restaurant's OpenTable Restaurant ID, found
  in the OpenTable for Restaurants dashboard under Widgets. Without it, the
  Reservations page shows a fallback link to OpenTable and the phone number
  instead of the embedded booking widget.

## Structure

- `src/lib/menu-data.ts` — the full dinner menu, transcribed from the current
  printed trifold. Update this file when the menu changes.
- `src/app/menu` — read-only menu page.
- `src/app/order` — takeout ordering flow (cart + Stripe Checkout), scoped to
  items marked `orderable` in `menu-data.ts` with a plain numeric price.
- `src/app/gift-cards` — gift card purchase flow (Stripe Checkout).
- `src/app/reserve` — OpenTable widget embed.
- `src/app/api/checkout` — creates Stripe Checkout Sessions for both flows.

## Deploy

Any Next.js host works (e.g. Vercel). Set the environment variables above in
the hosting provider's dashboard before going live.
