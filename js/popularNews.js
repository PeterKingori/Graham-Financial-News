/* Array with list of most popular article titles. These topic titles
were taken from the World Finance magazine website available
at https://www.worldfinance.com/. They will not be the same as
what you see on the day you read this
*/
const popularArticlesList = [
  "Financial inclusion in a digital world",
  "The gateway to an open financial market",
  "Investment banking for positive impact and sustainability",
  "The past, present and future of trading",
  "A revolution in retirement planning for the Philippines",
  "Financial inclusion in a digital world",
  "The gateway to an open financial market",
  "Investment banking for positive impact and sustainability",
  "The past, present and future of trading",
  "A revolution in retirement planning for the Philippines",
];

// POPULAR NEWS SECTION
// Access the popular news category in the other news section
let popularNewsCategory = document.getElementById("popular-news");

try {
  // Create an ordered list
  let list = document.createElement("ol");
  // Create a fragment that will hold the articles
  let popularNewsFragment = document.createDocumentFragment();

  // Create list from data in posts.js
  popularArticlesList.forEach(function (item) {
    let listItem = document.createElement("li");
    let anchorTag = document.createElement("a");
    anchorTag.textContent = item;
    listItem.append(anchorTag);
    popularNewsFragment.appendChild(listItem);
  });
  list.appendChild(popularNewsFragment);
  popularNewsCategory.appendChild(list);
  // Show an error to a user if the articles can't be accessed
} catch (error) {
  let errorMsg = document.createElement("p");
  errorMsg.innerHTML = "Error loading data";
  popularNewsCategory.appendChild(errorMsg);
}
