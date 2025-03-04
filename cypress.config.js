const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    experimentalStudio: true,
    defaultCommandTimeout: 8000, // Increase timeout for commands
    slowMo: 500, // Adds a delay of 500ms between commands
  },
  
});
