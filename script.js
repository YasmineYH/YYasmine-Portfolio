var hamburger = document.querySelector('.hamburger')
var hamburgerLine = document.querySelectorAll('.hamburger-line')
var menu = document.querySelector('nav ul')
let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty('--vh', `${vh}px`)

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
})

var clickCounter = 0
function isEven(value) {
	if (value%2 == 0)
		return true;
	else
		return false;
}

hamburger.addEventListener('click', function() {
    clickCounter ++
    menu.style.opacity = '1'
    menu.style.transform = 'scale(1)'
    hamburgerLine[0].style.transform = 'rotate(35deg) translateY(4px) translateX(4px)'
    hamburgerLine[1].style.transform = 'scaleX(.5)'
    hamburgerLine[1].style.transformOrigin = 'right'
    hamburgerLine[1].style.opacity = '0'
    hamburgerLine[2].style.transform = 'rotate(-35deg) translateY(-4px) translateX(4px)'

    if (isEven(clickCounter)) {
        menu.style.transform = 'scale(.01)'
        setTimeout(() => {
            menu.style.opacity = '0'
            hamburgerLine[0].style.transform = 'rotate(0) translateY(0) translateX(0)'
            hamburgerLine[1].style.transform = 'scaleX(1)'
            hamburgerLine[1].style.opacity = '1'
            hamburgerLine[2].style.transform = 'rotate(0) translateY(0) translateX(0)'
        }, 150);
    }
})

$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});