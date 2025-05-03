describe(' API Testing', () => {

    it(' Get Call', () => {

        //cy.request(method,url,body)
        cy.request('https://reqres.in/api/users?page=2').then((response) => {
            expect(response.status).to.eq(200)
        })

    })
})

// Flow -> Creating, Get , Updating , Get, delete, get