// .readFile()

describe(' Read File Content - Text File & JSON ', () => {

    it(' TC1 - Read content- Text File', () => {
        cy.readFile('cypress/downloads/test.txt').should('contain', 'download file functionality in cypress')
    })


    it(' TC1 - Read content - JSON', () => {
        cy.readFile('cypress/downloads/test1.json').its('name').should('eq', 'Live Training')
    })

    it(' Writre to a File- Text', () => {
        cy.writeFile('cypress/downloads/testing.txt', 'Cypress Live Training \n')
        cy.writeFile('cypress/downloads/testing.txt', ' Week3', { flag: "a+" })
    })

    it(' Write to JSON File', () => {
        cy.writeFile('cypress/downloads/testing.json', { name: "Cypress Session", year: "2025" })
        cy.readFile('cypress/downloads/testing.json').then((user) => {
            expect(user.name).to.equal('Cypress Session')
        })

    })
    it(' Read PDF File', () => {
        cy.readFile('cypress/downloads/test.pdf').should('contain', 'testing cypress ')
    })
})
