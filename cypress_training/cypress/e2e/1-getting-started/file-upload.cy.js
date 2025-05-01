//selectFile() - text files, images, documents

describe(' Cypress - Select File Examples', () => {
    it('Visit website & select file', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').selectFile('cypress/fixtures/download.jpeg')
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').contains('download.jpeg')
        cy.get('h3', { timeout: 20000 }).should('have.text', 'File Uploaded!')

    })

    it('Visit website & select file- drag&drop', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').selectFile('cypress/fixtures/download.jpeg', { action: "drag-drop" })
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').contains('download.jpeg')
        cy.get('h3', { timeout: 20000 }).should('have.text', 'File Uploaded!')

    })

    it("Upload multiple files", () => {
        cy.visit('https://postimages.org/')
        cy.get('#ddinput').selectFile(['cypress/fixtures/download.jpeg', 'cypress/fixtures/test.jpeg'], { action: "drag-drop" })
    })

    it('Visit website & verify drag drop using file upload plugin', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('download.jpeg')
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').contains('download.jpeg')
        cy.get('h3', { timeout: 20000 }).should('have.text', 'File Uploaded!')

    })
})