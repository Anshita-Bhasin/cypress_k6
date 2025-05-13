import { faker } from "@faker-js/faker";

describe(' API Testing - Session3 ', () => {
    let accessToken = null;
    let orderId = null;

    it.only('TC1 - Generate Access Token', () => {
        // 2xx or 3xx
        cy.request({
            method: 'POST',
            url: 'http://simple-books-api.glitch.me/api-clients',
            failOnStatusCode: false,
            body: {
                "clientName": "Test1",
                "clientEmail": "test11ddd222@dispostable.com"
                //faker.internet.email()
                // "clientEmail": Math.random().toString(5).substring(2) + "@dispostable.com"

            }

        }).then((response) => {
            expect(response.status).to.eq(409)
            accessToken = response.body.accessToken

        })
    })
    it('TC2 - Create orders', () => {
        cy.request({
            method: 'POST',
            url: "http://simple-books-api.glitch.me/orders",
            headers: {
                "Authorization": "Bearer " + accessToken
            },
            body: {
                "bookId": 1,
                "customerName": "test101@dispostable.com"
            }

        }).then((res) => {
            expect(res.status).to.eq(201)
            orderId = res.body.orderId
        })

    })
    it('TC3 - Get Order Details', () => {

        cy.request({
            method: 'GET',
            url: "http://simple-books-api.glitch.me/orders/" + orderId,
            headers: {
                "Authorization": "Bearer " + accessToken
            },
        })
            .then((orderResponse) => {
                expect(orderResponse.status).to.eq(200)
            })
    })
})


// E2E => 

// Login - API , UI