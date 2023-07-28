/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': '#010916',
        'main': '#FFFFFF',
        'main-2': '#F8F8F8'
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        head: ['Montserrat', 'sans-serif']
      },
      backgroundImage: {
        'brand-linear': 'linear-gradient(to bottom, #F1F3AA, #8C9B9A, #5E5D5C, #231D0B)',
        'farm': "url('/assets/farm-picture.png')"
      },
      fontSize: {
        'heading': '5rem'
      },
      screens: {
        'xs': '480px',
        'sm': '576px',
        'md':  '768px',
        'lg': '1024px',
        'xl': '1200px'
      }
    
    },
  },
  plugins: [],
}

