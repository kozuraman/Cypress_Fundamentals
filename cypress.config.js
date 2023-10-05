const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");
async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  env: {
    url: "https://rahulshettyacademy.com",
  },
  //Determine how many times to retry
  retries: {
    runMode: 1,
  },
  // Integrate Cypress cloud
  projectId: "cs6ba7",
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/integration/examples/*.js",
    //specPattern: "cypress/integration/examples/BDD/*.feature",

    screenshotsFolder: "cypress/screenshots",
    screenshotOnRunFailure: false,
    supportFile: "cypress/support/commands.js",
    defaultCommandTimeout: 10000,
    node_modules: "path/to/node_modules",
  },
});

//json file ->html format
