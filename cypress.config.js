const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/examples/*.js",
    screenshotsFolder: "cypress/screenshots",
    screenshotOnRunFailure: false,
    supportFile: "cypress/support/commands.js",
    defaultCommandTimeout: 10000,
    node_modules: "path/to/node_modules"
  },
});
