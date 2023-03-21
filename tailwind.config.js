/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '1000px',
      lg: '1520px',
      
    },
    extend: {
      colors:{
        darkGray: 'hsl(260, 5%, 11%)',
        lightGreen: 'hsl(152, 74%, 43%)',
        superLightGreen: '#19a463',
        greenWhite: '#F1FDF7',
        lightGray: '#FAFAFA',
        fontLightGray: '#62646A',
        FontGray: '#B5B6BA',
        darkFontGray: '#404145',
        blackGray: '#222325',
        darkBlue:'#0D084D',
        purpleBg: '#584AFF',
        textGreen: '#003912',
        lightBlue: '#446EE7',
        hoverGray: '#D4DEFB',
        maroonBg: '#53192A',
      }
    },
    fontFamily:{
      happyMonkey : ['Happy Monkey'],
      playfair : ['Playfair Display'],
    },
  },
  plugins: [],
}
