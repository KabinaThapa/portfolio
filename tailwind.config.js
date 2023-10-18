/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      fontFamily: {
        custom:['Gelasio', 'serif'],
        kreon:['Kreon', 'serif'],
        poppins:['Poppins', 'sans-serif'],
        roboto:['Roboto', 'serif'],
        opensans:[ 'Open Sans', 'sans-serif'],
        caprasimo:[ 'Caprasimo'],
        aclonica:['Aclonica', 'sans-serif'],
        noto:['Noto Sans Osmanya', 'sans-serif'],
      },

    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

