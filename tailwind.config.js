/** @type {import('tailwindcss').Config} */
export default {
    mode: "jit",
    // These paths are just examples, customize them to match your project structure
    purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
          fontFamily: {
            Montserrat: ["Montserrat", "sans-serif"],
            Roboto: ["Roboto", "sans-serif"]
          }
        },
    },
    plugins: [],
};
