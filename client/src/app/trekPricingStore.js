import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const trekPricingStore = (set) => ({
  trekPriceList: [],

  addTreks: (treks) => {
    set((state) => ({
      trekPriceList: treks,
    }));
  },

  removeTreks: () => {
    set(() => ({
      trekPriceList: [],
    }));
  },
});

const useTrekPricingStore = create(
  devtools(
    persist(trekPricingStore, {
      name: "trekPriceList",
    })
  )
);

export default useTrekPricingStore;
