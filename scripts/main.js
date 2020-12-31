//scroll effect on other pages
window.onscroll = function(){scrollFunction()};

function scrollFunction(height){
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5){
        document.getElementById('header').style.height = "200px";
    } else{
        document.getElementById('header').style.height = "400px";
    }
}

//responsiveness for header
window.addEventListener("load" ,function resized(){
    let announce = document.querySelector("#news");
    let small = window.innerWidth < 800 ;
    announce.classList.toggle("news-resized", small);
})

window.addEventListener("resize",function resized(){
    let announce = document.querySelector("#news");
    let small = window.innerWidth < 800;
    announce.classList.toggle("news-resized", small)
   
})

window.addEventListener("resize", function(){
    let welkom = document.querySelector(".welcome");
    let small = window.innerWidth < 800;
    welkom.classList.toggle("welcome-resized",small)
})

window.addEventListener("load",function(){
    let welkom = document.querySelector(".welcome");
    let small = window.innerWidth < 800;
    welkom.classList.toggle("welcome-resized", small)
})

function fontchange(){
    let welkom = document.querySelector(".welcome");
    let widthh = window.innerWidth;
    if (widthh < 500) {
        welkom.style.fontSize = "5px";
        welkom.style.lineHeight ="";
        welkom.style.paddingTop ="";
        welkom.style.visibility = "hidden";
    }
    

window.addEventListener("load",fontchange());
window.addEventListener("resize",fontchange());


