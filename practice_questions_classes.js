// function greet(name) {
//     console.log("Hello " + name);
// }

// function greet(firstName, lastName) {
//     console.log("Hello " + firstName + " " + lastName);
// }

// greet("Anshita"); 



function greet(firstName, lastName = "") {
    console.log(`Hello ${firstName} ${lastName}`);
}

greet("Anshita")
greet("Anshita", "Bhasin")

// Object as parameter

function createUser({ name, age, email }) {

    console.log(`Name: ${name}, Age: ${age}, Email : ${email}`)
}

createUser({ name: "Alex", age: 20, email: "test@dispostable.com" })