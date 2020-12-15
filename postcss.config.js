module.exports = {
  plugins:
    process.env.NODE_ENV === 'production'
      ? {
          'postcss-advanced-variables': {},
          tailwindcss: {},
          'postcss-preset-env': {
            autoprefixer: {
              flexbox: 'no-2009',
            },
            stage: 1,
            features: {
              'custom-properties': false,
            },
          },
        }
      : {
          'postcss-advanced-variables': {},
          tailwindcss: {},
          'postcss-preset-env': {
            stage: 1,
            features: {
              'custom-properties': false,
            },
          },
        },
}
