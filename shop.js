
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
let scrollBox = document.querySelector(".scroll");
let cartStore = document.querySelector(".cartStore");
let cartStoreClose = document.querySelector(".scroll .p");
let cartBox = document.querySelector("#cart a");
let cartCount = document.querySelector("#cart sup");

///   Get Local Storage Key....

document.addEventListener("DOMContentLoaded",(e)=>{
	
	let localAdd = JSON.parse(localStorage.getItem("bgImg"));

	
	localAdd.forEach((item)=>{
		console.dir();
		let imgDiv = document.createElement("div");
		let div1 = document.createElement("div");
		let div2 = document.createElement("div");
		let p1 = document.createElement("p");
		let p2 = document.createElement("p");
		let p3 = document.createElement("p");
		let icon = document.createElement("i");
		
	//let imgSrc = e.target.parentElement.parentElement.children[0].getAttribute("src");
		imgDiv.className="cartStyle";
		imgDiv.style.backgroundImage = `${item[0].img}`;
		p1.innerText=`${item[1].pname}`;
		p2.innerText=`Size : ${item[3].sizes}`;
		p3.innerText=`${item[2].ant}`;
		icon.className="fa-solid fa-trash";
		div1.className="cartItem";
		div2.className="paragh";
		div2.append(p1,p2,p3);
		div1.append(imgDiv,div2,icon);
		cartStore.prepend(div1);
		cartCount.innerText=cartStore.childElementCount;
		let removeCart = document.querySelector(".cartItem i");
		
removeCart.addEventListener("click",(e)=>{
		let removeBox = e.target.parentElement;
		removeBox.remove();
		cartCount.innerText=cartStore.childElementCount;
		let localRemove = e.target.parentElement.children[0];
				
		localAdd.forEach((event)=>{
			let index=localAdd.indexOf(event);
			console.log()

		if(item[0].img === localRemove.style.backgroundImage){

			localAdd.splice(index,1);

		}	
			
		});
		localStorage.setItem("bgImg",JSON.stringify(localAdd));		

});

		
		
	});
	
	
});


// Add Cart Create....

// Close Cart....

scrollBox.style.display="none";

cartBox.addEventListener("click",(e)=>{
	e.preventDefault();
	if(scrollBox.style.display === "none"){
		scrollBox.style.display="block";
	}
	else{
			scrollBox.style.display="none";
	}
});

cartStoreClose.addEventListener("click",()=>{
	
	if(scrollBox.style.display === "block"){
		scrollBox.style.display="none";
	}
});






