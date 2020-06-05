function f()
{
    document.addEventListener("scroll",function(event){
        if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ){
        var nav1 = document.getElementById("nav1");
        var nav2 = document.getElementById("nav2");
        nav1.style.transition = "2ms";
        nav1.style.visibility = "hidden";
        nav2.style.visibility = "visible";
    }else if(document.body.scrollTop < 50 || document.documentElement.scrollTop < 50){
        var nav1 = document.getElementById("nav1");
        var nav2 = document.getElementById("nav2");
        nav1.style.visibility = "visible";
        nav2.style.visibility = "hidden";
    }
    });
}
f();