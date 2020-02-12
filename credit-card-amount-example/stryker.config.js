module.exports = function (config) {
  config.set({
    mutate: ['src/index.js'],
    reporters: ['progress', 'clear-text', 'html'],
    htmlReporter: {
      baseDir: 'reports/mutation/html'
    },
    testRunner: 'jest',
    jest: {
      config: require('./jest.config.js')
    },
    coverageAnalysis: 'off'
  })
}
