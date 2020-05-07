function toggleHamburger(e){let s=document.getElementById("overlay"),t=document.getElementsByTagName("body")[0];e.classList.toggle("change"),s.classList.contains("active")?(s.style.display="none",s.classList.remove("active"),t.classList.remove("no-scroll")):(s.style.display="flex",s.classList.add("active"),t.classList.add("no-scroll"))}window.onresize=function(){let e=document.getElementsByTagName("body")[0],s=document.getElementById("overlay"),t=document.getElementById("burgermenu-toggle");window.innerWidth>=768&&e.classList.contains("no-scroll")&&(s.classList.contains("active")&&(s.style.display="none",s.classList.remove("active"),t.classList.toggle("change")),e.classList.remove("no-scroll"))};
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
function showScrollButton(){let o=document.getElementById("btnTop");document.body.scrollTop>20||document.documentElement.scrollTop>20?(o.classList.add("show"),o.classList.remove("hide")):(o.classList.add("hide"),o.classList.remove("show"))}function scrollToTop(){window.scrollTo({top:0,left:0,behavior:"smooth"})}window.onscroll=function(){showScrollButton()};
window.onscroll = function() {showScrollButton()};

function showScrollButton() {
    let btnTop = document.getElementById("btnTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnTop.classList.add('show');
        btnTop.classList.remove('hide');
    } else {
        btnTop.classList.add('hide');
        btnTop.classList.remove('show');
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}