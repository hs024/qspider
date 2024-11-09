// console.log("hi")
// debugger;
// console.log(a,b);

// var a=10;
// let b=5
// console.log(a,b,c);

// const c=9
// // console.log(window)
// console.log(a,b,c);

// function test(){};
// test()
// // cocept  is called function
// // named fn
// function test(){
//     console.log("hi");
//     console.log("bye");

// }
// test()   //fn invoke

// console.log(window);

// debugger;
// function abc() {
//   var b = 10;
//   let c = 9;
//   console.log(5555555);
//   console.log(a, b, c);
// }
// var a = 10;
// console.log(a);
// abc();
// console.log(abc);

// anonymous fn  t2
// function (){}
// var a=function(){}  //fn expression  t3        first class fn
// // console.log(a)
// var x=function abc(){
//     console.log("abbbbbbbbbb");

// }
// x()
// console.log(ans);

// return type function
// debugger
// let a=function calc() {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a, b, c);
//   let s = a + b + c;
//   console.log(s);
//   return s;
// }
// // var ans = calc();
// let ans=a()
// console.log(ans);

// parameterized fn

// function sum(x, y) {
//   console.log(x + y);
//   console.log(arguments);
  

//   return x + y;
// }
// let z = sum(10, 20,50,70);
// console.log(z);


// // 
// function test(a,b,...x){
//     console.log(a,b,x)
// }
// // rest parameter and argument array 
// test(1,2,3,4,5,6,7)

// debugger
// function namep() {
//     console.log("hi p");
//     var c="hello"
//     var a=5
//     function ch() {
//         console.log("hi c");
//       var b=5
//       console.log(a+b)   //lexical scopeing and closure memo
//     }
//     return ch
// }

// namep()()  //js currying 

function father()
{
    var a=10
    function chilid(){
        var b=5
        console.log(a+b);
        
    }
    return chilid
}

var x=father()
x()
// console.log(x())

