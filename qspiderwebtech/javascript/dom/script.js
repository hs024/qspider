// //!                                         Dom selector
// // ?    document.getElementById()
// // ?    document.getElementsByTagName()
// // ?    document.getElementsByClassName()
// // ?    document.querySelector()
// // ?    document.querySelectorAll()

// //TODO                                get by id
// let h1 = document.getElementById("head");
// console.log(h1);

// //TODO                                get by class
// let h2 = document.getElementsByClassName("container");
// console.log(h2);
// console.log(h2[3]);
// console.log(Array.isArray(h2));

// let arr=Array.from(h2)//! convrt it to array
// console.log(Array.isArray(arr));

// let h3=document.getElementById("head")
// console.log(h3.textContent);//! for content

// let container=document.getElementsByClassName("container")//! html collection return
// console.log(container[0].textContent);
// console.log(container[1].textContent);
// console.log(container[2].textContent);
// console.log(container[3].textContent);

// let h5=document.getElementsByTagName("section")
// console.log(h5);

// //TODO             get by queryselecyor
// let h6=document.querySelector("#head")//! select only one first
// let h7=document.querySelector(".container")
// let h8=document.querySelector("h1")
// console.log(h6,h7,h8);

//TODO             get by queryselectorall

// let h6 = document.querySelectorAll("#head"); //! select only one first
// let h7 = document.querySelectorAll(".container");//! return nodelist
// let h8 = document.querySelectorAll("p");
// console.log(h6, h7, h8);

// let h9=document.querySelector("p,#head,.container")//! depend on priority
// console.log(h9);

//! nodelist can use only one function foreach while htmlcollection not do any
//! both are impure array
// let h10 = document.querySelectorAll(".container");
// console.log(Array.isArray(h10));
// h10.forEach((x) => {
//   console.log(x);
// });


// todo                                     DOM EVENTS 
//! 1   onclick
function clickfun(){
    console.log("clicked");
    
}
//! 2   ondblclick     double click
// see html
function clicktwo(){
    console.log("two time")
}


// !  mouse enter
function enter(){
    console.log("enter mouse");
    
}
//! mouse leave

function leave() {
  console.log("leave mouse");
}

// ! mouse move
function move(){
    console.log("moving");
    
}

// ! onkeydown 
function down(){
    console.log("down key");
    
}

// ! onkeyup
function up() {
    console.log("up key");
    
}

// ! onchange
function change(){
    console.log("change");
    
}
// ! onsubmit
function submit() {
  console.log("submit");
  let name =document.querySelector("#name")
  let password=document.querySelector("#password")
  console.log(name,password);
  let a=setTimeout(10000)
  
}
// ! onload
function load() {
  console.log("load");
}
// ! onscroll
function scroll() {
  console.log("scroll");
}