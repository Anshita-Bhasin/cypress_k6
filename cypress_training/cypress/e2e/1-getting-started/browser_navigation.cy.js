describe(' Browser Navigation', () => {
    it(' Test Browser Navigation', () => {
        cy.visit('https://www.saucedemo.com/v1/')
        cy.get('#user-name').type('standard_user')
        // cy.get('#password').type('secret_sauce')
        // cy.get('#login-button').click()
        // cy.go('back')
        // cy.go('forward')
        // cy.go(-1)
        // cy.go(1)

        // Chai Assertions
        // .should('have.text')
        //.should('be.selected')
        //.should('be.checked')
        ///.should('have.id',idvalue)
        //.should('be.disabled')
        //.should('have.length',x) => x=2
        // chaining - You can chain multiple assertions

        // cy.get('.inventory_item_name').first().should('have.text', 'Sauce Labs Backpack')
        // cy.contains('ADD TO CART').eq(0).should('be.visible')
        // .and('have.class', 'btn_primary btn_inventory')

        cy.get('[type="text"]').should('be.visible')
        cy.get('[type="text"]').should('have.id', 'user-name')

        cy.get('[type="text"]').should('have.class', 'btn_primary btn_inventory')



        //.should('contain',text)
        //cy.get('.btn_primary.btn_inventory').first().should('contain', 'ADD TO CART')




        //cy.get('.inventory_item_name').eq(1).parent().should('have.id', 'item_0_title_link')

    })

})