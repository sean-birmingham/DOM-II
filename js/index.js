// mouseover & mouseout

let paragraphHover = document.querySelectorAll('p');

paragraphHover.forEach(paragraph => {
    paragraph.addEventListener('mouseover', () => {
        paragraph.style.color = 'red'
    });
    paragraph.addEventListener('mouseout', () => {
        paragraph.style.color = 'black'
    });
});

// Click 
let navItemClick = document.querySelectorAll('.nav-link');
navItemClick.forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault();
        event.target.style.color = 'red';
        alert('Go away');
    })
})

// mouseenter & mouseleave

let imageHover = document.querySelectorAll('img');
imageHover.forEach(image => {
    image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.2)';
        image.style.transition = 'all 0.3s';
    });
    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
        image.style.transition = 'all 0.3s';
    });
});

// dblclick
let footerDblClick = document.querySelector('footer');

footerDblClick.addEventListener('dblclick', () => {
    footerDblClick.style.background = '#90ee90';
});


// scroll
let bodyBg = document.querySelector('body');
let [red, green, blue] = [0, 255, 0];

window.addEventListener('scroll', () => {
    let y = 1 + (window.scrollY || window.pageYOffset) / 150
    y = y < 1 ? 1 : y
    let [r, g, b] = [red / y, green / y, blue / y].map(Math.round)
    bodyBg.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
});


// resize 
let logoFlip = document.querySelector('.logo-heading');
window.addEventListener('resize', () => {
    logoFlip.textContent = 'Nuf Sub'
});


// keydown

let headerChangeSize = document.querySelectorAll('h2');

for (let i = 0; i < headerChangeSize.length; i++) {
    document.addEventListener("keydown", () => {
        headerChangeSize[i].style.fontSize = "10rem";
    });
};

// load 

window.addEventListener('load', () => {
    alert('Hello World');
});

// .stopPropagation()

let destinationHover = document.querySelector('.destination h4');

destinationHover.addEventListener('mouseover', event => {
    destinationHover.style.background = 'lightgrey';
    event.stopPropagation();
});

let destinationPHover = document.querySelector('.destination');

destinationPHover.addEventListener('mouseover', () => {
    destinationPHover.style.background = 'blue';
});