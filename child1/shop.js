
/*
let pic = document.querySelector(".pic");
let cartClick = document.querySelectorAll("#cartFunction");
let count = document.getElementById("cart").children[0].children[1];
let count1=count.innerText;





cartClick.forEach((e)=>{
e.addEventListener("click",()=>{

if(e.innerText === "Add To Cart" ){

e.innerText="Remove To Cart";
count1++;
count.innerText=count1;
alert("Add Your Cart"+count1)
}
else{
e.innerText="Add To Cart";
count1--;
count.innerText=count1;
alert("Remove Your Cart"+count1)
}

})
})
*/




let imgDiv = document.querySelector(".img1");
let addCart = document.querySelectorAll(".addCart");
let cartStore = document.querySelector(".cartStore");
let cartStoreClose = document.querySelector(".cartStore .p");
let cartBox = document.querySelector("#cart a");
let cartCount = document.querySelector("#cart sup");
let img = document.querySelectorAll(".img-wrap");
let addBtn = document.querySelector(".btn");

let radio1 = document.querySelector(".for-color-1");
let radio2 = document.querySelector(".for-color-2");
let radio3 = document.querySelector(".for-color-3");
let radio4 = document.querySelector(".for-color-4");

let img1 = document.querySelector(".chair-1");
let img2 = document.querySelector(".chair-2");
let img3 = document.querySelector(".chair-3");
let img4 = document.querySelector(".chair-4");



document.addEventListener("DOMContentLoaded",(e)=>{
	
	let localAdd = JSON.parse(localStorage.getItem("imgSrc"));

	
	localAdd.forEach((item)=>{
		console.log(item.img);
		
		let imgDiv = document.createElement("div");
		let div1 = document.createElement("div");
		let div2 = document.createElement("div");
		let p1 = document.createElement("p");
		let p2 = document.createElement("p");
		let p3 = document.createElement("p");
		let icon = document.createElement("i");
		//let imgSrc = e.target.parentElement.parentElement.children[0].getAttribute("src");
		imgDiv.setAttribute("width","100px");
		imgDiv.setAttribute("height","100px");
		p1.innerText="Product Name";
		p2.innerText="Discount";
		p3.innerText="Amountttt";
		icon.className="fa-solid fa-trash";
		div1.className="cartItem";
		div2.className="paragh";
		div2.append(p1,p2,p3);
		div1.append(imgDiv,div2,icon);
		cartStore.prepend(div1);
		cartCount.innerText=cartStore.childElementCount-1;
		let removeCart = document.querySelector(".cartItem i");
		
removeCart.addEventListener("click",(e)=>{
		let removeBox = e.target.parentElement;
		removeBox.remove();
		cartCount.innerText=cartStore.childElementCount-1;
		
});
		
	});
	
	
});


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

localStorage.setItem("bgImg",JSON.stringify(
[...JSON.parse(localStorage.getItem("bgImg") || "[]"),{img:bgImg}]
)

);



});


// Add Cart....

addCart.forEach((e)=>{
	e.addEventListener("click",(e)=>{
		let img = document.createElement("img");
		let div1 = document.createElement("div");
		let div2 = document.createElement("div");
		let p1 = document.createElement("p");
		let p2 = document.createElement("p");
		let p3 = document.createElement("p");
		let icon = document.createElement("i");
		let imgSrc = e.target.parentElement.parentElement.children[0].getAttribute("src");
		img.setAttribute("src",imgSrc);
		img.setAttribute("width","100px");
		p1.innerText="Product Name";
		p2.innerText="Discount";
		p3.innerText="Amountttt";
		icon.className="fa-solid fa-trash";
		div1.className="cartItem";
		div2.className="paragh";
		div2.append(p1,p2,p3);
		div1.append(img,div2,icon);
		cartStore.prepend(div1);
		cartCount.innerText=cartStore.childElementCount-1;

// Remov Cart Item.....

		let removeCart = document.querySelector(".cartItem i");
		
removeCart.addEventListener("click",(e)=>{
		let removeBox = e.target.parentElement;
		removeBox.remove();
		cartCount.innerText=cartStore.childElementCount-1;
		
});


// Local Storage Set....

/*
localStorage.setItem("imgSrc",JSON.stringify(
[...JSON.parse(localStorage.getItem("imgSrc") || "[]"),{img:imgSrc}]
)

);

*/
	});
	
});

// Close Cart....

cartStore.style.display="none";

cartBox.addEventListener("click",(e)=>{
	e.preventDefault();
	if(cartStore.style.display === "none"){
		cartStore.style.display="block";
	}
	
});

cartStoreClose.addEventListener("click",()=>{
	
	if(cartStore.style.display === "block"){
		cartStore.style.display="none";
	}
});






