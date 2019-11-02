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

let navHover = document.querySelectorAll('nav');

navHover.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transition = 'linear 1.5s';
        link.style.transform = 'rotateY(360deg)';
    });
    link.addEventListener('mouseout', () => {
        link.style.transition = 'linear 1.5s';
        link.style.transform = 'rotateY(-360deg)';
    });
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