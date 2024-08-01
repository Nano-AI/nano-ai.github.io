/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      background: "#0f1326",
      primary:     "#7C98B3",
      secondary:  "#B4D2E7",
      light:       "#CEE5F2",
      dark:        "#4B5043",
      white:      "#F8F0FB",
      grey:       "#E3E3E3",
      pureWhite : "#FFFFFF",
    }
  },
  plugins: [],
}
