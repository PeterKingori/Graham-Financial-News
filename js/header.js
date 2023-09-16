// TIME SHOWING ON HEADER
document.getElementById("date").innerHTML = new Date().toLocaleDateString("en-us", {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
});

// Access the navigation bar
let navBar = document.getElementById("nav-bar");

// STICKY NAVIGATION BAR
// When the user scrolls the page add the 'sticky' class to the navbar and remove it when you leave the scroll position
window.onscroll = function () {
  stickyNavbar();
};
let header = document.getElementById("header");
let navbarPosition = navBar.getBoundingClientRect().top;
function stickyNavbar() {
  if (window.scrollY >= navbarPosition) {
    navBar.classList.add("sticky-navbar");
    header.classList.add("navbarOffsetMargin");
    header.classList.add("header-sticky-navbar");
  } else {
    navBar.classList.remove("sticky-navbar");
    header.classList.remove("navbarOffsetMargin");
    header.classList.remove("header-sticky-navbar");
  }
}

// FULL NAVBAR MENU ON MOBILE PHONES
// Show the navbar menu when the hamburger menu icon is clicked on small screens
let mainContainer = document.getElementById("main-container");
let date = document.getElementById("date");
let logo = document.getElementById("logo");
let navIcon = document.getElementById("nav-icon");
let closeIcon = document.getElementById("close-icon");

navIcon.addEventListener("click", toggleResponsiveNavigationMenu, false);
closeIcon.addEventListener("click", toggleResponsiveNavigationMenu, false);

function toggleResponsiveNavigationMenu() {
  mainContainer.classList.toggle("responsive");
  date.classList.toggle("responsive");
  logo.classList.toggle("responsive");
  navBar.classList.toggle("responsive");
}
