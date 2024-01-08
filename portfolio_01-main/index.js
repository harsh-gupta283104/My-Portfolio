document.addEventListener("DOMContentLoaded", function() {
    console.log("Radhe Radhe");
    var main=document.querySelector(".main");
    // console.log(main)
    var menuBar = document.querySelector('#menuimg');
    var menu = document.querySelector(".menu-bar"); // Use querySelector to get a single element
    var close=document.querySelector("#cross");
    var cursor=document.querySelector("#cursor");
    var outline=document.querySelector("#outline");
    
    menuBar.addEventListener("click", function () {
        menu.classList.add("menuload");
        document.querySelector('#menuimg').style.visibility = "hidden";
        if (window.innerWidth >= 1200) {
            menuBar.style.visibility = "hidden";
        } else {
            menuBar.style.visibility = "visible";
        }
    });
    
    close.addEventListener("click", function () {
        menu.classList.remove("menuload");
        if (window.innerWidth >= 1200) {
            menuBar.style.visibility = "visible";  // Restore visibility
            console.log("Radhe");
        } else if (window.innerWidth < 1200) {
            menuBar.style.visibility = "visible";  // Restore visibility
        }
    }, false);
    
    
    
    window.addEventListener("mousemove",function(dets){
        // console.log(dets);
        var posx=dets.x;
        var posy=dets.y;
        outline.style.left=posx+"px";
        outline.style.top=posy+"px";
    })

});

var typed= new typed('#text',{
    string:["Frontend Developer" , "Youtuber"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})