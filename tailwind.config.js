// eslint-disable-next-line import/no-import-module-exports
import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true, // This is needed to some cases that Tailwind need to override Antd
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)', ...fontFamily.sans],
        sora: ['var(--font-sora)', ...fontFamily.sans],
        poppins: ['var(--font-poppins)', ...fontFamily.sans],
        manrope: ['var(--font-manrope)', ...fontFamily.sans],
        spaceGrotesk: ['var(--font-space-grotesk)', ...fontFamily.sans],
        inter: ['var(--font-inter)', ...fontFamily.sans],
        mulish: ['var(--font-mulish)', ...fontFamily.sans],
        dmSans: ['var(--font-dm-sans)', ...fontFamily.sans],
      },
      colors: {
        // use for convert from Figma
        dark: '#1F2326',
        dark1: '#81879D',
        primary: '#1663F9',
        grayF1: '#F1F5F9',
        grayF2: '#F2F3F8',
        grayF5: '#F5F5F5',
        grayF4: '#F4F8FC',
        orangeFF: '#FFDB8F',
        gray17: '#171717',
        grayEE: '#EEEEEE',
        grayEa: '#EAEDF9',
        gray38: '#383F4E',
        grayD9: '#D9DFE5',
        grayEB: '#EBECF0',
        grayE2: '#E2E5E9',
        gradientBorder: 'linear-gradient(90deg, #5F45D9 -11.43%, #F961D8 47.91%, #FE9E66 92.14%)',
        starYellow: '#FFAD0F',
        starGray: '#DCDCDC',
        bgSlider: '#B7CEFF',
        bgWhiteFC: '#FCF7FB',
        blueBB: '#BBC5F5',
        blueCC: '#CCD6EA',
        neutral1: 'var(--Neutral-Neutral-1, #414357)',
        neutral2: 'var(--Neutral-Neutral-2, #707281)',
        neutral5: 'var(--Neutral-Neutral-5, #E7E7EA)',

        bgGradientBlue: '#51B4FA',
        bgGradientViolet: '854AEB',

        // use for test
        detailProduct: {
          gray: '#767676',
          red: '#FF0000',
          blue: '#0D57FF',
        },
        // Loyalty colors
        loyalty: {
          black: {
            500: '#4F5665',
            600: '#0B132A',
          },
          orange: {
            50: '#FFFBE5',
            100: '#FFF5F2', // background search input
            200: '#FFF0EB', // cart button normal
            300: '#FFD2C2', // cart button hover
            400: '#F7951B', // border outline button
            500: '#F66A24', // button primary normal
            600: '#E04B00', // button primary hover
          },
          green: {
            100: '#EBFFEF',
            300: '#00B924',
            500: '#2FAB73',
          },
          white: {
            300: '#F8F8F8',
            600: '#F1F1F1',
          },
          gray: {
            50: '#767676',
            100: '#EEEFF2',
            200: '#E3E3E3',
            300: '#f7f7f9',
            400: '#DDDDDD',
            500: '#AFB5C0',
            600: '#A7A7A7',
            label: '#767676',
          },
          blue: {
            100: '#EFF3FA',
            200: '#6C7E93',
            300: '#004EFF',
            400: '#0d57ff',
            500: '#3E5480',
            600: '#0D57FF',
            700: '#192252', // text cancel button
          },
          red: {
            100: '#FFF0EB',
            500: '#FF0000',
          },
        },
        gameCenter: {
          yellow: '#f5ff00',
          orangeDark: '#f5aa4b',
        },
      },
      backgroundImage: {
        gradientPink: 'linear-gradient(158deg, #D555C7 14.46%, #F396EA 79.18%)',
        gradientOrange: 'linear-gradient(160deg, #F49235 11.67%, #FFB46D 82.2%)',
        gradientBlue: 'linear-gradient(339deg, #6BCEFD 11.58%, #32A9DF 88.12%)',
        gradientRed: 'linear-gradient(158deg, #FF7999 17.3%, #FFBDCC 82.95%)',
        gradientButton: 'linear-gradient(90deg, #5F45D9 -11.43%, #F961D8 47.91%, #FE9E66 92.14%)',
        gradientCarousel: 'linear-gradient(90deg, #3F56EE 10.5%, #5094FA 102.82%)',
        gradientBlue2: 'linear-gradient(243deg, #9A40E4 7.82%, #5C70F4 74.31%)',
        gradientCtaCharity: 'linear-gradient(243deg, #9A40E4 7.82%, #5C70F4 74.31%)',
        gradientCream: 'linear-gradient(90deg, #F2F4FF -3.3%, #FFE5EC 53.98%, #FFF4EA 114.06%)',
        gradientDark: 'linear-gradient(90deg, #000 50%, rgba(0, 0, 0, 0.50) 100%)',

        gradientPinkEvent: 'linear-gradient(184deg, #F961D8 3.23%, #F36D98 87.92%)',
        gradientBlueEvent: 'linear-gradient(184deg, #1663F9 3.41%, #3DC7E5 81.28%)',
        gradientOrangeEvent: 'linear-gradient(184deg, #F5953A 3.41%, #FF7999 81.28%)',

        gradientBlueDentalId: 'linear-gradient(341deg, #6BCEFD 18.5%, #32A9DF 75.59%)',
        gradientOrangeDentalId: 'linear-gradient(160deg, #F49235 11.67%, #FFB46D 82.2%)',
        gradientPinkDentalId: 'linear-gradient(161deg, #FF7999 24.76%, #FFBDCC 102.54%)',

        gradientSky: 'linear-gradient(250deg, #40DAE4 18.77%, #5C70F4 82.99%)',
        gradientRose: 'linear-gradient(225deg, #FF7E7F 19.09%, #5C70F4 80.58%)',
      },
      keyframes: {
        fadeInDown: {
          '0%': {
            opacity: 0,
            transform: 'translate3d(0, -100%, 0)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateZ(0)',
          },
        },
      },
      animation: {
        fadeInDown: '300ms ease-in-out 0s normal none 1 running fadeInDown',
      },
      boxShadow: {
        'loyalty-card':
          '0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09)',
      },
      screens: {
        mobile: '640px', // => @media (min-width: 640px)
        tablet: '768px', // => @media (min-width: 768px)
        laptop: '1024px', // => @media (min-width: 1024px)
        desktop: '1280px', // => @media (min-width: 1280px)
        ultra: '1536px', // => @media (min-width: 1536px)
      },
    },
  },
}
