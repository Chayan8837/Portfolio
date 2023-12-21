// let button= document.querySelector(".nav-icon");
// let right = document.querySelector(".right");
// let body=document.querySelector("main");

// let  a = right.classList;
// button.addEventListener(`click`,
// ()=>
// {
//     right.classList.add("show");
//     button.classList.add("rotate");


// })
// body.addEventListener(`click`,
// ()=>
// {
//     right.classList.remove("show")
//     button.classList.remove("rotate")




// })




let submitbtn=document.querySelector(".popup-submit");
let cancelbtn=document.querySelector(".cancel");
let hibox=document.querySelector(".hibox");

submitbtn.addEventListener(`click`,()=>
 {
    
    document.querySelector(".popup").classList.add("hide");
    
    

});
cancelbtn.addEventListener(`click`,()=>
 {
    document.querySelector(".popup").setAttribute("class","hide");


});











