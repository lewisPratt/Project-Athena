
/*////////////////////////////////////////
Global JS file for Project Athena
Contains functions and event listeners that are used across multiple pages of the site.
/////////////////////////////////////////*/

//grabs the navigation menu element for use in multiple functions
const navigationMenu = document.querySelector("#navigation");

/*/////////////////////////
Functions
/////////////////////////*/
//toggles the visibility of the nav menu in mobile view when the burger menu icon is clicked.
function toggleNav() {
  navigationMenu.classList.toggle("nav-open");
}

//closing the nav menu automatically when user has it open but clicks/presses outside of nav
function closeMobileNav() {
  navigationMenu.classList.remove("nav-open");
}

/*/////////////////////////
Event Listeners
/////////////////////////*/
//events that trigger nav menu closure (on smaller screens)
document.addEventListener("scroll", closeMobileNav);
document.querySelector("#main-content-container").addEventListener("click", closeMobileNav);

document.querySelector("#mobile-nav-toggle").addEventListener("click", toggleNav);