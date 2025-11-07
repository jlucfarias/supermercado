"use client";

import { cn } from '@/lib/utils';
import { useBasketStore } from '@/stores/basket';

export default function BasketCount() {
  const count = useBasketStore(state => state.count);

  if (!count) {
    return null;
  }

  return (
    <span className={cn(
      "absolute top-0 right-0 rounded-full bg-red-500 text-white bold",
      { "p-1 text-xs": count > 9, "px-1.5 text-sm": count < 9 }
    )}>
      {count > 9 ? "9+" : count}
    </span>
  );
}
