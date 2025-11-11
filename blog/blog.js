// blog.js

const articles = [
  {
    id: 1,
    title: 'Septimus Heap Book One: Magyk',
    date: 'July 5, 2022',
    author: 'Angie Sage',
    description:
      'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
    imgAlt: 'Book cover for Septimus Heap 1',
    ages: '10-14',
    genre: 'Fantasy',
    stars: '****'
  },
  {
    id: 2,
    title: 'Magnus Chase Book One: Sword of Summer',
    date: 'December 12, 2021',
    author: 'Rick Riordan',
    description:
      'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
    imgSrc:
      'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
    imgAlt: 'Book cover for Magnus Chase 1',
    ages: '12-16',
    genre: 'Fantasy',
    stars: '⭐⭐⭐⭐'
  }
];

// Function to render all articles dynamically
function renderArticles() {
  const articleSection = document.querySelector(".articles");
  
  // Clear any placeholder content
  articleSection.innerHTML = "";

  // Loop through each article and create HTML
  articles.forEach(article => {
    const articleEl = document.createElement("article");

    // Left side details
    const details = document.createElement("div");
    details.classList.add("details");
    details.innerHTML = `
      <p class="date">${article.date}</p>
      <p class="author">By ${article.author}</p>
      <p class="ages">Ages: ${article.ages}</p>
      <p class="genre">Genre: ${article.genre}</p>
      <p class="stars">Rating: ${article.stars}</p>
    `;

    // Right side content
    const content = document.createElement("div");
    content.classList.add("content");
    content.innerHTML = `
      <h2>${article.title}</h2>
      <img src="${article.imgSrc}" alt="${article.imgAlt}">
      <p>${article.description}</p>
    `;

    articleEl.appendChild(details);
    articleEl.appendChild(content);
    articleSection.appendChild(articleEl);
  });
}

// Run the function after the page loads
document.addEventListener("DOMContentLoaded", renderArticles);
