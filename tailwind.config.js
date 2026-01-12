/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: '#0F172A',
                orange: '#F97316',
            },
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
                quebec: ['"Quebec Serial"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
