// // // Parent - Child 
// // // Inheritance is where one class (child/subclass) can inherit properties
// // // from other class ( parent/super class)

// // // Allows code reusability
// // // extends


// // class Animal { // Parent Class / Super Class

// //     constructor(name) {
// //         this.name = name
// //     }

// //     speak() {
// //         console.log(`${this.name} makes a sound`)
// //     }

// // }

// // class Dog extends Animal { // Child Class / Sub Class
// //     constructor(name, breed) {
// //         super(name)
// //         this.breed = breed;
// //     }
// //     bark() {
// //         console.log(`${this.name} barks`)
// //     }
// //     info() {
// //         console.log(`${this.name} is a ${this.breed}`)
// //     }
// // }

// // const dog1 = new Dog('Tommy', 'Labrador')
// // dog1.speak(); //
// // dog1.bark()
// // dog1.info()


// // class Cat extends Animal {
// //     constructor(name, color) {
// //         super(name)
// //         this.color = color;
// //     }

// //     describe() {
// //         console.log(`${this.name} is a ${this.color} cat`)
// //     }
// // }

// // const myCat = new Cat('Tommy', 'Black')
// // myCat.describe()

// // // In JS, when you create a subclass using extends , the constructor
// // // must call super() before it can use this


// // Overriding


// class Animal {

//     speak() {
//         console.log('Animal makes a sound.')
//     }
// }

// class Dog extends Animal {

//     speak() {
//         super.speak() //
//         console.log(" Dog barks")
//     }
// }

// const mydog = new Dog()
// mydog.speak()

// // Vehicle - start, stop // Car - playMusic


// User class , child class - Admin that extends User
// User should have methods login(), Admin should have deleteUser()

// class User {

//     constructor(username) {
//         this.username = username
//     }
//     login() {
//         console.log(`${this.username} has logged in.`)
//     }

// }

// class Admin extends User {

//     deleteUser(user) {
//         console.log(`${this.username} deleted user ${user}. `)
//     }
// }

// const admin = new Admin('TestAdmin')
// admin.login() //
// admin.deleteUser('Tom')


// class Vehicle {
//     start() {
//         console.log("Vehicle is starting .... ")
//     }
// }

// class Car extends Vehicle {
//     start() {
//         console.log("Car Engine is starting .... ")
//     }
// }

// class ElectricCar extends Car {
//     start() {
//         console.log('Electric Car is starting...')
//     }
// }

// const v = new Vehicle();
// const c = new Car();
// const e = new ElectricCar();

// v.start();
// c.start()
// e.start()

// When child class has a method with same name as Parent class
// child method will override parent method



// class Animal {
//     move() {
//         console.log(" The animal is moving ..")
//     }
// }

// class Bird extends Animal {

//     move() {
//         super.move(); //calls parent method
//         console.log(" The bird flies in the sky")
//     }
// }

// const bird = new Bird();
// bird.move();


class Employee {

    work() {
        console.log(" Employee is working ....")
    }
}

class Manager extends Employee {
    work() {
        super.work(); //
        console.log("Manager is managing the team")
    }
}

const m = new Manager()
m.work()

