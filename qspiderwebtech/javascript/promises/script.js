// let data=[{id:1,ename:"john"},{id:2,ename:"qick"}]

// let err={msg:"failed to fetch"}

// //!promise
// let p1=new Promise((resolve,reject)=>{
// if (1>2) {
// resolve(data)
// }
// else{
//     reject(err)
// }
// })

// console.log(p1);

// // ! p1.then((x)={})   in fullfilled    x is the data that come when it call see reslove data
// // ! p1.catch()    in rejected
// // ! p1.finally()     in both

// p1.then((data)=>{console.log("ha ho gaya",data);
// })
// p1.catch((err)=>{console.log("catch",err.msg);
// })
// p1.finally(()=>{console.log("finally");
// })

// //? convert json into js format by .json()
// //?  and send in form of promise

// // github api  :--  https://api.github.com/users

// let a = fetch("https://api.github.com/users/");

// console.log(a);
// a.then(

// )

// ! async and await
async function fetchuser() {
  try {
    let a = await fetch("https://api.github.com/users"); //give reponse only 
    let p = await a.json(); // give array of object
    displayuser(p);
    console.log(p);
  } catch (err) {
    console.log(err);
  }
}
fetchuser();

function displayuser(alluser){
console.log(alluser);

alluser.map((user)=>{
    let {login,avatar_url}=user; //backtick``
    document.write(`<h4>${login}</h4>
        <img src='${avatar_url}'/>`);
})

}