// push, pop, shift, unshift, concat


let arr_num = [1, 2, 5, 9, 10]
arr_num.push(3) //3 -> 1,2,5,9,10,3
console.log(arr_num.pop()) // 3
console.log(arr_num) // 1,2,5,9,10



let fruits = ["apple", "cherry", "kiwi", "mango"]
fruits.unshift("grapes") //grapes, apple,cherry ...
console.log(fruits.shift()) //grapes
console.log(fruits) // apple, cherry, kiwi , mango

let stack = [] // empty array 
stack.push(10); // 10
stack.push(20); // 10, 20
stack.push(30); // 10, 20, 30
console.log(stack.pop()) //30
console.log(stack) // 10,20

let queue = [] // empty array
queue.push("A"); //  A
queue.push("B"); // 'A', 'B'
queue.push("C"); // 'A', 'B','C'
console.log(queue.shift())  // A
console.log(queue) // 'B', 'C'


let fruits_2 = ["apple", "cherry", "kiwi", "mango"]
fruits_2.splice(1, 2) //cherry, kiwi
console.log(fruits_2) // apple , mango




let fruits_3 = ["apple", "cherry", "kiwi", "mango"]
fruits_3.splice(1, 2,"orange","grapes")  // 1 - cherry,kiwi-> orange,grapes
console.log(fruits_3)

