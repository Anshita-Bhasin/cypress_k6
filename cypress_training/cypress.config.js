const { defineConfig } = require("cypress");
const path = require('path')
const XLSX = require('xlsx')

module.exports = defineConfig({
  watchForFileChanges: false,
  chromeWebSecurity: false,
  // viewportHeight: 660,
  // viewportWidth: 850,
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        readExcelFile(filepath) {
          const absolutePath = path.resolve(__dirname, 'cypress/fixtures', filepath);
          const workbook = XLSX.readFile(absolutePath);
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName]
          const data = XLSX.utils.sheet_to_json(worksheet)
          return data;
        },
        writeToExcel({ data, filepath }) {
          const workbook = XLSX.utils.book_new()
          const worksheet = XLSX.utils.json_to_sheet(data)
          XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1')
          XLSX.writeFile(workbook, path.resolve(__dirname, 'cypress/fixtures', filepath))
          return null;
        }
      })
    },

    experimentalStudio: true,
    baseUrl: 'https://jsonplaceholder.typicode.com'

  },
});
