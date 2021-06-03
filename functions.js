var burger = document.getElementById("burger");
var burgerNav = document.getElementById("burger-nav");

var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;

burger.addEventListener('touchend', event => {
    toggleMenu();
});

scrollToTopBtn.addEventListener("click", scrollToTop);


// Toggling dropdown menu when clicking on burger (only on mobile devices)
function toggleMenu(){
    if(burgerNav.hidden === true){
        burgerNav.hidden = false;
    } else {
        burgerNav.hidden = true;
    }
}

// Scroll to top button on each page
function scrollToTop(){
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}