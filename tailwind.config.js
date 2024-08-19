/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Karla: ['Inter', 'sans-serif']
      },
      colors: {
        SoftOrange: 'var(--SoftOrange)',
        SoftRed: 'var(--SoftRed)',
        OffWhite: 'var(--OffWhite)',
        GrayishBlue: 'var(--GrayishBlue)',
        DarkGrayishBlue: 'var(--DarkGrayishBlue)',
        VeryDarkBlue: 'var(--VeryDarkBlue)',
      },
    },
    screens: {
      'sm': {'max': '375px'},
      'md': {'max': '768px'}

    }
  },
  plugins: [],
}

