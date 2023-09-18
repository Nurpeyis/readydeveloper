/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderColor: {
        glow: "rgba(255, 255, 255, .5)",
      },

      colors: {
        "blue-dark": "#012645",
        "skyblue-dark": "#559cd8",
        skyblue: "#7fc3fd",
        "skyblue-light": "#e5f3ff",
        "gray-dark": "#3e464e",
        gray: "#a0adb9",
      },

      dropShadow: (theme) => ({
        strict: `4px 4px 0 ${theme.colors.white}`,
        glow: `0 0 10px ${theme.colors["skyblue-light"]}`,
      }),
    },
  },
  plugins: [],
};
