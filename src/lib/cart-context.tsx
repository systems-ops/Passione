"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type CartLine = {
  name: string;
  unitPrice: number;
  quantity: number;
};

type CartContextValue = {
  lines: CartLine[];
  addItem: (name: string, unitPrice: number) => void;
  removeItem: (name: string) => void;
  updateQuantity: (name: string, quantity: number) => void;
  clear: () => void;
  subtotal: number;
  itemCount: number;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "passione-takeout-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration from localStorage on mount
      if (raw) setLines(JSON.parse(raw));
    } catch {
      // ignore malformed storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines, hydrated]);

  const addItem = (name: string, unitPrice: number) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.name === name);
      if (existing) {
        return prev.map((l) =>
          l.name === name ? { ...l, quantity: l.quantity + 1 } : l
        );
      }
      return [...prev, { name, unitPrice, quantity: 1 }];
    });
  };

  const removeItem = (name: string) => {
    setLines((prev) => prev.filter((l) => l.name !== name));
  };

  const updateQuantity = (name: string, quantity: number) => {
    setLines((prev) =>
      quantity <= 0
        ? prev.filter((l) => l.name !== name)
        : prev.map((l) => (l.name === name ? { ...l, quantity } : l))
    );
  };

  const clear = () => setLines([]);

  const subtotal = useMemo(
    () => lines.reduce((sum, l) => sum + l.unitPrice * l.quantity, 0),
    [lines]
  );
  const itemCount = useMemo(
    () => lines.reduce((sum, l) => sum + l.quantity, 0),
    [lines]
  );

  return (
    <CartContext.Provider
      value={{ lines, addItem, removeItem, updateQuantity, clear, subtotal, itemCount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
