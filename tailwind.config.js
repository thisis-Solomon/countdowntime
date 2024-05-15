/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Grayishblue: "hsl(237, 18%, 59%)",
        Softred: "hsl(345, 95%, 68%)",
      },
    },
  },
  plugins: [],
};
