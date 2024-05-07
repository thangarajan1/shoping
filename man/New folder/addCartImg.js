let img = document.querySelectorAll(".img-wrap");
let addBtn = document.querySelector(".btn");
let div = document.querySelector("#div");

let radio1 = document.querySelector(".for-color-1");
let radio2 = document.querySelector(".for-color-2");
let radio3 = document.querySelector(".for-color-3");
let radio4 = document.querySelector(".for-color-4");

let img1 = document.querySelector(".chair-1");
let img2 = document.querySelector(".chair-2");
let img3 = document.querySelector(".chair-3");
let img4 = document.querySelector(".chair-4");



console.log(addBtn);

addBtn.addEventListener("click",(e)=>{

var bgImg;

switch(true){

case radio1.checked:
var bgImg =window.getComputedStyle(img1).backgroundImage;
break;
case radio2.checked:
var bgImg =window.getComputedStyle(img2).backgroundImage;
break;
case radio3.checked:
var bgImg =window.getComputedStyle(img3).backgroundImage;
break;
case radio4.checked:
var bgImg =window.getComputedStyle(img4).backgroundImage;
break;

}

console.log(bgImg);

localStorage.setItem("bgImg",JSON.stringify(
[...JSON.parse(localStorage.getItem("bgImg") || "[]"),{img:bgImg}]
)

);



});
