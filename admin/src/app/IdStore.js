import { create } from "zustand"; // Update your Zustand import

import { devtools, persist } from "zustand/middleware";

const IdStore = (set) => ({
  trekId: "",
  loading: true,

  setLoading: (value) => set({ loading: value }),

  addTrekId: (trekId) => {
    set((state) => ({
      trekId: trekId,
    }));
  },
});

const useIdStore = create(
  devtools(
    persist(IdStore, {
      name: "ids",
    })
  )
);

export default useIdStore;
