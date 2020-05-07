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