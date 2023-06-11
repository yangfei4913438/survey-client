module.exports = {
  plugins: {
    'postcss-normalize': {},
    'postcss-import': {},
    tailwindcss: {},
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      stage: 3,
      features: { 'nesting-rules': false },
      autoprefixer: {
        grid: true,
        flexbox: 'no-2009',
      },
    },
  },
};
