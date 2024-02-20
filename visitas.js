var header = document.getElementById('Header');

window.addEventListener('scroll', () => {

    var scroll = window.scrollY

    if (scroll>50) {
        header.style.backgroundColor = '#121212'
    } else {
        header.style.backgroundColor = 'transparent'
    }
})