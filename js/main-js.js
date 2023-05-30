let lis = document.querySelectorAll(".main-ul li");
let slideShow = document.getElementById("slide-show");

lis.forEach((li) => {
   li.addEventListener("click", (e)=> {
      lis.forEach((li) => {
         li.classList.remove("active");
      })
      e.currentTarget.classList.toggle("active");
      slideShow.innerHTML = e.currentTarget.innerHTML;
   })
})

let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let totalPaices = document.getElementById("total-paices");
let totalPrice = document.getElementById("total-price");

let i = 0;
plus.onclick = plusBtn;
minus.onclick = minusBtn;

function plusBtn(){
   if (totalPaices.innerText === "10") {
         plus.classList.add("disabled");
         return false;
   } else {
      i++;
      totalPaices.innerText = i;
      totalPrice.innerText = 125 * totalPaices.innerText;
      minus.classList.remove("disabled");
   }
}

function minusBtn() {
   if(totalPaices.innerText === "0") {
      minus.classList.add("disabled");
      return false;
   } else {
      i--;
      totalPaices.innerText = i;
      totalPrice.innerText = totalPrice.innerText - 125;
      plus.classList.remove("disabled");
   }
}
// Overleay
let overleay = document.querySelector(".overleay");
let slideFlow = document.getElementById("slide-flow");
let closer = document.getElementById("closer");

slideShow.onclick = function(e) {
   overleay.classList.add("open");
}

closer.onclick = function(e) {
   overleay.classList.remove("open");
}

// Overleay controls 
let nextBtn = document.getElementById("next-btn");
let prevBtn = document.getElementById("prev-btn");

let imgsArray = Array.from(document.querySelectorAll(".slide-flow img"));
let lisArray = Array.from(document.querySelectorAll(".flow-ul li"));
let imgsLength = imgsArray.length;
let counter = 1;
 
nextBtn.onclick = nextImage;
prevBtn.onclick = prevImage;

function nextImage() {
   if (nextBtn.classList.contains("disabled")) {
      return false;
   } else {
      counter++;
      addNext();
   }
}
function prevImage() {
   if (prevBtn.classList.contains("disabled")) {
      return false;
   } else {
      counter--;
      addNext();
   }
}

function addNext() {
   removeActive();
   imgsArray[counter - 1].classList.add("next");
   lisArray[counter - 1].classList.add("active");
   if (counter == 1) {
      prevBtn.classList.add("disabled");
   } else {
      prevBtn.classList.remove("disabled");
   } if (counter == imgsLength) {
      nextBtn.classList.add("disabled");
   } else {
      nextBtn.classList.remove("disabled");
   }
}
function removeActive() {
	imgsArray.forEach(function (img) {
		img.classList.remove("next");
	});
   lisArray.forEach(function (li) {
      li.classList.remove("active");
   })
}

// nav for smalle screen
let toggleBtn = document.querySelector(".toggle-menu");
let hiddenUl = document.querySelector(".hidden-ul");

toggleBtn.onclick = function(e) {
   if (hiddenUl.hasAttribute("airra-hidden","false")) {
      hiddenUl.setAttribute("airra-hidden","true")
   } if (toggleBtn.classList.contains("open")) {
      hiddenUl.setAttribute("airra-hidden","false");
   }
   toggleBtn.classList.toggle("open");
}


