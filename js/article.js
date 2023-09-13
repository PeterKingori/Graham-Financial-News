// FIND ARTICLE
// Get the parameter in the URL that has the id of the article that has been clicked on
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = Number(urlParams.get("page"));

// Find the article that corresponds to the id in the URL from the fullArticles.js file
const article = fullArticles.find((article) => article.id == id);
// Destructure the properties of an article
const { image, imageAlt, date, author, source, title, description, fulltext } = article;
// Set the title in the browser tab to the article title
document.getElementById("page-title").innerHTML = title;

// Set the article title and description
document.getElementById("article-title").innerHTML = `<h2>${title}</h2>
    <p class="article-subheading">${description}</p>`;

// Set the article author and published date
document.getElementById("article-author").innerHTML = `Author: ${author}`;
document.getElementById("article-date").innerHTML = date;
let articleLink = document.getElementById("original-source");
articleLink.setAttribute("href", source);

// ARTICLE CONTENT
// Create a HTML article element and add other elements and content
let singleArticle = document.createElement("article");
singleArticle.classList.add("article");
singleArticle.innerHTML = `<img src=${image} alt=${imageAlt} width="440">`;

const contentFragment = document.createDocumentFragment();
// Split the full text in the article into smaller paragraphs
// and put each in its own HTML paragraph element.
const textArray = fulltext.split(/\r?\n/);
textArray.forEach(function (text) {
  const para = document.createElement("p");
  para.classList.add("content-paragraph");
  para.innerHTML = text;
  contentFragment.appendChild(para);
});
singleArticle.appendChild(contentFragment);

// Create a fragment that will hold the article
let fragment = document.createDocumentFragment();
fragment.appendChild(singleArticle);

document.getElementById("article").appendChild(fragment);

// RELATED NEWS SIDE
// Access the related news div
let relatedNews = document.getElementById("related-news");

try {
  // Create an ordered list
  let list = document.createElement("ol");
  // Create a fragment that will hold the list
  let relatedNewsFragment = document.createDocumentFragment();

  // Create list from data
  popularArticlesList.forEach(function (item) {
    let listItem = document.createElement("li");
    let anchorTag = document.createElement("a");
    anchorTag.textContent = item;
    listItem.append(anchorTag);
    relatedNewsFragment.appendChild(listItem);
  });
  list.appendChild(relatedNewsFragment);
  relatedNews.appendChild(list);
  // Show an error to a user if the articles can't be accessed
} catch (error) {
  let errorMsg = document.createElement("p");
  errorMsg.innerHTML = "Error loading data";
  relatedNews.appendChild(errorMsg);
}
