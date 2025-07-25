// tailwind.config.js

import { defineConfig } from "tailwindcss";
export default defineConfig({

  content: ['./src/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  './src/**/*.stories.{js,jsx,ts,tsx}',
  './.storybook/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      colors: {
        primary: {
          100: '#00675b',
          90: '#00796b',
          80: '#00897b',
          60: '#009688',
          50: '#26a69a',
          40: '#4db6ac',
          30: '#80cbc4',
          20: '#b2dfdb',
        },
        background: {
          90: '#2f2f36',
          80: '#42424c',
          70: '#61616d',
          60: '#9e9e9e',
          50: '#e0e0e0',
          40: '#eeeeee',
          30: '#f5f5f5',
          20: '#fafafa',
          10: '#ffffff',
        },
        text: {
          100: '#212121',
          90: '#424242',
          80: '#616161',
          70: '#757575',
          60: '#9e9e9e',
          placeholder: '#bdbdbd',
          disabled: '#e0e0e0',
        },
        line: {
          90: '#2f2f36',
          80: '#6c6c75',
          70: '#9c9ca6',
          60: '#c8c8d0',
          50: '#e8e8ed',
        },
        icon: {
          80: '#9e9e9e',
          60: '#bdbdbd',
          50: '#cfd8dc',
        },
        info: {
          60: '#b0bec5',
          40: '#cfd8dc',
          20: '#ffffff',
        },
        search: {
          80: '#424242',
          60: '#616161',
        },
        graph: {
          mint: '#00bfa5',
          yellow: '#ffca28',
          blue: '#2196f3',
        },
        success: {
          60: '#4caf50',
          40: '#81c784',
          20: '#c8e6c9',
        },
        warning: {
          60: '#ffb300',
          40: '#ffcc80',
          20: '#fff3e0',
        },
        danger: {
          60: '#f56c6c',
          40: '#fc9b9b',
          20: '#fdecec',
        },
      },
    },
  },
})