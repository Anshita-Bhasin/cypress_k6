// // // Variable Rules


// // // 1. Case Sensitive


// // // Eg: fullName & FULLNAME

// // let fullName = "Anshita"
// // let FULLNAME = "Test"

// // console.log(fullName)
// // console.log(FULLNAME)

// // // Only letters, digits, underscore and $ is allowed 
// // // space not allowed

// // let $ = "test"
// // //let full name ="test2"

// // let test_1 = "test3"
// // let name1 = "test5"
// // let name2 = "5353"
// // let age = 12

// // console.log(test_1)

// // console.log(age)

// // // only underscore, letter and $ should be 1st character

// // let $52 = 55

// // // Reserved words cannot be used as variable names

// // //let function_test = 33

// // let test4343 = 11
// // /*
// // let _4343 = 11

// // let $4343 = 11

// // let break = 262
// // 


// // var name = "name"
// // console.log(name)

// // // abc, xyz

//  let age = 16

//  console.log(typeof age)

//  let productdes="This is apple Airpods"
// console.log(typeof productdes)

// let isAllowed=true
// console.log(typeof isAllowed)

// let day3
// console.log(typeof day3)

// let testing_new=null
// console.log(typeof testing_new)

// let a= BigInt("3535")
// console.log (typeof a)

// let y= Symbol("test")
// console.log(typeof y)
//     * /
// // Objects -> key:value

// // name : "apple airpods"
// // price: 133 

// // {}

const products={
    product_name:"Apple Airpods",
    price:500,
    currency:"$"

}

// product.product_name
// product["product_name"]

// console.log("product name is" + products.product_name)
console.log("product name is " + products["product_name"])

 console.log("price value is" + products.price)
