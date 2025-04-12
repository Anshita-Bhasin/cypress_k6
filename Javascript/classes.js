

//  Blueprint

class Person {
    greet() {
        console.log("Hi, Welcome to JS Session")
    }
}

const person1 = new Person()
person1.greet()


class car {
    constructor(brand, model) {
        console.log(" creating new object")
        this.brand = brand;
        this.model = model
    }
    engine_start() {
        console.log("starting the engine ")
    }
    engine_stop() {
        console.log("stopping the engine ")
    }
    setBrand(brand) {
        this.brandName = brand
    }
    getBrand() {
        return this.brandName;
    }
    showDetails() {
        console.log(`${this.brand} ${this.model}`)
    }

}

const carObj = new car("Jaguar", "XF")
carObj.showDetails()

// constructor
carObj.engine_start()
carObj.engine_stop()
carObj.setBrand("Jaguar")
console.log(carObj.brandName)
console.log(carObj.getBrand())

// Constructor is automatically invoked by new


class Person2 {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hi I am ${this.name}, ${this.age} years old`)
    }
}

const p1 = new Person2("Alex", 22)
p1.greet()

class car2 {


    showBrand() {
        console.log(this.brand) //
    }
}

const carObj1 = new car2()
carObj1.brand = "Lexus"; //manually setting to Lexus
carObj1.showBrand()

class car3 {

    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model
        this.year = year
    }
    showDetails() {
        console.log(`${this.brand} ${this.model}`)
    }
}

const carobj1 = new car3("Toyota", "Fortuner", 2020)
const carobj2 = new car3("Tata", "Safari", 2021)
const carobj3 = new car3("Jaguar", "XF", 2024)

carobj1.showDetails()
carobj2.showDetails()
carobj3.showDetails()



