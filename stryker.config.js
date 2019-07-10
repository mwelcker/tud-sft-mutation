module.exports = function (config) {
  config.set({
    mutate: ['src/components/PageAccess.vue', '!src/main.js', '!src/constants.js'],
    mutator: 'vue',
    reporters: ['html'],
    htmlReporter: {
      baseDir: 'reports/mutation/html'
    },
    testRunner: 'jest',
    reporter: ['progress', 'clear-text', 'html'],
    coverageAnalysis: 'off'
  })
}
