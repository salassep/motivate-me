/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F1EFE7',
        'primary-dark': '#bcbab3',
      }
    },
  },
  plugins: [],
}

