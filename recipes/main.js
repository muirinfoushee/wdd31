import recipes from './recipes.mjs';

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function getRandomListEntry(list) {
  return list[getRandomNumber(list.length)];
}

function tagsTemplate(tags) {
  let html = '<ul class="recipe__tags">';
  tags.forEach(tag => {
    html += `<li>${tag}</li>`;
  });
  html += '</ul>';
  return html;
}

function ratingTemplate(rating) {
  let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
  for (let i = 1; i <= 5; i++) {
    html += i <= rating ? `<span aria-hidden="true" class="icon-star">⭐</span>` : `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
  }
  html += `</span>`;
  return html;
}

function recipeTemplate(recipe) {
  return `
    <figure class="recipe-card">
      <img src="${recipe.image}" alt="${recipe.name}">
      <div class="recipe-details">
        ${tagsTemplate(recipe.tags)}
        <h2>${recipe.name}</h2>
        <p><strong>Author:</strong> ${recipe.author}</p>
        <p><strong>Prep Time:</strong> ${recipe.prepTime}</p>
        <p>${recipe.description}</p>
        ${ratingTemplate(recipe.rating)}
      </div>
    </figure>
  `;
}

const recipesContainer = document.getElementById('recipesContainer');

function renderRecipes(recipeList) {
  recipesContainer.innerHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
}

function filterRecipes(query) {
  query = query.toLowerCase();
  return recipes
    .filter(recipe =>
      recipe.name.toLowerCase().includes(query) ||
      recipe.description.toLowerCase().includes(query) ||
      recipe.tags.find(tag => tag.toLowerCase().includes(query)) ||
      recipe.recipeIngredient.find(ingredient => ingredient.toLowerCase().includes(query))
    )
    .sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(event) {
  event.preventDefault();
  const query = document.getElementById('searchBar').value;
  const filtered = filterRecipes(query);
  renderRecipes(filtered);
}

function init() {
  const randomRecipe = getRandomListEntry(recipes);
  renderRecipes([randomRecipe]);

  const searchBar = document.getElementById('searchBar');
  searchBar.addEventListener('input', searchHandler);
}

init();
