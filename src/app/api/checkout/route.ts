import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { restaurantInfo } from "@/lib/menu-data";

type CheckoutLine = {
  name: string;
  unitAmount: number;
  quantity: number;
};

type CheckoutBody = {
  lines: CheckoutLine[];
  successPath: string;
  cancelPath: string;
};

export async function POST(request: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json(
      {
        error:
          "Online payments aren't configured yet. Set STRIPE_SECRET_KEY to enable checkout.",
      },
      { status: 501 }
    );
  }

  const body = (await request.json()) as CheckoutBody;

  if (!body.lines?.length) {
    return NextResponse.json({ error: "Cart is empty." }, { status: 400 });
  }

  for (const line of body.lines) {
    if (!line.name || !Number.isFinite(line.unitAmount) || line.unitAmount <= 0 || !Number.isFinite(line.quantity) || line.quantity <= 0) {
      return NextResponse.json({ error: "Invalid line item." }, { status: 400 });
    }
  }

  const stripe = new Stripe(secretKey);
  const origin = request.nextUrl.origin;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: body.lines.map((line) => ({
      price_data: {
        currency: "usd",
        product_data: { name: `${restaurantInfo.name} — ${line.name}` },
        unit_amount: Math.round(line.unitAmount),
      },
      quantity: line.quantity,
    })),
    success_url: `${origin}${body.successPath}?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}${body.cancelPath}`,
  });

  return NextResponse.json({ url: session.url });
}
