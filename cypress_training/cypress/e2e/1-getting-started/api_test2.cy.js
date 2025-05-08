describe(' API Testing - Cypress', () => {

    it(' Get Call - POSTS', () => {

        cy.request({
            method: 'GET',
            url: '/posts'
        })
            .its("body")
            .then((users) => {
                const userId = users[0].id

                cy.request({
                    method: 'GET',
                    url: `/comments?postId=${userId}`
                })
                    .its("body")
                    .then((commments) => {
                        expect(commments).to.have.length(5);
                        expect(commments[0]).to.deep.include(

                            {
                                "postId": 1,
                                "id": 1,
                                "name": "id labore ex et quam laborum",
                                "email": "Eliseo@gardner.biz",
                                "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
                            },
                        )


                        expect(commments[1]).to.deep.include({
                            "postId": 1,
                            "id": 2,
                            "name": "quo vero reiciendis velit similique earum",
                            "email": "Jayne_Kuhic@sydney.com",
                            "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
                        })
                    })
            })
    })



    it(' API Chaining ', () => {

        cy.request({
            method: 'GET',
            url: '/posts'

        }).then((response) => {
            const id = response.body
            return id;
        }).then((id) => {
            for (let i = 1; i < id.length - 1; i++) {

                cy.request({
                    method: 'GET',
                    url: '/posts/' + i
                })
                    .then((res) => {
                        expect(res.status).to.eq(200)
                    })
            }
        })
    })

    const qp = { postId: 1 }

    it.only(' API Testing - Query Param', () => {
        cy.request({
            method: 'GET',
            url: '/comments',
            qs: qp

        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })
})

const user_Id = 100
it.only(' POST Call- TC1', () => {
    cy.request({
        method: 'POST',
        url: "https://jsonplaceholder.typicode.com/posts",
        body: {
            title: "My first API Test",
            body: "Testing using cypress",
            userId: user_Id
        }

    }).then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body).to.have.property('id')
        expect(response.body.title).to.eq("My first API Test")

    })
})

it.only('Verify Response Body', () => {
    cy.request({
        method: 'GET',
        url: '/comments?postId=1'
    }).then((response) => {
        expect(response.status).to.eq(200)

        let response_body = response.body
        //expect(response).to.have.length(5);
        expect(response_body[0]).to.have.property("postId", 1)

        expect(response_body[0]).to.have.property("name", "id labore ex et quam laborum")

        expect(response_body[2]).to.have.property("name", "odio adipisci rerum aut animi2333")




    })
})

// https://jsonplaceholder.typicode.com/comments?postId=1

// / , qp = ?