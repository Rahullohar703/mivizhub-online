/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        offWhite: "#FAFAFA",
        subtleGray: "#F4F4F5",
        textMain: "#18181B",
        textMuted: "#71717A",
        brandBlack: "#09090B",
        brandAccent: "#2563EB", 
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
