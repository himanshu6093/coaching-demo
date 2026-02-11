/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    blue: '#6366F1', // Softer indigo instead of dark navy
                    dark: '#4F46E5', // Slightly darker indigo
                    light: '#818CF8', // Light indigo
                },
                accent: {
                    orange: '#F59E0B', // Warmer amber-orange
                    light: '#FBBF24',
                },
                neutral: {
                    50: '#FAFAF9',
                    100: '#F5F5F4',
                    200: '#E7E5E4',
                    800: '#292524',
                    900: '#1C1917',
                }
            },
            fontFamily: {
                heading: ['Poppins', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
