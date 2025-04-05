// Objects - They store data ( properties ) and they perform actions (methods)


const person = {

    firstName: "Tom",
    lastName: "Patrik",
    designation: "Engineer"

}

console.log(person.firstName)

// OBjects with method
const laptop = {

    brand: "Apple",
    model: "Macbook PRO",
    start: function () {
        console.log(`Staring ${this.brand} ${this.model}`)
    }
}

laptop.start()

// Nested Objects - oBject inside object 

const user = {
    fitsName: "Javascript",
    contact: {
        email: "test.js@dispostable.com",
        phone: "5525533"
    }
}

console.log(user.contact.email)

// Object with Array property

const playlist = {
    name: 'Workout Mix',
    songs: ['Song1', 'Song2', 'Song3']
}

console.log(playlist.songs[1])
console.log(playlist.songs[0])

// Array of objects

const student = [

    { firstName: "Tom", grade: 'A' },
    { firstName: "Alex", grade: 'B' }
]

console.log(student[0].firstName)
console.log(student[1].grade)

// Adding / Updating / deleting property

const car = {

    brand: "Jaguar",
    model: "XF"
}

car.color = "Brown" // Add
console.log(car)

car.brand = "Honda" // Update

console.log("After Update", car)


delete car.model;

console.log("After Delete", car)


// Loop through object properties

const book = {

    title: "Atomic Habits",
    author: "JAmes",
    pages: 300
}

for (let key in book) {
    console.log(` ${key}`)
}


const laptop1 = {

    brand: "Dell",
    model: "PRO",
    start() {
        console.log(`Staring ${this.brand} ${this.model}`)
    }
}

laptop1.start()

const laptop2 = {

    brand: "lenovo",
    model: "Thinkpad",
    print: () => {
        console.log(`Inside laptop 2 ${this.brand}`)
    }


}

laptop2.print()
