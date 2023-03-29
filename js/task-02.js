const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");

const ingredientItems = ingredients.map(ingredient => {
  const ingredientItem = document.createElement("li");

  ingredientItem.classList.add("item");
  ingredientItem.textContent = ingredient; 

  return ingredientItem;
});

ingredientsList.append(...ingredientItems); 