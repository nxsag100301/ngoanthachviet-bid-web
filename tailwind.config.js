/** @type {import('tailwindcss').Config} */
import animate from 'tailwindcss-animate'

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FDFDFD',
        white: '#FFFFFF',
        black: '#181818',

        // Text colors
        text: {
          950: '#030304',
          900: '#363743',
          800: '#3C3D4E',
          700: '#43455B',
          600: '#4E516C',
          500: '#5A5F80',
          400: '#767C9A',
          300: '#A3A7BD',
          200: '#C9CCD8',
          100: '#E2E4EB',
          50: '#F4F5F7'
        },

        // Primary colors (brand_primary)
        primary: {
          950: '#441E04',
          900: '#773B10',
          800: '#91480F',
          700: '#B25D0B',
          600: '#E68D09',
          500: '#F2AB0E',
          400: '#F9CB26',
          300: '#FADD4F',
          200: '#FCEC8B',
          100: '#FDF6C8',
          50: '#FFFCEB',
          DEFAULT: '#F2AB0E',
          foreground: '#FFFFFF'
        },

        // Error colors
        error: {
          950: '#50160C',
          900: '#7A271A',
          800: '#912018',
          700: '#B42318',
          600: '#D92D20',
          500: '#F04438',
          400: '#F97970',
          300: '#FDAAA4',
          200: '#FFCDC9',
          100: '#FEE4E2',
          50: '#FEF3F2',
          DEFAULT: '#F04438'
        },

        // Warning colors
        warning: {
          950: '#4E1D09',
          900: '#7A2E0E',
          800: '#93370D',
          700: '#B54708',
          600: '#DC6803',
          500: '#F79009',
          400: '#FDB022',
          300: '#FEC84B',
          200: '#FEDF89',
          100: '#FEF0C7',
          50: '#FFFAEB',
          DEFAULT: '#F79009'
        },

        // Success colors
        success: {
          950: '#053321',
          900: '#074D31',
          800: '#085D3A',
          700: '#067647',
          600: '#079455',
          500: '#17B26A',
          400: '#47DC89',
          300: '#75E0A7',
          200: '#ABEFC6',
          100: '#DCFAE6',
          50: '#F6FEF9',
          DEFAULT: '#17B26A'
        },

        // Blue colors
        blue: {
          950: '#141353',
          900: '#20218F',
          800: '#201DB6',
          700: '#2720E2',
          600: '#423FFF',
          500: '#4C57FF',
          400: '#6E82FF',
          300: '#97AFFF',
          200: '#BED0FF',
          100: '#DBE5FF',
          50: '#FBFCFF',
          DEFAULT: '#4C57FF'
        },

        // Gray colors
        gray: {
          950: '#343437',
          900: '#535256',
          800: '#64636A',
          700: '#78767F',
          600: '#84838D',
          500: '#95949D',
          400: '#A9AAB1',
          300: '#C6C6CA',
          200: '#DDDDE0',
          100: '#F1F1F1',
          50: '#F7F7F7',
          DEFAULT: '#95949D'
        },

        // Shadcn UI colors
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        penumbra: ['"UTM Penumbra"', 'sans-serif'],
        aquarelle: ['"UTM Aquarelle"', 'sans-serif']
      },
      backgroundImage: {
        loginBg: "url('@/assets/images/loginBg.png')"
      },
      screens: {
        '3xl': '1920px'
      }
    }
  },
  plugins: [animate]
}
