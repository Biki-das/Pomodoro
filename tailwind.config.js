/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        reveal: "reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s",
      },
      keyframes: {
        reveal: {
          "0%": {
            transform: "translate(0,100%)",
          },
          "100%": {
            transform: "translate(0,0)",
          },
        },
      },
      fontFamily: {
        Kumbhsans: ["Kumbh Sans"],
        Robotoslab: ["Roboto Slab"],
        Spacemono: ["Space Mono"],
      },
    },
  },
  plugins: [],
};
