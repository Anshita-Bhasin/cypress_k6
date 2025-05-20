describe('Read data from Excel File', () => {

    it(' Read sheet1 data for login test', () => {
        cy.readExcelFile("test.xlsx").then((data) => {

            data.forEach((row) => {

                cy.visit('https://www.saucedemo.com/v1/')
                cy.get('input[name="user-name"]').type(row.username)
                cy.get('input[name="password"]').type(row.password)
                cy.get('#login-button').click()

            })
        })
    })
    it(' Write test results to Excel File', () => {
        const testresult = [
            { testName: 'Login Test1', status: 'Passed' },
            { testName: 'Login Test2', status: 'Failedd' },
            { testName: 'Login Test3', status: 'N/A' }

        ]
        cy.writeToExcel(testresult, 'testResults.xlsx')
    })

})