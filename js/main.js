// -Hamburger menu JS - start !!!

// --Varible for Hamburger
const hamburger = document.querySelector('.header__hamburger');
const navigation = document.querySelector('.header__nav ');
const nav = document.querySelector('header');
// --Function for Hamburger
const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    navigation.classList.toggle('header__nav--active');
    nav.classList.toggle('header--active');
}

hamburger.addEventListener('click', handleClick);

// -Hamburger menu JS - end; !!!

// -Header changin background,menu-items,logo, color after scroll - start !!!

// --Assigning elements to varibles

const logo = document.querySelector('.header__logo-paragrap')
const navLink = [...document.querySelectorAll('.nav__anchor')]; // Assagnig nav <a> to node list and changing this node list to array whit Operator spread [...]


// Add listener to scroll
window.addEventListener('scroll', (e) => {
    e.preventDefault();
    //if statment (which after scrolling above 80px from window.scroll equals true) execute code
    if (window.scrollY > 80) {

        logo.style.color = 'black';
        navLink.forEach(function (el) {
            el.style.color = "black";
        })
    } else {
        nav.style.backgroundColor = 'transparent';
        logo.style.color = 'white';
    }
});


// -Header changin background-color after scroll - End!!!


// -Training function to change nav-items color after click; START
const afterClick = function () {
    this.style.color = 'red';
}

navLink.forEach((e) => {
    e.addEventListener('click', afterClick)
});

// -Training function to change nav-items color after click; END