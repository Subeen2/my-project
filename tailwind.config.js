/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffc107",
        secondary: "#2979ff",
        success: "00c07f",
        failure: "ff6562",
      },
      fontSize: {
        "15px": "15px",
      },
    },
  },
  plugins: [],
};
