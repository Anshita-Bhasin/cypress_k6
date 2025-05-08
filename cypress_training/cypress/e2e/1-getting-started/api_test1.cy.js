describe(' API Testing', () => {

    it(' Get Call', () => {
        //cy.request(method,url,body)
        cy.request('https://reqres.in/api/users?page=2').then((response) => {
            expect(response.status).to.eq(200)
        })

    })
    it(' POST Call- TC1', () => {
        cy.request({
            method: 'POST',
            url: "https://jsonplaceholder.typicode.com/posts",
            body: {
                title: "My first API Test",
                body: "Testing using cypress",
                userId: 100
            }

        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('id')
            expect(response.body.title).to.eq("My first API Test")

        })
    })
    const payload = {
        title: "My first API Test",
        body: "Testing using cypress",
        userId: 100
    }
    it(' POST Call- TC2', () => {
        cy.request({
            method: 'POST',
            url: "https://jsonplaceholder.typicode.com/posts",
            body: payload

        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('id')
            expect(response.body.title).to.eq("My first API Test")

        })
    })
    it(' POST Call - TC3', () => {
        cy.fixture('payload').then((payload1) => {
            cy.request({
                method: 'POST',
                url: "/posts",
                body: payload1

            }).then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body).to.have.property('id')
                expect(response.body.title).to.eq("My first API Test - 2")

            })
        })
    })
    it(' Validate Header', () => {
        cy.request('/posts/1')
            .then((response) => {
                expect(response.headers).to.have.property('content-type').and.include('application/json')
            })
    })

    it(' Get Call - Validate Response Code', () => {
        cy.request('/posts/1').then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    const payload2 = {
        title: "My first API Test - Post",
        body: "Testing using cypress - post",
        userId: 1200
    }
    // POST & Get in 1 test

    it('Create Post & Fetch Post', () => {
        cy.request({
            method: 'POST',
            url: "/posts",
            body: payload2

        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('id')
            const id = response.body.id;
            cy.log(" Response ID ", id)

            cy.request(`/posts/${id}`).then((getResponse) => {
                expect(getResponse.status).to.eq(200)
            })


        })
    })

    it(' API Request - PUT Call', () => {
        cy.request({
            method: 'PUT',
            url: '/posts/1',
            body: {
                id: 1,
                title: "Update Title - Cypress Testing",
                body: "Updated body - Cypress testing",
                userId: 1
            }

        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.title).to.eq('Update Title - Cypress Testing')
            expect(response.body.body).to.include('Cypress testing')
        })
    })

})
it.only('Delete Call', () => {
    cy.request({
        method: 'DELETE',
        url: '/posts/1'
    }).then((response) => {
        expect(response.status).to.eq(200)
    })
})

