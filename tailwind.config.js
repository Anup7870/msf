// const flowbite = require("flowbite-react/tailwind");

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//    theme: {
//       extend: {

//       },
//    },
//    plugins: [
//       // ...
//       flowbite.plugin(),
//    ],
// };

export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "node_modules/flowbite-react/lib/esm/**/*.js",
   ],
   theme: {
      extend: {
         colors: {
            checked: "#D20062 !important",
         },
         backgroundImage: {
            form: "url('/src/assets/formImage.jpg')",
         },
         fontFamily: {
            main: ["Roboto", "sans-serif"],
            title: ["Pacifico", "cursive"],
         },
      },
   },
   plugins: [require("flowbite/plugin")],
   important: true,
};
