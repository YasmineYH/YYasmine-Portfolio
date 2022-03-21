let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty('--vh', `${vh}px`)

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
})






var hamburger = document.querySelector('.hamburger')
var hamburgerLine = document.querySelectorAll('.hamburger-line')
var menu = document.querySelector('nav ul')

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





var projectTitle = document.querySelector('.project-header h1')
var visitBtn = document.querySelector('.project-header .btn')
var projectImageSmall = document.querySelector('.work-hero .small-hero')
var projectImageLarge = document.querySelector('.work-hero .regular-hero')

if ((document.location.href).includes('mywork.html')) {
    var currentPage = ((document.location.href.split('?')[1].split('&'))[0].split('='))[1]
}

function healthicProject() {
    var currentPage = 'healthic'
    window.location.href = 'mywork.html?project=' + encodeURIComponent(currentPage)
}

function vleProject() {
    var currentPage = 'vle'
    window.location.href = 'mywork.html?project=' + encodeURIComponent(currentPage)
}

function goodpieProject() {
    var currentPage = 'goodpie'
    window.location.href = 'mywork.html?project=' + encodeURIComponent(currentPage)
}

function yassosworldProject() {
    var currentPage = 'yassosworld'
    window.location.href = 'mywork.html?project=' + encodeURIComponent(currentPage)
}

function bicmProject() {
    var currentPage = 'bicm'
    window.location.href = 'mywork.html?project=' + encodeURIComponent(currentPage)
}

window.addEventListener('load', function() {
    if (currentPage == 'healthic') {
        projectTitle.innerText = 'Healthic Clinic Application Launch'
        projectImageLarge.src = 'images/healthic-hero.png'
        projectImageSmall.src = 'images/healthic-hero-2.png'

        visitBtn.addEventListener('click', function() {
            window.open("https://www.figma.com/proto/5Ybi1zzgqfJs2M6y8AkwIi/HEALTHIC?page-id=487%3A90&node-id=487%3A91&viewport=380%2C48%2C0.22&scaling=min-zoom&starting-point-node-id=487%3A91", "_blank")
        })
    } else if (currentPage == 'vle') {
        projectTitle.innerText = 'University VLE Web Application'
        projectImageLarge.src = 'images/vle-hero.png'
        projectImageSmall.src = 'images/vle-hero-2.png'

        visitBtn.addEventListener('click', function() {
            window.open("https://univleproject.herokuapp.com", "_blank")
        })
    } else if (currentPage == 'goodpie') {
        projectTitle.innerText = 'GoodPie Food Delivery Landing Page'
        projectImageLarge.src = 'images/goodpie-hero.png'
        projectImageSmall.src = 'images/goodpie-hero-2.png'

        visitBtn.addEventListener('click', function() {
            window.open("https://www.figma.com/proto/gyV0X7DFy6lX2Tn1hOA984/GoodPie?page-id=0%3A1&node-id=1%3A2&viewport=380%2C48%2C0.08&scaling=min-zoom&starting-point-node-id=1%3A2", "_blank")
        })
    } else if (currentPage == 'yassosworld') {
        projectTitle.innerText = 'Yasso’s World Blog Website'
        projectImageLarge.src = 'images/yassos-hero.png'
        projectImageSmall.src = 'images/yassos-hero-2.png'
        
        visitBtn.addEventListener('click', function() {
            window.open("https://www.figma.com/proto/eqkVG1JimBr8MVmdfs5MYG/Yasso's-World?page-id=0%3A1&node-id=14%3A29&starting-point-node-id=14%3A29&scaling=scale-down-width", "_blank")
        })
    } else if (currentPage == 'bicm') {
        projectTitle.innerText = 'BICM Consultants Website'
        projectImageLarge.src = 'images/bicm-hero.png'
        projectImageSmall.src = 'images/bicm-hero-2.png'
        
        visitBtn.addEventListener('click', function() {
            window.open("https://yasmineyh.github.io/BICM", "_blank")
        })
    }
})