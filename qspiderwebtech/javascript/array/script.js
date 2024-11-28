// litrals array

// var arr=[]
// var arr=[10]
// var arr=[10,20]

//array constructor

// var arr2=new Array()
// var arr2=new Array(10)
// var arr2=new Array(10,20)

// console.log(arr)
// console.log(arr2)

//////////////////3##333333333333333333333333333333333333333333333333333###########################

// hetrogenous
// var arr=[10,"h",true,undefine,null,[],{},"44",9.04]

// var arr=[10,20,30,40,50]
// console.log(arr.length, typeof arr);
// arr[100]=5                            //no fix size
// console.log(arr);

//////////////////////////////////////          METHODS

var arr=[10,20,30,40,50]
// a=arr.pop()
// console.log(a);
// console.log(arr)
// arr.push(60)
// console.log(arr);

// for end or start
// console.log(arr.unshift(5))
// console.log(arr);
// arr.shift()
// console.log(arr);

//? splice slice
// let a=arr.slice(1,3)
// console.log(a,arr);
let b=arr.splice(1,2)
// let b=arr.splice(1,2,0)
// let b=arr.splice(1,2,0,()=>{console.log(500000);
// })
// let b=arr.splice(1)
// console.log(b,arr);

//////////////////////////////////////////
//? concat at  tostring join
// let arr=[10,20,30,40,50]
// console.log(arr.at(3));
// console.log(arr.includes(20));
// console.log(arr.toString());
// console.log(arr.join("--"));
// let a=[100,200,300]
// let b=[500,600,700]

// console.log(a.concat(b));

// console.log(a.concat({b,a}));

// let arr = [10, 20, 30, 40, 50];

// // for(let i=0;i<arr.length;i++){
// //     console.log(arr[i]);

// // }

// // arr.forEach((ele,i,arr)=>{console.log(ele,i);
// // })
// // // arr.forEach((ele,arr)=>{console.log(ele);
// // // })
// // arr.map((lele,i,arr)=>{console.log(ele,i);
// // })

//? map   and foreach
// let x = arr.forEach((ele, i, arr) => {         //!not return
//   console.log(ele, i);
//   return "hi";
// });
// let y = arr.map((ele, i, arr) => {
//   console.log(ele, i);                  //!it return in array    but it is boolean array
//   return "wow";
// });

// console.log(x);
// console.log(y);

//? find  and filter
// let arr=[10,20,30,10,50,50,30,20,90]
// let val=arr.find((ele,arr)=>{
//     console.log(ele);
//     return ele==30         //! if 90 print all        //for 30 go till 30

// })
// console.log(val);  //!return only on e value

// let val2 = arr.filter((ele, arr) => {
//   console.log(ele);
//   return ele == 30; //! check all and store them
// });
// console.log(val2);//!return an array

//?reduce
// var arr = [1, 2, 3, 4, 5, 6, 7];
// // arr.reduce(()=>{}, accvalue)  accumulated value
// arr.reduce((acc, ele) => {
//   console.log(acc, ele);
// });
// console.log("here 2");

// let a = arr.reduce((acc, ele) => {
//   console.log(acc, ele);
//   return ele + acc;
// });
// console.log(a);
// console.log("here 2");

// let b = arr.reduce((acc, ele) => {
//   console.log(acc, ele);
//   return ele + acc;
// },1000);
// console.log(b);
