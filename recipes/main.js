import recipes from './recipes.mjs';

const container = document.getElementById('recipesContainer');
const searchBar = document.getElementById('searchBar');

function createRecipeCard(recipe) {
  const card = document.createElement('div');
  card.className = 'recipe-card';
  card.innerHTML = `
    <img src="${recipe.image}" alt="${recipe.name}">
    <div class="recipe-details">
      <h2>${recipe.name}</h2>
      <p><strong>Author:</strong> ${recipe.author}</p>
      <p><strong>Prep Time:</strong> ${recipe.prepTime}</p>
      <p>${recipe.description}</p>
      <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
        ${'⭐'.repeat(Math.floor(recipe.rating))}${'☆'.repeat(5 - Math.floor(recipe.rating))}
      </span>
    </div>
  `;
  return card;
}

function displayRecipes(recipesToShow) {
  container.innerHTML = '';
  recipesToShow.forEach(recipe => {
    container.appendChild(createRecipeCard(recipe));
  });
}

displayRecipes(recipes);

searchBar.addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();
  const filtered = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(term) ||
    recipe.description.toLowerCase().includes(term) ||
    recipe.tags.join(' ').toLowerCase().includes(term)
  );
  displayRecipes(filtered);
});
