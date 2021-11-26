// task-1

// let righBtn=document.querySelector("#slider .right")
// let leftBtn=document.querySelector("#slider .left")

// righBtn.onclick=function () {
 
//     let active=document.querySelector("#slider .active")
   
//     if(active.nextElementSibling!=null){
//         active.nextElementSibling.classList.add("active")
//     }
//     else{
//         document.querySelector("#slider .images").firstElementChild.classList.add("active")
//     }
//     active.classList.remove("active")
   
// }
// leftBtn.onclick=function () {
 
//     let active=document.querySelector("#slider .active")
   
//     if(active.previousElementSibling!=null){
//         active.previousElementSibling.classList.add("active")
//     }
//     else{
//         document.querySelector("#slider .images").lastElementChild.classList.add("active")
//     }
//     active.classList.remove("active")
   
// }


// task-2

// let imageItems = document.querySelectorAll(".product-slider .images a");
// let baseImage = document.querySelector(".product-slider .base-image a");

// let popup = document.querySelector(".popup");
// let popupImage = document.querySelector(".popup .content img");
// let popupCloseIcon = document.querySelector(".popup .content .close-model")

// imageItems.forEach((elem) => {
//     elem.addEventListener("click", function (e) {
//         e.preventDefault();

//         if (this.classList.contains("active")) {
//             return;
//         }

//         document.querySelector(".product-slider .images a.active").classList.remove("active");

//         this.classList.add("active");

//         let img = this.getAttribute("href");

//         baseImage.children[0].setAttribute("src", img);
//     });
// });