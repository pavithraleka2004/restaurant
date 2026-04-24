import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

// Import ALL images - filenames must have NO SPACES
import latestRecipes1 from './assets/latest Recipes 1.png';
import latestRecipes2 from './assets/latest Recipes 2.png';
import latestRecipes3 from './assets/latest Recipes 3.png';
import latestRecipes4 from './assets/latest Recipes 4.png';
import readersFav1 from './assets/readers Fav 1.png';
import readersFav2 from './assets/readers Fav 2.png';
import readersFav3 from './assets/readers Fav 3.png';
import readersFav4 from './assets/readers Fav 4.png';
import healthyBaking1 from './assets/healthy Baking 1.png';
import healthyBaking2 from './assets/healthy Baking 2.png';
import healthyBaking6 from './assets/healthy baking 6.png';
import recipeIndex15 from './assets/recipe index 15.png';
import recipeIndex23 from './assets/recipe index 23.png';
import latestRecipeInDes6 from './assets/latest recipe in des 6.png';
import recipeDes5 from './assets/recipe des 5.png';
import veganSpecial3 from './assets/vegan Special 3.png';
import logoImg from './assets/logo.png';

// MASTER LIST - must include every ID you use in Recipes.jsx
const allRecipes = [
  // Latest Recipes section - IDs 1-4
  {
    id: 1,
    title: "Chickpea and Sprouts Salad",
    category: "SALAD",
    image: latestRecipes1,
    prepTime: "15 mins",
    cookTime: "0 mins",
    servings: 2,
    description: "A fresh, protein-packed salad that comes together in minutes.",
    ingredients: ["1 cup boiled chickpeas", "1/2 cup mixed sprouts", "1 cucumber, diced", "1 tomato, diced"],
    instructions: ["Rinse chickpeas and sprouts.", "Add veggies.", "Toss and serve."],
    lifestyle: ["Vegan", "Gluten-free"],
    mealTime: ["Healthy snacks"]
  },
  {
    id: 2,
    title: "High Protein Chocolate Mousse",
    category: "DESSERT",
    image: latestRecipes2,
    prepTime: "10 mins",
    cookTime: "0 mins",
    servings: 2,
    description: "Decadent chocolate mousse with a protein boost.",
    ingredients: ["1 cup Greek yogurt", "2 tbsp cocoa powder", "1 scoop protein powder"],
    instructions: ["Mix all ingredients.", "Whisk until fluffy.", "Chill 10 mins."],
    lifestyle: ["Gluten-free"],
    mealTime: ["Healthy snacks"]
  },
  {
    id: 3,
    title: "Avocado Toast with Egg",
    category: "BREAKFAST",
    image: latestRecipes3,
    prepTime: "5 mins",
    cookTime: "5 mins",
    servings: 1,
    description: "Classic avocado toast topped with a perfect egg.",
    ingredients: ["1 slice sourdough", "1/2 avocado", "1 egg", "Chili flakes"],
    instructions: ["Toast bread.", "Mash avocado.", "Fry egg.", "Assemble."],
    lifestyle: [],
    mealTime: ["Breakfast"]
  },
  {
    id: 4,
    title: "Green Smoothie Bowl",
    category: "SMOOTHIE",
    image: latestRecipes4,
    prepTime: "5 mins",
    cookTime: "0 mins",
    servings: 1,
    description: "Nutrient-packed green smoothie bowl.",
    ingredients: ["1 banana", "1 cup spinach", "1/2 cup almond milk"],
    instructions: ["Blend ingredients.", "Pour into bowl.", "Add toppings."],
    lifestyle: ["Vegan", "Dairy-free"],
    mealTime: ["Breakfast"]
  },

  // Readers Favourites - IDs 11-14
  {
    id: 11,
    title: "Banana Pancakes",
    category: "BREAKFAST",
    image: readersFav1,
    prepTime: "10 mins",
    cookTime: "10 mins",
    servings: 2,
    description: "Fluffy banana pancakes made with oats.",
    ingredients: ["1 banana", "2 eggs", "1/2 cup oats"],
    instructions: ["Blend all ingredients.", "Cook on griddle.", "Serve hot."],
    lifestyle: ["Gluten-free"],
    mealTime: ["Breakfast"]
  },
  {
    id: 12,
    title: "Quinoa Buddha Bowl",
    category: "LUNCH",
    image: readersFav2,
    prepTime: "15 mins",
    cookTime: "20 mins",
    servings: 2,
    description: "Colorful quinoa bowl with roasted veggies.",
    ingredients: ["1 cup quinoa", "Mixed veggies", "Tahini dressing"],
    instructions: ["Cook quinoa.", "Roast veggies.", "Assemble bowl."],
    lifestyle: ["Vegan", "Gluten-free"],
    mealTime: ["Lunch", "Dinner"]
  },
  {
    id: 13,
    title: "Protein Energy Balls",
    category: "SNACK",
    image: readersFav3,
    prepTime: "15 mins",
    cookTime: "0 mins",
    servings: 12,
    description: "No-bake protein balls for quick energy.",
    ingredients: ["1 cup oats", "1/2 cup peanut butter", "Protein powder"],
    instructions: ["Mix all ingredients.", "Roll into balls.", "Refrigerate."],
    lifestyle: ["Vegan"],
    mealTime: ["Healthy snacks"]
  },
  {
    id: 14,
    title: "Grilled Chicken Salad",
    category: "DINNER",
    image: readersFav4,
    prepTime: "10 mins",
    cookTime: "15 mins",
    servings: 2,
    description: "High protein grilled chicken over fresh greens.",
    ingredients: ["2 chicken breasts", "Mixed greens", "Vinaigrette"],
    instructions: ["Grill chicken.", "Toss salad.", "Slice chicken on top."],
    lifestyle: ["Gluten-free", "Dairy-free"],
    mealTime: ["Dinner", "Lunch"]
  },

  // Healthy Baking - IDs 101-105
  {
    id: 101,
    title: "Decorating Sugar Cookies",
    category: "Healthy Baking",
    image: healthyBaking1,
    prepTime: "20 mins",
    cookTime: "12 mins",
    servings: 24,
    description: "Soft sugar cookies perfect for decorating with kids.",
    ingredients: ["2 1/2 cups gluten-free flour", "1 cup coconut sugar", "1/2 cup butter"],
    instructions: ["Preheat oven to 350°F.", "Cream butter and sugar.", "Bake 10-12 mins."],
    lifestyle: ["Gluten-free", "Nut-free"],
    mealTime: ["Baking recipes"]
  },
  {
    id: 102,
    title: "Almond Flour Brownies",
    category: "Healthy Baking",
    image: healthyBaking2,
    prepTime: "15 mins",
    cookTime: "25 mins",
    servings: 9,
    description: "Fudgy brownies made with almond flour.",
    ingredients: ["1 cup almond flour", "1/2 cup cocoa", "3 eggs"],
    instructions: ["Mix wet ingredients.", "Add dry ingredients.", "Bake 25 mins."],
    lifestyle: ["Gluten-free"],
    mealTime: ["Baking recipes", "Healthy snacks"]
  },
  {
    id: 103,
    title: "Banana Bread",
    category: "Healthy Baking",
    image: healthyBaking6,
    prepTime: "15 mins",
    cookTime: "50 mins",
    servings: 10,
    description: "Moist banana bread with no refined sugar.",
    ingredients: ["3 ripe bananas", "2 cups oat flour", "2 eggs"],
    instructions: ["Mash bananas.", "Mix all ingredients.", "Bake 50 mins."],
    lifestyle: ["Dairy-free"],
    mealTime: ["Baking recipes", "Breakfast"]
  },

  // Add more IDs 15-20, 104-120 here following the same pattern
  {
    id: 15,
    title: "Overnight Oats",
    category: "BREAKFAST",
    image: recipeIndex15,
    prepTime: "5 mins",
    cookTime: "0 mins",
    servings: 1,
    description: "Prep-ahead breakfast oats.",
    ingredients: ["1/2 cup oats", "1/2 cup milk", "1 tbsp chia seeds"],
    instructions: ["Mix ingredients.", "Refrigerate overnight.", "Add toppings."],
    lifestyle: ["Vegan"],
    mealTime: ["Breakfast", "Meal Prep"]
  },
  {
    id: 23,
    title: "Lentil Soup",
    category: "SOUP",
    image: recipeIndex23,
    prepTime: "10 mins",
    cookTime: "30 mins",
    servings: 4,
    description: "Hearty red lentil soup.",
    ingredients: ["1 cup red lentils", "1 onion", "Vegetable broth"],
    instructions: ["Sauté onion.", "Add lentils and broth.", "Simmer 30 mins."],
    lifestyle: ["Vegan", "Gluten-free"],
    mealTime: ["Lunch", "Dinner"]
  }
];

