// function colorv() {
//   // let a=document.getElementById("violet")
//   let a = document.querySelectorAll(".v");
//   console.log(a);
//   a.forEach((e) => {
//     e.style.backgroundColor = e.textContent;
//   });
// }
// function dcolorv() {
//   let a = document.querySelectorAll(".v");
//   console.log(a);
//   a.forEach((e) => {
//     e.style.backgroundColor = "white";
//   });
// }

let divs = document.querySelectorAll(".v");
divs.forEach((e) => {
  e.addEventListener("mouseenter", () => {
    e.style.backgroundColor = e.textContent;
  });
  e.addEventListener("mouseleave", () => {
    e.style.backgroundColor = "white";
  });
});
