const hamburger = document.querySelector('.header__hamburger');
const navigation = document.querySelector('.header__nav ')

const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    navigation.classList.toggle('header__nav--active');
}

hamburger.addEventListener('click', handleClick);

const nav = document.querySelector('header');
const logo = document.querySelector('.header__logo-paragrap') // Identify target
const hambugerLine = document.querySelector('.hamburger__inner')
const hambugerLinebegfor = document.querySelector('.hamburger__inner::before')

window.addEventListener('scroll', function (event) { // To listen for event
    event.preventDefault();

    if (window.scrollY > 80) { // Just an example
        nav.style.backgroundColor = 'white';
        logo.style.color = 'black' // or default color
        hamburgerLine.pseudoStyle("before", "backgroundColor", "black")


    } else {
        nav.style.backgroundColor = 'transparent';
        logo.style.color = 'white';

    }
});