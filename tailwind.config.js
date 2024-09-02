// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: ['h-[3.75rem]', 'h-[6.25rem]', 'w-[3.75rem]', 'w-[6.25rem]'],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary-blue': '#007BFF', // Primary Blue
        'dark-blue': '#004C99', // Dark Blue

        // Secondary Colors
        teal: '#20C997', // Teal
        orange: '#FFAA00', // Orange

        // Neutral Colors
        'dark-gray': '#343A40', // Dark Gray
        'light-gray': '#CED4DA', // Light Gray
        white: '#FFFFFF', // White
        'off-white': '#F8F9FA', // Off-White

        // Accent Colors
        'bright-red': '#FF4757', // Bright Red
        'soft-purple': '#6C5CE7', // Soft Purple

        // Background Colors
        'light-bg': '#F4F6F9', // Light Background
        'dark-bg': '#212529', // Dark Background

        // Typography Colors
        'gray-text': '#212529', // Main Text (Dark Gray)
        'medium-gray-text': '#6C757D', // Secondary Text (Medium Gray)
        'link-text': '#007BFF', // Link Text (Primary Blue)

        // Hover and Active States
        'primary-hover': '#0056b3', // Hover on Primary Buttons
        'active-button': '#004080', // Active Button Background
        'link-hover': '#0056b3', // Hover on Links

        // Shadows and Effects
        'light-shadow': 'rgba(0, 0, 0, 0.1)', // Light Shadow
        'medium-shadow': 'rgba(0, 0, 0, 0.2)', // Medium Shadow
      },
    },
  },
  variants: {},
  plugins: [],
};
