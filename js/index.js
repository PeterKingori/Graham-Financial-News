window.onload = () => {
  getTechNews();
};

// STICKY NAVIGATION BAR
// Access the navigation bar
let navBar = document.getElementById("nav-bar");

// When the user scrolls the page add the sticky class to the navbar and remove it when you leave the scroll position
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

// Show the navbar menu when the hamburger menu icon is clicked on small screens
let mainContainer = document.getElementById("main-container");
let logo = document.getElementById("logo");
let navIcon = document.getElementById("nav-icon");
let closeIcon = document.getElementById("close-icon");

navIcon.addEventListener("click", toggleResponsiveNavigationMenu, false);
closeIcon.addEventListener("click", toggleResponsiveNavigationMenu, false);

function toggleResponsiveNavigationMenu() {
  mainContainer.classList.toggle("responsive");
  logo.classList.toggle("responsive");
  navBar.classList.toggle("responsive");
}

//===================================================================
//===================================================================
// SLIDESHOW OF THE FEATURED NEWS
// Create the slides
const numberOfSlides = 3;
let slides;
let slidesContent;
for (let i = 0; i < numberOfSlides; i++) {
  slides = document.createElement("div");
}

// Add slides content
const carouselContainer = document.getElementById("carousel-container");

try {
  // Create a fragment that will hold the slides
  let slidesFragment = document.createDocumentFragment();

  // Create slides from data in in posts.js
  slideshowArticles.forEach(function (article) {
    let slide = document.createElement("div");
    slide.classList.add("slides");
    slide.innerHTML = `
      <div class="slides-content">
          <img src=${article.image} alt=${article.imageAlt} class="carousel-image">
          <div class="carousel-text">
              <a href="" class="carousel-article-title slide-post-link" id=${article.id}>${article.title}
              </a>
              <p class="carousel-article-text">${article.text}</p>
              <p class="carousel-article-author">By: ${article.author}</p>
              <p class="carousel-article-date">${article.date}</p>
          </div>
      </div>`;
    slidesFragment.appendChild(slide);
  });
  // Append the fragment with the slides to the carousel container
  carouselContainer.appendChild(slidesFragment);

  // The slides change by clicking the next or previous buttons.
  let slideIndex = 1;
  showSlides(slideIndex);

  let prevButton = document.getElementById("prev-button");
  let nextButton = document.getElementById("next-button");

  prevButton.addEventListener("click", () => {
    showSlides((slideIndex += -1));
  });
  nextButton.addEventListener("click", () => {
    showSlides((slideIndex += 1));
  });
  // Function that shows the slides in the carousel and moves them when the navigation arrows are clicked
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }

  // Show an error if the slides can't be shown
} catch (error) {
  let errorMsg = document.createElement("p");
  errorMsg.innerHTML = "Error loading data";
  carouselContainer.appendChild(errorMsg);
}

// Adding a click event listener to the titles in the slides
let slideArticles = document.getElementsByClassName("slide-post-link");

for (let i = 0; i < slideArticles.length; i++) {
  const id = slideArticles[i].getAttribute("id");
  slideArticles[i].addEventListener("click", function (event) {
    openArticle(event, id);
  });
}

function openArticle(event, index) {
  event.target.href = `article.html?page=${index}`;
}

//===================================================================
//===================================================================

// TECHNOLOGY ARTICLES
// Access the technology category in the other news section
const techCategory = document.getElementById("tech-category");

try {
  // Create a fragment that will hold the articles
  let techFragment = document.createDocumentFragment();

  // Create articles from data in posts.js
  techArticles.forEach(function (article) {
    let articleOutput = document.createElement("article");
    articleOutput.classList.add("news-post-item");
    articleOutput.innerHTML = `<img src=${article.image} alt=${article.imageAlt} class="post-item-image">
    <p class="post-item-date">${article.date}</p>
    <a href="" class="post-link tech-post-link" id=${article.id}>${article.title}</a>
    <p class="post-item-text">${article.text}</p>`;
    techFragment.appendChild(articleOutput);
  });
  // Append the fragment with the articles to the technology section
  techCategory.appendChild(techFragment);
  // Show an error to a user if the articles can't be accessed
} catch (error) {
  let errorMsg = document.createElement("p");
  errorMsg.innerHTML = "Error loading data";
  techCategory.appendChild(errorMsg);
}

// Adding a click event listener to each article
let articles1 = document.getElementsByClassName("tech-post-link");

for (let i = 0; i < articles1.length; i++) {
  const id = articles1[i].getAttribute("id");
  articles1[i].addEventListener("click", function (event) {
    openTechArticle(event, id);
  });
}

function openTechArticle(event, index) {
  event.target.href = `article.html?page=${index}`;
}

// BANKING AND FINANCE ARTICLES
// Access the Banking and Finance category in the other news section
const financeCategory = document.getElementById("finance-category");

try {
  // Create a fragment that will hold the articles
  let financeFragment = document.createDocumentFragment();

  // Create articles from data in posts.js
  financeArticles.forEach(function (article) {
    let articleOutput = document.createElement("article");
    articleOutput.classList.add("news-post-item");
    articleOutput.innerHTML = `<img src=${article.image} alt=${article.imageAlt} class="post-item-image">
    <p class="post-item-date">${article.date}</p>
    <a href="" class="post-link finance-post-link" id=${article.id}>${article.title}</a>
    <p class="post-item-text">${article.text}</p>`;
    financeFragment.appendChild(articleOutput);
  });
  // Append the fragment with the articles to the banking and finance section
  financeCategory.appendChild(financeFragment);
  // Show an error to a user if the articles can't be accessed
} catch (error) {
  let errorMsg = document.createElement("p");
  errorMsg.innerHTML = "Error loading data";
  financeCategory.appendChild(errorMsg);
}

// Adding a click event listener to each article
let articles2 = document.getElementsByClassName("finance-post-link");

for (let i = 0; i < articles2.length; i++) {
  const id = articles2[i].getAttribute("id");
  articles2[i].addEventListener("click", function (event) {
    openFinanceArticle(event, id);
  });
}

function openFinanceArticle(event, index) {
  event.target.href = `article.html?page=${index}`;
}

//===================================================================
//===================================================================

// LOADING ARTICLES FROM NewsAPI

const loadMore = document.getElementById("load-more-btn");
loadMore.addEventListener("click", function () {
  getTechNews();
});

// Country to fetch news from
const country = "us";
// Category of news to fetch
let category = "technology";
// Request url
let requestUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=5";

// Object with API authorisation header and content type header
const REQUEST_HEADERS = {
  "X-Api-Key": api_key,
};

// Create posts for each news article
function createTechPosts(articles) {
  articles.forEach(function (article) {
    let articleOutput = document.createElement("article");
    articleOutput.classList.add("news-post-item");
    articleOutput.innerHTML = `<img src=${article.urlToImage || "./images/articleImages/default-news-image.jpg"} alt=${
      article.title
    } class="post-item-image">
    <p class="post-item-date">${article.publishedAt}</p>
    <a href="${article.url}" class="post-link tech-post-link" target="_blank">${article.title}</a>
    <p class="post-item-text">${article.description}</p>`;
    techCategory.appendChild(articleOutput);
  });
}

// API call
const getTechNews = async () => {
  let response = await fetch(requestUrl, { mode: "no-cors", method: "POST", headers: REQUEST_HEADERS });
  if (!response.ok) {
    console.log("Error while fetching data: ", error);
  }
  const data = await response.json();
  createTechPosts(data.articles);
};
