const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  // viewportHeight: 660,
  // viewportWidth: 850,
  e2e: {
    experimentalStudio: true,
    baseUrl: 'https://jsonplaceholder.typicode.com'

  },
});
