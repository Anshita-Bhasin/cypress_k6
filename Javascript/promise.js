// Callback, Promises, Async - await
// Sync, Async

// console.log(" value 1 ....")
// console.log(" value 2 .....")
// console.log(" value 3 ......")


// Async - setTimeout()

// console.log(" 1 start ....")

// setTimeout(() => {

//     console.log(" 2...Coffee is ready after 2 seconds")
// }, 2000)

// console.log(" 3 , continue doing the other work ... ")

// Callback -> 

// function makeCoffee(callback) {
//     setTimeout(() => {

//         console.log("** Coffee is ready **");
//         callback(); // call it when done
//     }, 2000)

// }

// console.log(" *** 1 start **")

// makeCoffee(function () {
//     console.log(" *** 2 Drink Coffee *** ")
// })

// console.log(" *** 3 Do other stuff *** ")

// // Nested callback hell

// step1(function(){
//     step2(function(){
//         step3 (function(){

//         })
//     })
// })

// Promises - Gives u a cleaner way to handle things that takes time

// function makeCoffee() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Coffee is ready ... ")
//         }, 2000) //2 seconds
//     })
// }

// console.log(" *** 1 Start ... ")
// makeCoffee().then((message) => {

//     console.log(" *** 2 ", message)
// });
// console.log(" ** 3 , continue working *** ")


// Async await 

// function makeCoffee() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Coffee is ready ... ")
//         }, 2000) //2 seconds
//     })
// }

// async function startDay() {

//     console.log(" *** 1 Start your day **")
//     const coffee = await makeCoffee() // wait
//     console.log(" ** 2, Coffee making in progress*", coffee)
//     console.log(" *** 3 New work starts**")
// }

// startDay();


// console.log(" *** start cooking pancakes *** ") //1

// setTimeout(() => {
//     console.log(" *** Pancake is taking time ***") // 3 sec 5
// }, 3000) 


// console.log(" *** start making toast *** ") // 2

// setTimeout(() => {
//     console.log(" *** Toast is taking time ***") // 2 se 4
// }, 2000)

// console.log(" *** Preparing coffee while waiting **") //3

// function getUserFromServer() {
//     setTimeout(() => {
//         console.log(" *** User data received from server")
//     }, 2000)
// }

// console.log(" *** Requesting user ** ")
// getUserFromServer();
// console.log(" *** while waiting, continue other task *** ")


// async code - API Call

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(" Post title ...", data.id)
//     })

// console.log(" *** Fetching POST ***")

// Async - await

// callback hell - Promises - Async, await

// async function getPost() {
//     console.log(" *** Fetching POST ***")
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     const data = await response.json()
//     console.log(" Post title ...", data.id)
// }
// getPost()


// function login(callback) {

//     setTimeout(() => {
//         console.log(" *** Logged In ***")
//         callback();
//     }, 1000);
// }

// function fetchDashboard() {
//     setTimeout(() => {
//         console.log(" *** dashboard loaded ***")
//     }, 2000)
// }

// console.log(" *** Start test flow *** ")
// login(() => {
//     fetchDashboard();
// })

// // Promises - .then()
function login() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(" *** Logged In *** ")
            resolve();
        }, 1000)
    })

}

function fetchDashboard() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(" *** Loading Dashboard  *** ")
            resolve();
        }, 2000)
    })
}

// login().then(fetchDashboard)

// Async- await

async function testflow() {

    console.log(" ** starting the test flow ...");
    await login();
    await fetchDashboard();
    console.log(" ** test flow is completed ***")

}

testflow()