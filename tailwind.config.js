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
          },
          keyframes: {
            navbar: {
              '0%': { transform: ' translateY(-100%)' },
              '100%': { transform: 'translateY(0)' },
            }
          },
          animation: {
            navbar: 'navbar 0.4s ease-in-out',
          }
        },
    },
    plugins: [],
};
