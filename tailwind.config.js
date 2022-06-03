module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bg: "url('/lizard-bg.png')",
      },
      colors: {
        themegreen: "#34C943",
      },
    },
  },
  plugins: [],
};
