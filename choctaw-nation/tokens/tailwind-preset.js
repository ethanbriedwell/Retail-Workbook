// Tailwind preset for Choctaw Nation work.
// tailwind.config.js:  module.exports = { presets: [require('./choctaw-nation/tokens/tailwind-preset')], ... }
// Classes: bg-cn-nation-primary, text-cn-oe-accent, border-cn-retail-alert, font-cn-display, ...

module.exports = {
  theme: {
    extend: {
      colors: {
        cn: {
          nation: {
            primary: '#3E0286',
            'primary-deep': '#4D2F66',
            accent: '#76BEE4',
            alert: '#C81F06',
            ornament: '#FDD802',
            'surface-alt': '#F4F2F7',
          },
          oe: {
            primary: '#2E4B40',
            'primary-deep': '#1F332B',
            accent: '#C6A45D',
            'surface-alt': '#F2F2F2',
            neutral: '#B7B7B7',
          },
          retail: {
            primary: '#572D2D',
            'primary-deep': '#541800',
            accent: '#BF2E1A',
            alert: '#B11E29',
            ornament: '#8A7171',
            'surface-alt': '#F7F3F2',
          },
          text: '#222222',
        },
      },
      fontFamily: {
        'cn-display': ['Montserrat', '"Arial Black"', 'Arial', 'sans-serif'],
        'cn-body': ['"Source Sans 3"', 'Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
};
