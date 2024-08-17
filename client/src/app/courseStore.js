import create from "zustand";

import { devtools, persist } from "zustand/middleware";

const courseStore = (set) => ({
  courses: "",
  trekDateId: "",
  trekTypeId: "",

  addDateId: (dateId) => {
    set((state) => ({
      trekDateId: dateId,
    }));
  },
  addTrekTypeId: (trektypeId) => {
    set((state) => ({
      trekTypeId: trektypeId,
    }));
  },
  addCourse: (course) => {
    set((state) => ({
      courses: course,
    }));
  },
});

const useCourseStore = create(
  devtools(
    persist(courseStore, {
      name: "courses",
    })
  )
);

export default useCourseStore;
