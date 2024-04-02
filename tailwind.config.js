/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,}",
    "./components/**/*.{js,jsx,}",
    "./app/**/*.{js,jsx,}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4B40BB",
        secondary: "#343434",
      },
    },
  },
  plugins: [],
};
