describe(" Test Viewport ", () => {


    it(" TC1 ", () => {
        // cy.viewport(width,height) // 1000 * 660
        // cy.viewport(width, height, options) 
        cy.viewport(850, 550, { log: false })

        cy.visit('https://example.cypress.io/todo')
        // cy.viewport(preset, orientation)

        //ipad-2 => 768, 1024
        // iphone-x => 375,667
        // macbook-11 => 1366,768

        // samsung-s10 => 360,760

        //cy.viewport('iphone-x', 'landscape')
        //cy.viewport('samsung-s10') // 360, 760
        //cy.viewport('ipad-mini') //768, 1024
        // cy.reload()
        //cy.reload(true) //text/html

    })
    it(" TC2", () => {
        cy.visit('https://example.cypress.io/todo')
        // cy.viewport(1050, 550)
    })
})