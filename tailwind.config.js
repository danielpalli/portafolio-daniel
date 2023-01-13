/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      sm: { min: "320px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }
      "2xl": { min: "1236px" },
      // => @media (min-width: 1536px) { ... }
      upMd: { max: "200px" },
      // => @media (min-width: 1536px) { ... }
      lgUp: { min: "1024px" },
      // => @media (min-width: 1536px) { ... }
      smUp: { min: "767px" },
    },
    extend: {},
  },
  plugins: [],
};
