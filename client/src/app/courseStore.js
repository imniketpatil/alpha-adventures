import create from "zustand";

import { devtools, persist } from "zustand/middleware";

const courseStore = (set) => ({
  courses: "",

  trekDateId: "",

  addDateId: (dateId) => {
    set((state) => ({
      trekDateId: dateId,
    }));
  },

  removeDateId: () => {
    set((state) => ({
      trekDateId: "",
    }));
  },

  addCourse: (course) => {
    set((state) => ({
      courses: course,
    }));
  },

  removeCourse: () => {
    set((state) => ({
      courses: "",
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
