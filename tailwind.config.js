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

              'primary': '#A02334', // Customize other colors if needed
              'background': '#ffffff', // Set your background color
            },
          },
        ],
      },
};
