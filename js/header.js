// TIME SHOWING ON HEADER
/*This code was copied from:
J. Olawanle, 'How to Format Dates in JavaScript with One Line of Code', 2021 [Online]
Available: "https://www.freecodecamp.org/news/how-to-format-dates-in-javascript/" [Accessed: September 2023] */
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
/*This code was adapted from:
W. Davies, 'How to Create a Sticky Navbar', 2021 [Online]
Available: "https://alvarotrigo.com/blog/sticky-navbar/" [Accessed: September 2023] */
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

/*This code was adapted from:
Coding Artist, 'Responsive Navigation Bar', 2021 [Online]
Available: "https://codingartistweb.com/2021/12/responsive-navigation-bar-html-css-js/"
[Accessed: September 2023] */
function toggleResponsiveNavigationMenu() {
  mainContainer.classList.toggle("responsive");
  date.classList.toggle("responsive");
  logo.classList.toggle("responsive");
  navBar.classList.toggle("responsive");
}
