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
    stars: '⭐⭐⭐⭐'
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
  },
  {
    id: 3,
    title: 'Belgariad Book One: Pawn of Prophecy',
    date: 'Feb 12, 2022',
    author: 'David Eddings',
    description:
      "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf -- set out on a complex mission.",
    imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg',
    imgAlt: 'Book cover for Pawn of Prophecy',
    ages: '12-16',
    genre: 'Fantasy',
    stars: '⭐⭐⭐⭐⭐'
  }
];

function renderArticles() {
  const articleSection = document.querySelector(".articles");
  
  articleSection.innerHTML = "";

  articles.forEach(article => {
    const articleEl = document.createElement("article");
    articleEl.classList.add("article");

    const details = document.createElement("div");
    details.classList.add("details");
    details.innerHTML = `
      <p class="date">${article.date}</p>
      <p class="author">By ${article.author}</p>
    `;

    const content = document.createElement("div");
    content.classList.add("content");
    content.innerHTML = `
      <h2>${article.title}</h2>
      <img src="${article.imgSrc}" alt="${article.imgAlt}">
      <p>${article.description}</p>
      <p class="ages">Ages: ${article.ages}</p>
      <p class="genre">Genre: ${article.genre}</p>
      <p class="stars">Rating: ${article.stars}</p>
    `;

    articleEl.appendChild(details);
    articleEl.appendChild(content);
    articleSection.appendChild(articleEl);
  });
}

document.addEventListener("DOMContentLoaded", renderArticles);
