let button= document.querySelector(".nav-icon");
let right = document.querySelector(".right");


let  a = right.classList;
button.addEventListener(`click`,
()=>
{
    right.classList.add("show")
})
document.querySelector("section").addEventListener(`click`,
()=>
{
    right.classList.remove("show")
})
