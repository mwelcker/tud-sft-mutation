module.exports = function (config) {
  config.set({
    mutate: ['src/components/PageAccess.vue', '!src/main.js', '!src/constants.js'],
    mutator: 'vue',
    testRunner: 'jest',
    jest: {
      config: require('./jest.config.js')
    },
    reporter: ['progress', 'clear-text', 'html'],
    coverageAnalysis: 'off'
  })
}
