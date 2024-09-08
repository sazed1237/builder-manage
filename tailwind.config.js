/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#C1DEE8',
        secondaryColor: '#FBD9B9',
        blackColor: '#000000',
        textHeadingColor: '#1F1F1F',
        grayColor: '#BEBEBE',
        grayColor2: '#FAFAFA',
        white: '#FEFEFF',
        orangeColor: '#FF791A',
        greenColor: '#58BF52',
      },
    },
  },
  plugins: [],
}

