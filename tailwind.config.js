/*eslint-env node*/
const colors = require('tailwindcss/colors');

const systemFonts = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Helvetica',
  'Arial',
  'sans-serif',
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
];

module.exports = {
  mode: 'jit',
  purge: [
    './resources/views/**/*.blade.php',
    './resources/js/**/*.{js,vue,ts,scss}',
    './resources/sass/**/*.{scss}',
    './stories/**/*.{js,vue,ts,scss}',
  ],
  darkMode: false,
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    fontFamily: {
      sans: ['Open Sans', ...systemFonts],
      'proxima-nova': ['proxima-nova', ...systemFonts],
    },
    screens: {
      mobile: '475px',
      sm: '575px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
      pdftron: '1424px',
      '2xl': '1680px',
      '3xl': '1920px',
    },
    extend: {
      colors: {
        black: '#2f2f2f',
        'blue-gray': colors.blueGray,
        cyan: colors.cyan,
        orange: colors.orange,
        lime: colors.lime,
        'wunder-blue': {
          100: '#f8f9ff', // blue-gray-xtra-light
          200: '#eef1fe', // blue-gray-light
          300: '#dcdfe6', // border-disabled
          400: '#cfd3ee', // blue-gray-active
          500: '#b3baf9', // blue-gray-dark
          600: '#6f81ec', // blue-light
          700: '#4355f3', // blue-active
          800: '#0f40d8', // blue-dark
          900: '#16244f', // blue-navy
        },
        'wunder-indigo': {
          50: '#e0e8f9',
          100: '#bed0f7',
          200: '#98aeeb',
          300: '#7b93db',
          400: '#647acb',
          500: '#4c63b6',
          600: '#4055a8',
          700: '#35469c',
          800: '#2d3a8c',
          900: '#19216c',
        },
        neutral: {
          50: '#f0f3f8',
          100: '#d9dfec',
          200: '#bcc6dc',
          300: '#9facc8',
          400: '#8290b1',
          500: '#627398',
          600: '#485a81',
          700: '#334468',
          800: '#243353',
          900: '#102043',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
  corePlugins: {
    // Not only do we use this class for other things in the code, element-ui also
    // makes use of an invert class on elements which causes a really funky UI to
    // be used.
    //
    // Right now we have no use for the actual Tailwind invert class, so just disable
    // it entirely.
    invert: false,
  },
};
