let design = document.querySelector('.design');
let research = document.querySelector('.research');
let development = document.querySelector('.dev');

let heroImg = document.querySelector('.hero-img')

design.addEventListener('mouseover', function() {
    heroImg.src = '../images/hero-image.jpg'
})
research.addEventListener('mouseover', function() {
    heroImg.src = '../images/hero-image2.jpg'
})
development.addEventListener('mouseover', function() {
    heroImg.src = '../images/hero-image3.jpg'
})

window.addEventListener('scroll', function() {
    let scroll = this.scrollY;
    if (scroll > 80) {
        this.document.querySelector('.navbar-content').classList.add('background')
    } else {
        this.document.querySelector('.navbar-content').classList.remove('background')
    }
})