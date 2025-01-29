/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    //to add custom utility if needed
    function ({ addComponents }) {
      addComponents({
        //add the custom class here
        ".btn-primary": {
          border: "2px solid black",
          padding: "1px",
          color: "white",
          fontWeight: "500",
          backgroundColor: "rgb(71, 85, 105)",
        },
      });
    },
  ],
};
