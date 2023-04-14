/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary-light": "#4d4d4d",
                "primary-dark": "#999999",
            }
        },
    },
    plugins: [],
}