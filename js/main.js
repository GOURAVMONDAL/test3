let design = document.querySelector('.design');
let research = document.querySelector('.research');
let development = document.querySelector('.dev');

let heroImg = document.querySelector('.hero-img')

design.addEventListener('mouseover', function() {
    heroImg.src = 'images/hero-image.jpg'
})
research.addEventListener('mouseover', function() {
    heroImg.src = 'images/hero-image2.jpg'
})
development.addEventListener('mouseover', function() {
    heroImg.src = 'images/hero-image3.jpg'
})

window.addEventListener('scroll', function() {
    let scroll = this.scrollY;
    if (scroll > 80) {
        this.document.querySelector('.navbar-content').classList.add('background')
    } else {
        this.document.querySelector('.navbar-content').classList.remove('background')
    }
})


let firstSolution = document.querySelector('.solution-block.one');
let secondSolution = document.querySelector('.solution-block.two');
let thirdSolution = document.querySelector('.solution-block.three');


firstSolution.addEventListener('mouseover', function() {
    if(!secondSolution.classList.contains('opacity')) {
        secondSolution.classList.add('opacity')
    } 
    if(!thirdSolution.classList.contains('opacity')) {
        thirdSolution.classList.add('opacity')
    } 
})
firstSolution.addEventListener('mouseout', function() {
    if(secondSolution.classList.contains('opacity')) {
        secondSolution.classList.remove('opacity')
    } 
    if(thirdSolution.classList.contains('opacity')) {
        thirdSolution.classList.remove('opacity')
    } 
})


secondSolution.addEventListener('mouseover', function() {
    if(!firstSolution.classList.contains('opacity')) {
        firstSolution.classList.add('opacity')
    } 
    if(!thirdSolution.classList.contains('opacity')) {
        thirdSolution.classList.add('opacity')
    } 
})
secondSolution.addEventListener('mouseout', function() {
    if(firstSolution.classList.contains('opacity')) {
        firstSolution.classList.remove('opacity')
    } 
    if(thirdSolution.classList.contains('opacity')) {
        thirdSolution.classList.remove('opacity')
    } 
})


thirdSolution.addEventListener('mouseover', function() {
    if(!firstSolution.classList.contains('opacity')) {
        firstSolution.classList.add('opacity')
    } 
    if(!secondSolution.classList.contains('opacity')) {
        secondSolution.classList.add('opacity')
    } 
})
thirdSolution.addEventListener('mouseout', function() {
    if(firstSolution.classList.contains('opacity')) {
        firstSolution.classList.remove('opacity')
    } 
    if(secondSolution.classList.contains('opacity')) {
        secondSolution.classList.remove('opacity')
    } 
})


// custom cursor

let cursor = document.querySelector("#cursor");
let main = document.querySelector("#main");

main.addEventListener('mousemove', function(event) {
    cursor.style.left = event.x + 'px';
    cursor.style.top = event.y + 'px';
})
