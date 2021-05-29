module.exports = {
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mainOne: "#471069",
        mainTwo: "#442A78",
        mainThree: "#432E7B",
        mainFour: "#3F4C8C",
        secondaryOne: "#3A77A5",
        secondaryTwo: "#3791B4",
        secondaryThree: "#33ABC3",
        secondaryFour: "#30C5D2"
      },
      fontFamily: {
        mono: ["Fira Code"],
        customOne: ["Montserrat"]
      }
    }
  },
  mode: "jit",
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/forms")]
};
