/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    preflight: false
  },
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1rem',
        lg: "2rem",
        xl: '2rem',
        '2xl': '2rem',
      },
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        blue: '#1677ff',
        purple: '#722ED1',
        cyan: '#13C2C2',
        green: '#52C41A',
        magenta: '#EB2F96',
        pink: '#eb2f96',
        red: '#F5222D',
        orange: '#FA8C16',
        yellow: '#FADB14',
        volcano: '#FA541C',
        geekblue: '#2F54EB',
        gold: '#FAAD14',
        lime: '#A0D911',
        layout: "#F5F5F5",
        secondary: "#000000A6"
      }
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}

