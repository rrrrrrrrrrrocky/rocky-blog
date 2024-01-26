/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

const BACKGROUND_WIDTH = {
  280: '280px',
  320: '320px',
  360: '360px',
  420: '420px',
};

const sizeList = (arrayLength = 101, multiple = 4, unit = 'px') => {
  let object = {};
  const multipleArray = {
    ...Array.from(Array(arrayLength)).map(
      (_, i) => `${Number(i) * multiple}${unit}`,
    ),
  };

  for (const j in multipleArray) {
    const key = multipleArray[j];
    object = { ...object, ...{ [key]: multipleArray[j] } };
  }

  return object;
};

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    boxShadow: {
      button: '1px 1px 4px rgba(0, 0, 0, 0.2)',
      input: '2px 2px 2px rgba(47, 128, 237, 0.2);',
      primary: '1px 1px 4px rgba(0, 0, 0, 0.25)',
    },
    extend: {
      /** animation: name | duration | timing-function | delay | iteration-count | direction | fill-mode | play-state> [,...]; */
      animation: {
        buttonHover: 'buttonHover 0.3s ease forwards',
        rippleEffect: 'rippleEffect 1s ease forwards',
      },

      borderRadius: { ...sizeList() },
      borderWidth: { ...sizeList(11, 1) },
      colors: {
        tp: {
          'blue-100': '#ECF6FF',
          'blue-101': '#F2FBFE',
          'blue-200': '#2D9CDB',
          'blue-300': '#2F80ED',
          'blue-400': '#0E4E97',
          'gray-100': '#E8EBED',
          'gray-200': '#C9CDD2',
          'gray-300': '#9FA4AA',
          'gray-400': '#72787F',
          'gray-500': '#464C53',
          'gray-600': '#26282B',
          'green-100': '#EEFDFA',
          'green-200': '#00AF89',
          'green-300': '#14866D',
          'red-100': '#FEE7E6',
          'red-200': '#EB5757',
          'red-300': '#B32424',
          'white-100': '#FFFFFF',
          'white-200': '#F7F8F9',
          'yellow-100': '#FEF6E7',
          'yellow-200': '#FFCC33',
          'yellow-300': '#F2994A',
        },
      },
      fontSize: {
        body1: ['16px', { fontWeight: '400', lineHeight: '20px' }],
        'body1-bold': ['16px', { fontWeight: '500', lineHeight: '20px' }],
        body2: ['16px', { fontWeight: '400', lineHeight: '24px' }],
        'body2-bold': ['16px', { fontWeight: '500', lineHeight: '24px' }],
        caption1: ['14px', { fontWeight: '400', lineHeight: '20px' }],
        'caption1-bold': ['14px', { fontWeight: '500', lineHeight: '20px' }],
        caption2: ['12px', { fontWeight: '400', lineHeight: '18px' }],
        'caption2-bold': ['12px', { fontWeight: '600', lineHeight: '18px' }],
        caption3: ['11px', { fontWeight: '400', lineHeight: '14px' }],
        head: ['24px', { fontWeight: '500', lineHeight: '33px' }],
        'head-bold': ['24px', { fontWeight: '700', lineHeight: '33px' }],
        number: ['18px', { fontWeight: '400', lineHeight: '20px' }],
        'number-bold': ['18px', { fontWeight: '500', lineHeight: '20px' }],
        'number-extra-bold': [
          '18px',
          { fontWeight: '600', lineHeight: '20px' },
        ],
        subTitle: ['18px', { fontWeight: '500', lineHeight: '26px' }],
        'subTitle-bold': ['18px', { fontWeight: '600', lineHeight: '26px' }],
        title: ['21px', { fontWeight: '500', lineHeight: '30px' }],
        'title-bold': ['21px', { fontWeight: '600', lineHeight: '30px' }],
        'title-extra-bold': ['21px', { fontWeight: '700', lineHeight: '30px' }],
      },
      height: { ...sizeList() },
      keyframes: (props) => {
        const { theme } = props;
        return {
          buttonHover: {
            '0%': {
              backgroundColor: theme('colors.tp.blue300'),
              boxShadow: theme('boxShadow.none'),
            },
            '100%': {
              backgroundColor: theme('colors.tp.blue400'),
              boxShadow: theme('boxShadow.lg'),
            },
          },
          rippleEffect: {
            '0%': {
              transform: 'scale(0)',
            },
            '100%': {
              backgroundColor: 'inherit',
              transform: 'scale(2)',
            },
          },
        };
      },
      margin: { ...sizeList() },
      maxWidth: { ...BACKGROUND_WIDTH, ...sizeList() },
      minHeight: { ...sizeList() },
      minWidth: { ...BACKGROUND_WIDTH, ...sizeList() },
      padding: { ...sizeList() },
      spacing: { ...sizeList() },
      width: { ...BACKGROUND_WIDTH, ...sizeList() },
      zIndex: { ...sizeList(101, 1, '') },
    },
    fontFamily: {
      pretendard: ['Pretendard', ...fontFamily.sans],
    },
  },
};
