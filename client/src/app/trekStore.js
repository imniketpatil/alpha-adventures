import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const trekStore = (set) => ({
  trekList: [],

  addTreks: (treks) => {
    set((state) => ({
      trekList: treks,
    }));
  },

  removeTreks: () => {
    set(() => ({
      trekList: [],
    }));
  },
});

const useTrekStore = create(
  devtools(
    persist(trekStore, {
      name: "trekList",
    })
  )
);

export default useTrekStore;
