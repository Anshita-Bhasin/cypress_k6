describe(' Locators in Cypress', () => {

    // id -> #
    // class -> .
    // data-test=>  - data-test
    // attribute -> tag[attributename="attributevalue"]
    // class="form_input te3st swggws swggs" => .form_input.te3st.swggws.swggs
    // parent -> parent of that element/locator
    // next -> sibling
    // find
    // eq()
    // Multiple Classes -> ( use .) -> product-layout.col-lg-3.col-md-3.col-sm-6.col-xs-12
    // Starting Text is fixed -> ^ eg: [onclick^="cart.add"]
    // Ending text is fixed => [onclick$=".add('30');"]
    // Nth Value -> > eg : div.button-group>button[type="button"]>i.fa.fa-shopping-cart
    // contains


    it('TC1 ', () => {
        cy.visit('https://www.saucedemo.com/v1/')
        //id =>  cy.get('#user-name')
        // cy.get('.form_input').eq(0).type('standard_user')
        //cy.get('[data-test="username"]')

        cy.get('input[type="text"]').type('standard_user')
        cy.get('input[type="text"]').next().type('secret_sauce')
        //.type('standard_user')
    })

    it('TC2 ', () => {
        cy.visit('https://naveenautomationlabs.com/opencart/')
        cy.contains('Laptops & Notebooks').click()
    })
})