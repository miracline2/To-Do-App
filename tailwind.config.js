/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xs": "320px",
        "2xs": "360px",
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1024px",
        lg: "1200px",
        xl: "1400px",
        xxl: "1700px",
      },
  
    },
  },
  plugins: [],
}