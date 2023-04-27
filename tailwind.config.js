/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        contentShow: {
          "0%": {
            opacity: 0,
            transform: "translate(-50%, -48%) scale(0.96)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%, -50%) scale(1)",
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
