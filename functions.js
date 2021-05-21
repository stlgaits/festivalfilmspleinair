var burger = document.getElementById("burger");
var burgerNav = document.getElementById("burger-nav");

burger.addEventListener('touchend', event => {
    toggleMenu();
});

// Toggling dropdown menu when clicking on burger (only on mobile devices)
function toggleMenu(){
    if(burgerNav.hidden === true){
        burgerNav.hidden = false;
    } else {
        burgerNav.hidden = true;
    }
}
