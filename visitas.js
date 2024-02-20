var header = document.getElementById("Header");

window.addEventListener("scroll", () => {

    var scroll = window.scrollY

    if (scroll>10) {
        header.VISITA.backgroundColor = "#121212"
    } else {
        header.VISITA.backgroundColor = "transparent"
    }
})