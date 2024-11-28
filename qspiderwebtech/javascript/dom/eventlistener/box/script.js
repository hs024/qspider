let m = document.querySelector("main");
let s = document.querySelector("section");
let a = document.querySelector("article");

// ! default order of event propogation is from self to parent  bubbleing phase
// ! other is caputreing phase  use 1 for this
//! with 3 argument of addeventlistenr  default value is 0

m.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    console.log("main");
    m.style.backgroundColor = "red";
  },
  1
);
// ? stop by event object stop propagation

s.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();

    console.log("section");
    s.style.backgroundColor = "yellow";
  },
  1
);

a.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();

    console.log("article");
    a.style.backgroundColor = "green";
  },
  1
);
