/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["bg-[#f87070]", "bg-[#70F3F8]", "bg-[#D881F8]", "text-[#f87070]"],
  theme: {
    extend: {
      colors: {
        Orange: "#f87070",
        Teal: "#70F3F8",
        Purple: "#D881F8",
      },
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
        Kumbhsans: "'Kumbh Sans'",
        Robotoslab: "'Roboto Slab'",
        Spacemono: "'Space Mono'",
      },
    },
  },
  plugins: [],
};
