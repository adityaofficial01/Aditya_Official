/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const path = require('path');

module.exports = {
  important: true, // Ensures your Tailwind styles override others
  darkMode: 'media', // Enables dark mode based on user's media preferences
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx}',
    './src/layouts/**/*.{html,js}',
    './src/screens/**/*.{html,js}',
    './src/components/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '0.25rem',
        md: '0.5rem',
        lg: '1rem',
        xl: '1.5rem',
        '2xl': '2rem', // You can keep these large sizes if needed
        '3xl': '3rem',
        '4xl': '4rem',
        '5xl': '5rem',
        '6xl': '6rem',
        '7xl': '7rem',
        '8xl': '8rem',
        '9xl': '9rem',
      },
    },
    screens: {
      sm: '640px',
      md: '769px',
      lg: '1024px',
      xl: '1280px',
      landscape: '1328px',
      '2xl': '1536px',
    },
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.4rem',
      lg: '0.5rem',
      xl: '1rem',
      '4xl': '2rem',
      '5xl': '20rem',
      full: '9999px',
    },
    opacity: {
      0: '0',
      20: '0.2',
      40: '0.4',
      60: '0.6',
      80: '0.8',
      100: '1',
    },
    fontSize: {
      'para': '1rem',             // 16px (this is the default rem to px conversion)
      'iconSize': '1.2rem',       // 19.2px (corrected from 1.20rem to 1.2rem)
      'iconSizeLarge': '1.5rem',       // 19.2px (corrected from 1.20rem to 1.2rem)
      'description': '1.2rem',    // 19.2px (corrected from 1.20rem to 1.2rem)
      'descriptionSmall': '1.125rem',             // 18px (this is the default rem to px conversion)
      'title20': '1.25rem',       // 20px
      'title24': '1.5rem',        // 24px
      'title25': '1.5625 rem',    // 25px
      'title26': '1.625rem',      // 26px
      'title28': '1.75rem',       // 28px
      'title30': '1.875rem',      // 30px
      'title36': '2.25rem',       // 36px
      'title40': '3rem',       // 36px
    },
    backgroundSize: ({ theme }) => ({
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      ...theme('spacing'), // Allows using spacing units for background sizes
    }),
    colors: {
      transparent: 'transparent',
      white: 'var(--primaryWhite)',
      black: {
        100: 'var(--primaryBlack)',
        200: 'var(--secondaryBlack)',
      },
      Green: {
        100: 'var(--primaryGreen)',
      },
      blue:{
        50:'var(--lightBlue)',
        100:'var(--primaryBlue)',
        150:'var(--secondaryBlue)',
      },
      Grey: {
        100: 'var(--primaryGrey)',
        150:'var(--bgGrey)',
        200:'var(--secondaryGrey)',
      },
      Red: {
        100: 'var(--primaryRed)',
      }
    },
    boxShadow: {
      'custom': '0px 0px 4px rgba(255, 255, 255, 0.1)',
      'lightBlue': '0 4px 20px rgba(158, 202, 247, 0.25)', 
      'none': 'none',
    },
    dropShadow: {
      'golden-high': '0 0 12px rgba(254, 230, 115, 0.7)',
      'golden-low': '0 0 20px rgba(254, 230, 115, 0.4)',

    },
    animation: {
      gradientMove: 'gradient 13s ease infinite',
      pulse: 'pulse 1s infinite',
      slideInRight: 'slideInRight 0.5s ease-in-out',
      spin: 'spin 1s linear infinite',
      slideInLeft: 'slideInLeft 0.5s ease-in-out',
      slideOutRight: 'slideOutRight 0.5s ease-in-out forwards',
      bounceSlow: 'bounce 2s infinite',
      fadeIn: 'fadeIn 1.5s ease-in-out',
      shutterUp: 'shutterUp 0.5s ease forwards',
      shutterDown: 'shutterDown 0.5s ease forwards',
      slideFromTop: 'slideFromTop 0.5s ease forwards',
      slideFromBottom: 'slideFromBottom 0.5s ease forwards',
    },
    keyframes: {
      gradient: {
        '0%': { 'background-position': '0% 50%' },
        '50%': { 'background-position': '100% 50%' },
        '100%': { 'background-position': '0% 50%' },
      },
      slideFromTop: {
        '0%': { transform: 'translateY(-100%)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
      slideFromBottom: {
        '0%': { transform: 'translateY(100%)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
      bounce: {
        '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
        '40%': { transform: 'translateY(-30px)' },
        '60%': { transform: 'translateY(-15px)' },
      },
      fadeIn: {
        '0%': { opacity: 0 },
        '50%': { opacity: 0.5 },
        '100%': { opacity: 1 },
      },
      slideInRight: {
        '0%': { transform: 'translateX(100%)', opacity: '0' },
        '100%': { transform: 'translateX(0)', opacity: '1' },
      },
      slideOutRight: {
        '0%': { transform: 'translateX(0)', opacity: '1' },
        '100%': { transform: 'translateX(100%)', opacity: '0' },
      },
      slideInLeft: {
        '0%': { transform: 'translateX(-100%)', opacity: '0' },
        '100%': { transform: 'translateX(0)', opacity: '1' },
      },
      shutterDown: {
        '0%': { transform: 'scaleY(0)' },
        '100%': { transform: 'scaleY(1)' },
      },
      shutterUp: {
        '0%': { transform: 'scaleY(1)' },
        '100%': { transform: 'scaleY(0)' },
      },
    },
    fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
    },
    extend: {
      borderRadius: {
        '4xl': '2rem', // Moved to extend to avoid duplicating in `borderRadius`
      },
      spacing: {
        '22px': '22px',
      },
      height: {
        '90vh': '90vh',
      },
      backgroundImage: {
        'gradientBg': `url(${path.resolve(__dirname, 'src/assets/Download/gradientBg.jpg')})`,
        'space': `url(${path.resolve(__dirname, 'src/assets/Images/space.jpg')})`,
        'milky': `url(${path.resolve(__dirname, 'src/assets/Download/milky-way-9767930.jpg')})`,
        'ravvoo': `url(${path.resolve(__dirname, 'src/assets/ProjectImages/ravvoo.png')})`,
        'dataCollect2': `url(${path.resolve(__dirname, 'src/assets/ProjectImages/dataCollect2.png')})`,
        'fyleMystyle': `url(${path.resolve(__dirname, 'src/assets/ProjectImages/fyleMystyle2.png')})`,
        'TapN': `url(${path.resolve(__dirname, 'src/assets/ProjectImages/TapN.png')})`,
        'ZipKitch': `url(${path.resolve(__dirname, 'src/assets/ProjectImages/Zipkitchmain.png')})`,
        'Crew': `url(${path.resolve(__dirname, 'src/assets/ProjectImages/CrewMain.png')})`,
        'gradientBg2': "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)",
      },

    },
  },
  plugins: [require("tailwindcss-animate"),],
}
// loginMedia.png