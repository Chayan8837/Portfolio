let button= document.querySelector(".nav-icon");
let right = document.querySelector(".right");
let body=document.querySelector("main");

let  a = right.classList;
button.addEventListener(`click`,
()=>
{
    right.classList.add("show")
})
body.addEventListener(`click`,
()=>
{
    right.classList.remove("show")
})
document.querySelector("section").addEventListener(`dblclick`,
()=>
{
    right.classList.remove("show")
})
