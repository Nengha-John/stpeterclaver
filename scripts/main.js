window.onscroll = function(){scrollFunction()};

function scrollFunction(height){
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5){
        document.getElementById('header').style.height = "200px";
    } else{
        document.getElementById('header').style.height = "400px";
    }
}
