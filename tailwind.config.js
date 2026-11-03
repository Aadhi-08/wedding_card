/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF6EF', // Primary background
          200: '#F3EBDD', // Card background
          300: '#EADBCE', // Border subtle
          400: '#DBC5B0',
        },
        maroon: {
          50: '#FBF4F5',
          100: '#F4E3E5',
          300: '#C7909A',
          500: '#8A6468', // Secondary text
          700: '#6E3943', // Primary text
          800: '#522830',
          900: '#4A1E27', // Deep accent maroon
        },
        gold: {
          100: '#F8F4E8',
          200: '#EDE2C4',
          300: '#E5D5AA', // Soft border
          400: '#D4AF37', // Bright gold
          500: '#B89B5E', // Primary gold accent
          600: '#997E43',
          700: '#755F30',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        script: ['"Great Vibes"', '"Alex Brush"', 'cursive'],
        body: ['"Cinzel"', '"Cormorant"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'invitation': '0 10px 30px -5px rgba(110, 57, 67, 0.08), 0 4px 12px -2px rgba(184, 155, 94, 0.1)',
        'card': '0 4px 20px rgba(110, 57, 67, 0.05)',
        'gold-glow': '0 0 25px rgba(184, 155, 94, 0.3)',
      },
      backgroundImage: {
        'cream-texture': "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><rect width=\"100\" height=\"100\" fill=\"%23FAF6EF\"/><path d=\"M0 0h100v100H0z\" fill=\"%23F3EBDD\" fill-opacity=\"0.2\"/></svg>')",
      }
    },
  },
  plugins: [],
}
