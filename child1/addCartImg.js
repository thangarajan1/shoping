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

let X =document.querySelector("#s");
let M =document.querySelector("#m");
let L =document.querySelector("#l");
let XL =document.querySelector("#xl");

console.log(X);



addBtn.addEventListener("click",(e)=>{
	
let product = document.querySelector(".info-wrap p").innerText;
let amount = document.querySelector(".info-wrap h4").firstChild.data;

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

var size;

switch(false){
	case X.checked:
	var size = X.parentElement.children[0].children[0].innerText;
	break;
	case L.checked:
	var size = L.parentElement.children[0].children[0].innerText;
	break;
	case M.checked:
	var size = M.parentElement.children[0].children[0].innerText;
	break;
	case XL.checked:
	var size = XL.parentElement.children[0].children[0].innerText;
	break;
}
console.log(size);
/*
let siz = input.forEach((e)=>{
	
let inputValue =e.parentElement.children[0].children[0];
var size;

if(e.checked){
var size = inputValue.childNodes[0].data;
}
else{
	var size = "";
}
console.log(size);
});
*/

localStorage.setItem("bgImg",JSON.stringify(
[...JSON.parse(localStorage.getItem("bgImg") || "[]"),[{img:bgImg},{pname:product},{ant:amount},{sizes:size}]]
)

);



});
