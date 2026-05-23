/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sand:     '#f7f3ee',   // beige cálido — fondo base
        cream:    '#ede8e1',   // crema — secciones alternas
        walnut:   '#6b4c36',   // nogal — acento principal
        carbon:   '#1e1e1e',   // carbón — texto y fondos oscuros
        terra:    '#c4704f',   // terracota — acento secundario
        bark:     '#3d2b1f',   // marrón oscuro — hover
        linen:    '#faf8f5',   // lino — blanco cálido
        mist:     '#8a7f76',   // gris cálido — texto secundario
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
