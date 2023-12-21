let button= document.querySelector(".nav-icon");
let right = document.querySelector(".right");


let  a = right.classList;
button.addEventListener(`click`,
()=>
{
    right.classList.add("show");
    button.classList.add("rotate");

})
document.querySelector("section").addEventListener(`click`,
()=>
{
    right.classList.remove("show");
    button.classList.remove("rotate");
})



