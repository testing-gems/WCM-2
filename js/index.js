// Navigation

const navOpen = document.querySelector('.nav__hamburguer');
const navClose = document.querySelector('.close__toggle');
const menu = document.querySelector('.nav__menu');
const navContainer = document.querySelector('.nav__menu');


navOpen.addEventListener('click', ()=> {
    menu.classList.add('open');
    document.body.classList.add('active');
    navContainer.style.left = '0';
    navContainer.style.width = '100%';
})

navClose.addEventListener('click', ()=> {
    menu.classList.remove('open');
    document.body.classList.remove('active');
    navContainer.style.left = '-100%';
    navContainer.style.width = '0';
})


// Fix NavBar 

window.addEventListener('scroll', (e) => {
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;

    if(scrollHeight > navHeight){
       navBar.classList.add('fix__nav') 
    } else {
        navBar.classList.remove('fix__nav');
    }


    if(scrollHeight > 300){
        goToTop.classList.add('show-top')
    } else {
        goToTop.classList.remove('show-top')
    }
})


// Popup

const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close');

if (popup){
    closePopup.addEventListener('click', () => {
       popup.classList.add('hide__popup')
    });

    window.addEventListener('load', () => {
        setTimeout( () => {
            popup.classList.remove('hide__popup')
        }, 500)
    });
}

// Fixed Navigation

const navBar = document.querySelector('.navigation');
const goToTop = document.querySelector('.goto-top');
const scrollLink = document.querySelectorAll('.scroll-link');

// Smooth Scroll 

Array.from(scrollLink).map( (link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        const navHeight = navBar.getBoundingClientRect().height;
        const fixNav = navBar.classList.contains('fix__nav');
        let position = element.offsetTop - navHeight;

        if(!fixNav){
            position = position - navHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });
        navContainer.style.left = '-100%';
        document.body.classList.remove('active');

    })
})


// Switch button
const switchBtn = document.getElementById('switch');

switchBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    switchBtn.classList.toggle('active');
})

