window.onresize = function() {
    let body = document.getElementsByTagName("body")[0];
    let menu = document.getElementById("overlay");
    let burgermenuToggle = document.getElementById("burgermenu-toggle");
    let viewportWidth = window.innerWidth;

    if(viewportWidth >= 768 && body.classList.contains("no-scroll")){
        if(menu.classList.contains("active")){
            menu.style.display = "none";
            menu.classList.remove("active");
            burgermenuToggle.classList.toggle("change");
        }
        body.classList.remove("no-scroll");
    }
}

function toggleHamburger(x) {
    let menu = document.getElementById("overlay");
    let body = document.getElementsByTagName("body")[0];

    x.classList.toggle("change");

    if(menu.classList.contains("active")) {
        menu.style.display = "none";
        menu.classList.remove("active");
        body.classList.remove("no-scroll");
    }else{
        menu.style.display = "flex";
        menu.classList.add("active");
        body.classList.add("no-scroll");
    }
}