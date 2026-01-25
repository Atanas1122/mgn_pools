/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0066cc',
                secondary: '#003366',
                accent: '#00aaff',
            },
            fontFamily: {
                sans: ['"Open Sans"', 'Roboto', 'sans-serif'],
            },
        },
    },
    plugins: [],
}