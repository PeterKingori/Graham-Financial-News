// Run the functions to fetch the news from the api as soon as the window loads
window.onload = () => {
  getTechNews();
  getBusinessNews();
};

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

/*This code was adapted from:
C. Ferdinandi, 'Two more ways to create HTML from an array of data with vanilla JS', 2019 [Online]
Available: "https://gomakethings.com/two-more-ways-to-create-html-from-an-array-of-data-with-vanilla-js/" [Accessed: September 2023] */
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

  /*This code for showing and clicking through the slides on the home page was adapted from: w3schools, 'How TO - Slideshow', [Online]
Available: "https://www.w3schools.com/howto/howto_js_slideshow.asp" [Accessed: September 2023] */
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

/*This code was adapted from:
C. Ferdinandi, 'Two more ways to create HTML from an array of data with vanilla JS', 2019 [Online]
Available: "https://gomakethings.com/two-more-ways-to-create-html-from-an-array-of-data-with-vanilla-js/" [Accessed: September 2023] */
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

/*This code was adapted from:
Stack Overflow, 'How to add event listeners to an array of objects', [Online]
Available: "https://stackoverflow.com/questions/17981437/how-to-add-event-listeners-to-an-array-of-objects" [Accessed: September 2023] */
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

/*This code was adapted from:
C. Ferdinandi, 'Two more ways to create HTML from an array of data with vanilla JS', 2019 [Online]
Available: "https://gomakethings.com/two-more-ways-to-create-html-from-an-array-of-data-with-vanilla-js/" [Accessed: September 2023] */
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
const articles2 = document.getElementsByClassName("finance-post-link");

/*This code was adapted from:
Stack Overflow, 'How to add event listeners to an array of objects', [Online]
Available: "https://stackoverflow.com/questions/17981437/how-to-add-event-listeners-to-an-array-of-objects" [Accessed: September 2023] */
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
// LOADING ARTICLES FROM a news api

/*This code was adapted from:
Coding Artist, 'News App Javascript', 2023 [Online]
Available: "https://codingartistweb.com/2023/03/news-app-javascript/" [Accessed: September 2023] */

const loadMore = document.getElementById("load-more-btn");
loadMore.addEventListener("click", function () {
  getTechNews();
  getBusinessNews();
});

// Country to fetch news from
const country = "gb";
// Category of news to fetch
let category;
// Request url
let requestUrl;

// Create posts for each news article
function createPosts(articles, htmlSection) {
  articles.forEach(function (article) {
    let articleOutput = document.createElement("article");
    articleOutput.classList.add("news-post-item");
    articleOutput.innerHTML = `<img src=${article.image || "./images/articleImages/default-news-image.jpg"} alt=${
      article.title
    } class="post-item-image">
    <p class="post-item-date">${new Date(article.publishedAt).toDateString()}</p>
    <a href="${article.url}" class="post-link tech-post-link" target="_blank">${article.title}</a>
    <p class="post-item-text">${article.description}</p>`;
    htmlSection.appendChild(articleOutput);
  });
}

// API call
const getTechNews = async () => {
  category = "technology";
  requestUrl = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=${country}&max=5&apikey=${key}`;
  let response = await fetch(requestUrl);
  if (!response.ok) {
    console.log("Error while fetching data.");
    let errorMsg = document.createElement("h3");
    errorMsg.style.color = "red";
    errorMsg.innerHTML = "Error while fetching more data";
    techCategory.appendChild(errorMsg);
    return;
  }
  let data = await response.json();
  createPosts(data.articles, techCategory);
};

const getBusinessNews = async () => {
  category = "business";
  requestUrl = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=${country}&max=5&apikey=${key}`;
  let response = await fetch(requestUrl);
  if (!response.ok) {
    console.log("Error while fetching data.");
    let errorMsg = document.createElement("h3");
    errorMsg.style.color = "red";
    errorMsg.innerHTML = "Error while fetching more data";
    financeCategory.appendChild(errorMsg);
    return;
  }
  let data = await response.json();
  createPosts(data.articles, financeCategory);
};
