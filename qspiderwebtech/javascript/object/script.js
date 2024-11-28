// //!objects

// // let users=[1,"hello","25","klm",10000000,1234567890]
// //! object literal
// let u1 = {
//   id: 1,
//   name: "hello",
//   company: "hellocom",
//   sal: 50000000,
//   mobileno: 1234567890,
// };

// console.log(u1.name); //*access prop
// u1.mobileno = 1000001; //?modify
// console.log(u1.pancard); //*undefine

// //? to give new property
// u1.car = "audi";
// console.log(u1.car);

// //? delete a key
// delete u1.sal;
// console.log(u1);

// //!object constructor
// let u2 = new Object();
// u2.id = 2;
// u2.name = "wow";
// let obj = new Object({ id: 3, name: "know" });
// console.log(u2);
// console.log(obj);

//!object methods
let obj2 = { id: 4, title: "asus", price: 700000, color: "black" };
// console.log(Object.keys(obj2));//?arr of key
// console.log(Object.values(obj2));//?arr of value
// console.log(Object.entries(obj2));//? return array of arrays of keys,values[[key,value],]
// let x=Object.entries(obj2)
// console.log(Object.fromEntries(x));//?take arr of entries and return a object

// console.log(obj2["id"]);//?array like access

// //! iterate a object        using for in
// //TODO:
// for (let i in obj2) {
//   //? only for object
//   console.log(i); //? give keys
//   // console.log(obj2.i); //? undefine as it find i as a key
//   console.log(obj2[i]); //? give value
// }
// // for (const i of obj2) {   //?  not for object
// //     console.log(i);

// // }

// let aar = [1, 2, 3, 4, 5];
// for (let i in aar) {
//   console.log(i); //? return index
// }
// for (let i of aar) {
//   console.log(i); //? return value
// }



//! use variable as akey in obj
let x = "color";
// if we use directy the x in obj it is a key 
//? write it in square braces
let product = { id: 1, title: "car", price: 2000, [x]: "black", };
console.log(product);

