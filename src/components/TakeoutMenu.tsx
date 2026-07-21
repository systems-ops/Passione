"use client";

import { dinnerMenu } from "@/lib/menu-data";
import { parsePriceToCents } from "@/lib/price";
import { useCart } from "@/lib/cart-context";

export default function TakeoutMenu() {
  const { addItem } = useCart();

  return (
    <div className="space-y-12">
      {dinnerMenu.map((cat) => {
        const orderableItems = cat.items.filter(
          (item) => item.orderable && parsePriceToCents(item.price) !== null
        );
        if (!orderableItems.length) return null;

        return (
          <section key={cat.id}>
            <h2 className="font-display text-2xl italic text-brand-green">
              {cat.title}
            </h2>
            <ul className="mt-4 divide-y divide-black/5">
              {orderableItems.map((item) => {
                const cents = parsePriceToCents(item.price)!;
                return (
                  <li key={item.name} className="flex items-center gap-4 py-4">
                    <div className="flex-1">
                      <p className="font-semibold text-brand-black">{item.name}</p>
                      {item.description && (
                        <p className="mt-1 text-sm text-brand-black/60">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <span className="whitespace-nowrap font-semibold text-brand-black/80">
                      ${item.price}
                    </span>
                    <button
                      type="button"
                      onClick={() => addItem(item.name, cents)}
                      className="whitespace-nowrap rounded-full bg-brand-green px-4 py-2 text-xs font-semibold text-white transition hover:bg-brand-green/90"
                    >
                      Add
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
