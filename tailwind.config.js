/** @type {import('tailwindcss').Config} */
module.exports = {
  // js와 jsx파일에서 tailwindcss를 사용하도록 설정
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#F96162",
      },
      backgroundImage: {
        banner: `url('../public/images/banner.jpg')`,
      },
    },
  },
  plugins: [],
};
