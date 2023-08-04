const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js',
    screenshotsFolder: 'cypress/screenshots',
    screenshotOnRunFailure: true,
    supportFile:false,
    defaultCommandTimeout: 10000
  },
});
