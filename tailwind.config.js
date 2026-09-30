/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { ink: "#0a0a0c", fizz: "#ff5a1f" },
      fontFamily: { sans: ["system-ui", "-apple-system", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"] },
    },
  },
  plugins: [],
};
