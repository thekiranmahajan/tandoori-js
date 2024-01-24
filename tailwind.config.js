/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Pacifico: ['"Pacifico"', ...defaultTheme.fontFamily.sans],
        Montserrat: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
        RobotoCondenced: [
          '"Roboto Condensed"',
          ...defaultTheme.fontFamily.serif,
        ],
      },
    },
  },
  plugins: [],
};
