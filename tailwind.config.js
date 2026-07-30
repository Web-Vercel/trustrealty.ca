/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: { colors: { ink: "#12243f", brand: "#cf1736", mist: "#f4f6f9" }, fontFamily: { display: ["Playfair Display", "serif"], sans: ["Inter", "sans-serif"] } } },
  plugins: []
};
