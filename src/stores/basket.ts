import { create } from "zustand";

export type BasketState = {
  items: unknown[];
  count: number;
};

const initialState: BasketState = {
  items: [],
  count: 0,
}

export const useBasketStore = create<BasketState>(() => ({
  ...initialState,
}));

export const addToBasket = (item: unknown) => {
  const { items } = useBasketStore.getState() as any;

  items.push(item as any);
  useBasketStore.setState({ items, count: items.length + 1 });
};
