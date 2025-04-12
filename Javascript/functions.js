
// // console.log(" Hello World!")
// // console.log(" Hello World!")
// // console.log(" Hello World!")
// // console.log(" Hello World!")
// // console.log(" Hello World!")



// // function print() {
// //     console.log("Inside Function --- Hello World !")
// // }


// // print()

// // //dropdown (l,option value )- wait

// // function printMessage(msg) {
// //     console.log(msg)
// // }

// // printMessage("Second Function")


// // function sum(x, y) { //10,20
// //     s = x + y // s= 10+20
// //     console.log(s) // 30
// // }

// // sum(10, 20)


// // function sum2(x, y) {
// //     s = x + y //
// //     console.log(s)  // 70 
// //     return s
// //     console.log(s) // 70
// // }

// // let value = sum2(20, 50)
// // console.log(value) //70

// // let m = 0;
// // function multiply(a, b) { //10,6
// //     m = a * b //10*6 = 60
// //     return m //60
// // }
// // console.log("value of m is ", m)
// // let value_multiply = multiply(10, 6)
// // console.log(value_multiply)

// // // Arrow Functions =>

// // const arrow_sum = (i, j) => {  // 5,10
// //     console.log(i + j) //5+10
// // }

// // arrow_sum(5, 10) // 15

// // let arrow_multiply = (i, j) => { //10, 4
// //     console.log(i * j) //10*4 = 40
// // }
// // arrow_multiply(10, 4) //40

// // const printHello = () => {
// //     console.log(" Hello Students!")
// // }

// // printHello()


// // // PRACTICE 

// // // Functions - Keyword , accepts string as argument
// // // return number of vowels in string
// // // vowels - a,e,i,o,u

// // function countVowels(str) {
// //     let count = 0; // 1,
// //     // Students 
// //     for (const chars of str) {

// //         if (chars === "a" ||
// //             chars === "e" ||
// //             chars === "i" ||
// //             chars === "o" ||
// //             chars === "u") {

// //             count++;
// //         }
// //     }
// //     console.log(count)

// // }

// // countVowels("avinash") //2

// // const countVowels1 = (str) => {
// //     let count = 0; // 1,
// //     // Students 
// //     for (const chars of str) {

// //         if (chars === "a" ||
// //             chars === "e" ||
// //             chars === "i" ||
// //             chars === "o" ||
// //             chars === "u") {

// //             count++;
// //         }
// //     }
// //     console.log("arrow function " + count)

// // }

// // countVowels1("javascript") //3



// // function print() {
// //     console.log(" Hello World!")
// // }

// // function myfunc(print) {
// //     console.log(" Inside the function")
// //     print()
// // }

// // myfunc(print)

// // function sayGoodBye() {
// //     console.log("GoodBye!");
// // }

// // function greet(name, callback) {

// //     console.log("Hello " + name);// Hello Anshita
// //     callback();
// // }

// // greet("Anshita", sayGoodBye)


// // function calculate(a, b, operation) { //a=10, b=6,multiply
// //     return operation(a, b)
// // }

// // function add(x, y) { // x=5, y =3
// //     return x + y // 5+3 = 8
// // }

// // function multiply(x, y) { // x=10, y = 6
// //     return x * y; //
// // }

// // function divide(x, y) {
// //     return x / y;
// // }

// // console.log(calculate(5, 3, add)) //
// // console.log("Multiplication ", calculate(10, 6, multiply)) // 



// let arr = [1, 2, 3, 4, 5, 6]


// arr.forEach(function printValue(value) {
//     console.log("Using Function Keyword", value)
// })

// arr.forEach((value) => {
//     console.log(" Using Arrow Function", value)
// })
// //       0              1        2 
// let city = ["NewYork", "London", "Mexico"] //

// city.forEach((value, idx, city) => {
//     console.log("value is ", value.toLowerCase(), "index is ", idx, " array city is ",
//         city)
// })

// // Print square of each value using for Each loop





// let calculateSquare = (num) => {
//     console.log(num * num) // 1*1, 2*2, 3*3
// }

// nums.forEach(calculateSquare)

// MAP

// let nums = [10, 6, 19, 30, 25, 3]

// let newArray = nums.map((val) => {
//     return val * 2
// })

// console.log(newArray)

// // Even Numbers
// let newArrayFilter = nums.filter((val) => { //10, 6, 19, 30, 25, 3
//     return val % 2 === 0; // 10, 6, 30
// })

// console.log(newArrayFilter)

// let filterArray = nums.filter((value) => {  // 10, 6, 19, 30, 25, 3
//     return value > 15; // 19, 30,25
// })

// console.log(filterArray)


// .reduce(accumulator,current)

// let nums = [1, 2, 3, 4] //
// const output = nums.reduce((previous, current) => { // 1,2 ,
//     return previous + current; // 2+5,
// })

// // result = 1 ,3,6,10
// // current = 2,3,4

// console.log(output)


// let arr = [10, 46, 24, 1, 3]

// const result = arr.reduce((previous, current) => {
//     return previous < current ? previous : current;
// })
// //previous= 10 , 46, 10, 1
// //current= 46 ,24, 1, 3

// //o = 46


// console.log(result)

// Filter Example

// let marks = [97, 101, 87, 88, 86, 49, 99]

// let gradeA = marks.filter((value) => { //
//     return value > 90; //97, 101,
// })

// console.log(gradeA)

// Array of numbers, using reduce - calculate sum of all numbers
// in the array , using reduce - also calculate product of all numbbers


// let numbers = [1,2,3,4,5]

// let sum = numbers.reduce((res, curr) => {
//     return res + curr;
// })

// console.log("sum is ", sum);


// let productNum = numbers.reduce((res, curr) => {
//     return res * curr;
// })

// console.log("product is ", productNum);


// // result = 1 ,2,6,24, 120
// // current = 2, 3,4,5
// // output = 

// Filter numbers greater than 50
let num = [10, 60, 40, 80, 50]

let filterArray = num.filter((value) => {
    return value > 50;
})

console.log(filterArray)

let num2 = [2, 4, 6] // 2*2, 4*4
let squares = num2.map((value) => {
    return value * value;
})

console.log(squares)

// map 
// filter -> sort, search 
// reduce -> 

// ECom Ecart

// filter - checking products which are in stock
// total cost - reduce
// map - 


https://github.com/sahilkumars123


