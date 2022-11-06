const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'c639rn',
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl : "https://petstore.swagger.io",
  },
});
