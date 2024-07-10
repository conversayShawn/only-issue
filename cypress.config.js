const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  specPattern: "cypress/integration/**/*.spec.js",
  supportFile: false,
  fixturesFolder: false,
  },
  projectId: "yrin2w",
});