const getFavouritesIds = [1, 2, 11, 12, 13, 14];

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const recipeId = parseInt(id);
    const foundRecipe = allRecipes.find((r) => r.id === recipeId);
    setRecipe(foundRecipe);
    window.scrollTo(0, 0);
  }, [id]);

  if (!recipe) {
    return (
      <div className="container py-5 text-center">
        <h2>Recipe not found</h2>
        <p>Looking for ID: {id}</p>
        <p>Available IDs: {allRecipes.map(r => r.id).join(', ')}</p>
        <Link to="/" className="btn btn-danger mt-3">Back to Home</Link>
      </div>
    );
  }

  const favourites = allRecipes.filter((r) => getFavouritesIds.includes(r.id));

  return (
    <div className="recipe-detail-page">
      <div className="container py-5">
        <img src={logoImg} alt="Logo" style={{ height: '50px' }} className="mb-3" />
        <Link to="/" className="back-link mb-4 d-inline-block">← Back to Recipes</Link>

        <div className="row g-5">
          <div className="col-lg-6">
            <img src={recipe.image} alt={recipe.title} className="img-fluid rounded" />
          </div>
          <div className="col-lg-6">
            <p className="text-danger fw-bold">{recipe.category}</p>
            <h1>{recipe.title}</h1>
            <p className="lead">{recipe.description}</p>
            <div className="d-flex gap-4 my-4">
              <div><strong>Prep:</strong> {recipe.prepTime}</div>
              <div><strong>Cook:</strong> {recipe.cookTime}</div>
              <div><strong>Serves:</strong> {recipe.servings}</div>
            </div>
          </div>
        </div>

        <div className="row g-5 mt-4">
          <div className="col-lg-5">
            <h3>Ingredients</h3>
            <ul className="list-group">
              {recipe.ingredients.map((item, index) => (
                <li key={index} className="list-group-item">{item}</li>
              ))}
            </ul>
          </div>
          <div className="col-lg-7">
            <h3>Instructions</h3>
            <ol className="list-group list-group-numbered">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="list-group-item">{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <h2 className="mb-4">Readers Favourites</h2>
        <div className="row g-4">
          {favourites.map((fav) => (
            <div
              key={fav.id}
              className="col-lg-3 col-md-6"
              onClick={() => navigate(`/recipe/${fav.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <div className="card">
                <img src={fav.image} alt={fav.title} className="card-img-top" />
                <div className="card-body">
                  <h6 className="card-title">{fav.title}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;