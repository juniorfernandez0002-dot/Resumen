/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#0f172a', /* slate-900 */
          darker: '#020617', /* slate-950 */
          neon: '#38bdf8', /* sky-400 */
          teal: '#2dd4bf', /* teal-400 */
          gray: '#cbd5e1', /* slate-300 */
          purple: '#a855f7', /* purple-500 */
          pink: '#ec4899', /* pink-500 */
        }
      }
    },
  },
  plugins: [],
}
