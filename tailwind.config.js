/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    screens: {
      xs: "300px",  //360px
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      'inter': ['Inter'],
      'mont': ['Montserrat'],
      'mont_alt': ['Montserrat Alternates'],
      'open': ['Open Sans'],
      'manja': ['Manjari']
    },
    colors: {
      primary : "#000066",

      secondary: "#299EF3",

      tertiary: "#6F8EB3",

      MODAL_BACKGROUND: "rgba(11, 12, 14, 0.77)",

      GREEN: {
        _100: "#70C217",
        _200: "#74CF00"
      },

      BLUE: {
        _100: "#B3E8F3",
        _200: "#0098FA",
        _300: "#ECF2F9",
        _400: "#3B82F6"
      },

      PURPLE: {
        _100: "#4A3195"
      },

      BROWN: {
        _100: "#FDE4B3"
      },

      LEMON: {
        _100: "#E1F3B5"
      },

      RED: {
        _100: "#F36F56",
        _200: '#FF6C4C'
      },

      PINK: {
        _100: "#FBD4CC",
        _200: "#ffc440",
        _300: "#FF5168"
      },

      YELLOW: {
        _100: "#F0C046",
        _200: "#F8A401"
      },

      NEUTRAL: {
        _100: "#272D4E",
        _200: "#1E1E1E",
        _300: "#212121",
        _400: "#828282",
        _500: "#133240",
        _600: "#8692A6",
        _700: "#A5A5A5",
        _800: "#999999",
        _900: "#5F647C",
        _1000: "#E7E7EE",
        _1100: "#667085",
        _1200: "#475467",
        _1300: "#686868"
      },

      MODAL_BACKGROUND: "rgba(11, 12, 14, 0.77)",
  },
},
  plugins: [],
}
