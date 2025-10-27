/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,js,ts,jsx,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Elegante y Sofisticada para Filigrana
        'ivory': '#F5F5DC',
        'cream': '#FFFFF0',
        'warm-gray-light': '#E0E0E0',
        'warm-gray-lighter': '#F0F0F0',
        'charcoal': '#333333',
        'charcoal-dark': '#1C1C1C',
        'gold': '#D4AF37',
        'bronze': '#B87333',
        'copper': '#CD7F32',
      }
    },
  },
  plugins: [],
}

