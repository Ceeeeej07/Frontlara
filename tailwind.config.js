import defaultTheme from "tailwindcss/defaultTheme";
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            backgroundColor: {
                custom: '#f0f0f0', // Set your custom background color here
              },
        },
    },
    plugins: [
        daisyui,
    ],

    daisyui: {
        themes: [
          {
            mytheme: {

              'primary': '#003a96', //royal blue?
              'base-content': '#0b2f5b', // pastel blue?
              'secondary': '#ffa500',  // yellowish gold?
              'accent': '#ffa500',
              'background': '#ffffff',
            },
          },
        ],
      },
};
