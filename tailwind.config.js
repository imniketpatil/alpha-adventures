/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('https://images.pexels.com/photos/2496880/pexels-photo-2496880.jpeg?auto=compress&cs=tinysrgb&w=600')",
      },
      boxShadow: {
        custom:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      },
    },
  },
  plugins: ["@tailwindcss/aspect-ratio"],
};
