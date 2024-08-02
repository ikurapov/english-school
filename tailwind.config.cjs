/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        inter: ["Inter"],
      },
      colors: {
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        background: {
          primary: "rgb(var(--color-background-primary) / <alpha-value>)",
          secondary: "rgb(var(--color-background-secondary) / <alpha-value>)",
        },
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
        error: "rgb(var(--color-error) / <alpha-value>)",
      },
    },
    backgroundImage: {
      //@eslint-disable-next-line @typescript-eslint/naming-convention
      "main-bg": "url('./src/assets/bg/Gradient.jpg')",
    },
  },
  variants: {},
  plugins: [],
};
