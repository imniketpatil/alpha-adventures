import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const trekDifficultyStore = (set) => ({
  trekDifficultyList: [],

  addTreks: (treks) => {
    set((state) => ({
      trekDifficultyList: treks,
    }));
  },

  removeTreks: () => {
    set(() => ({
      trekDifficultyList: [],
    }));
  },
});

const useTrekDifficultyStore = create(
  devtools(
    persist(trekDifficultyStore, {
      name: "trekDifficultyList",
    })
  )
);

export default useTrekDifficultyStore;
