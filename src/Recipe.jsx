import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Recipe.css';

import logoImage from './assets/logo.png';
import cat1 from './assets/healthy baking icon.png';
import cat2 from './assets/no bake icon.png';
import cat3 from './assets/protein icon.png';
import cat4 from './assets/5 minute icon.png';
import cat5 from './assets/5 icon.png';
import cat6 from './assets/vegan icon.png';

import img1 from './assets/healthy baking 1.png';
import img2 from './assets/healthy baking 2.png';
import img3 from './assets/recipe index 23.png';
import img4 from './assets/recipe index 15.png';
import img5 from './assets/healthy baking 6.png';
import img6 from './assets/latest recipe in des 6.png';
import img7 from './assets/recipe des 5.png';
import img8 from './assets/vegan special 3.png';

const categories = [
  { id: 1, name: 'Healthy Baking', image: cat1 },
  { id: 2, name: 'No-bake Dessert', image: cat2 },
  { id: 3, name: 'Protein Packed', image: cat3 },
  { id: 4, name: '5-Minute Recipe', image: cat4 },
  { id: 5, name: '<5-Ingredients', image: cat5 },
  { id: 6, name: 'Vegan Special', image: cat6 },
];

// Updated to match screenshot
const lifestyleFilters = [
  { id: 1, name: 'Vegan' },
  { id: 2, name: 'Dairy-free' },
  { id: 3, name: 'Gluten-free' },
  { id: 4, name: 'Nut-free' },
  { id: 5, name: 'Refined Sugar-free' },
  { id: 6, name: 'Egg-free' },
];

// Updated to match screenshot
const mealTimeFilters = [
  { id: 1, name: 'Breakfast' },
  { id: 2, name: 'Meal Prep' },
  { id: 3, name: 'Quick dinners' },
  { id: 4, name: 'Smoothies & juices' },
  { id: 5, name: 'Healthy snacks' },
  { id: 6, name: 'Baking recipes' },
];

const allRecipes = [
  { 
    id: 101, 
    title: 'Decorating Sugar Cookies', 
    image: img1, 
    category: 'Healthy Baking',
    lifestyle: ['Gluten-free', 'Nut-free', 'Egg-free'],
    mealTime: ['Baking recipes', 'Healthy snacks']
  },
  { 
    id: 102, 
    title: 'Fudgy Chocolate Brownies', 
    image: img2, 
    category: 'Healthy Baking',
    lifestyle: ['Dairy-free', 'Refined Sugar-free'],
    mealTime: ['Baking recipes']
  },
  { 
    id: 103, 
    title: 'Vanilla Sprinkle Cupcakes', 
    image: img3, 
    category: 'Healthy Baking',
    lifestyle: ['Vegan', 'Dairy-free', 'Egg-free'],
    mealTime: ['Baking recipes', 'Healthy snacks']
  },
  { 
    id: 104, 
    title: 'Protein Peanut Butter Bars', 
    image: img4, 
    category: 'Protein Packed',
    lifestyle: ['Gluten-free', 'Dairy-free', 'Refined Sugar-free'],
    mealTime: ['Healthy snacks', 'Breakfast', 'Meal Prep']
  },
  { 
    id: 105, 
    title: 'Overnight Chia Pudding', 
    image: img5, 
    category: 'No-bake Dessert',
    lifestyle: ['Vegan', 'Gluten-free', 'Nut-free', 'Dairy-free'],
    mealTime: ['Breakfast', 'Meal Prep']
  },
  { 
    id: 106, 
    title: '5-Ingredient Banana Bread', 
    image: img6, 
    category: '<5-Ingredients',
    lifestyle: ['Dairy-free', 'Nut-free', 'Refined Sugar-free'],
    mealTime: ['Breakfast', 'Healthy snacks', 'Baking recipes']
  },
  { 
    id: 107, 
    title: 'Vegan Fudge Brownies', 
    image: img7, 
    category: 'Vegan Special',
    lifestyle: ['Vegan', 'Dairy-free', 'Gluten-free', 'Egg-free'],
    mealTime: ['Baking recipes','Breakfast']
  },
  { 
    id: 108, 
    title: '5-Minute Energy Balls', 
    image: img8, 
    category: '5-Minute Recipe',
    lifestyle: ['Vegan', 'Gluten-free', 'Dairy-free', 'Refined Sugar-free'],
    mealTime: ['Healthy snacks', 'Breakfast', 'Quick dinners']
  },
];

const Recipes = () => {
  const [selectedLifestyle, setSelectedLifestyle] = useState([]);
  const [selectedMealTime, setSelectedMealTime] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Healthy Baking');

  // Function to count recipes per filter
  const getFilterCount = (filterType, filterName) => {
    return allRecipes.filter(recipe => {
      const matchCategory = recipe.category === selectedCategory;
      return matchCategory && recipe[filterType].includes(filterName);
    }).length;
  };

  const handleLifestyleChange = (filterName) => {
    setSelectedLifestyle(prev => 
      prev.includes(filterName) 
       ? prev.filter(f => f!== filterName)
        : [...prev, filterName]
    );
  };

  const handleMealTimeChange = (filterName) => {
    setSelectedMealTime(prev => 
      prev.includes(filterName) 
       ? prev.filter(f => f!== filterName)
        : [...prev, filterName]
    );
  };

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setSelectedLifestyle([]); // Reset filters when category changes
    setSelectedMealTime([]);
  };

  const filteredRecipes = allRecipes.filter(recipe => {
    const matchCategory = recipe.category === selectedCategory;
    const matchLifestyle = selectedLifestyle.length === 0 || 
      selectedLifestyle.every(f => recipe.lifestyle.includes(f));
    const matchMealTime = selectedMealTime.length === 0 || 
      selectedMealTime.some(f => recipe.mealTime.includes(f));
    
    return matchCategory && matchLifestyle && matchMealTime;
  });

  return (
    <>
      <div className="newsletter-bar animate__animated animate__fadeInDown">
        <p>Subscribe to our newsletter - <strong>mykitchen@gmail.com</strong></p>
      </div>

      <div className="container header-main animate__animated animate__fadeInDown">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6">
            <img src={logoImage} alt="My Kitchen" className="logo-img" />
          </div>
          <div className="col-md-6">
            <div className="search-wrapper">
              <input type="text" className="search-input" placeholder="Search" />
              <button className="search-btn">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <nav className="main-nav">
        <div className="container">
          <ul className="nav-list">
            <li><Link to="/" className="nav-link">HOME</Link></li>
            <li><Link to="/recipes" className="nav-link active">RECIPES</Link></li>
            <li><Link to="/blog" className="nav-link">BLOG</Link></li>
            <li><Link to="/about" className="nav-link">ABOUT ME</Link></li>
          </ul>
        </div>
      </nav>

      <div className="container py-5">
        <h1 className="page-heading text-center animate__animated animate__fadeInUp">
          {selectedCategory}
        </h1>

        <div className="row justify-content-center g-4 my-5">
          {categories.map((cat, index) => (
            <div 
              key={cat.id} 
              className="col-auto text-center animate__animated animate__zoomIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className={`category-circle ${selectedCategory === cat.name? 'active' : ''}`}
                onClick={() => handleCategoryClick(cat.name)}
              >
                <img src={cat.image} alt={cat.name} className="category-img" />
              </div>
              <p className="category-name">{cat.name}</p>
            </div>
          ))}
        </div>
          
        <div className="row g-5 mt-4">
          <div className="col-lg-3 animate__animated animate__fadeInLeft">
            <div className="filter-sidebar">
              {/* Lifestyle Filter with counts */}
              <h3 className="filter-title">Filter by Lifestyle</h3>
              {lifestyleFilters.map(filter => {
                const count = getFilterCount('lifestyle', filter.name);
                return (
                  <div key={filter.id} className="form-check filter-check">
                    <input 
                      className="form-check-input" 
                      type="checkbox" 
                      id={`lifestyle-${filter.id}`}
                      checked={selectedLifestyle.includes(filter.name)}
                      onChange={() => handleLifestyleChange(filter.name)}
                    />
                    <label className="form-check-label" htmlFor={`lifestyle-${filter.id}`}>
                      {filter.name} ({count})
                    </label>
                  </div>
                );
              })}

              {/* Meal Time Filter with counts */}
              <h3 className="filter-title" style={{ marginTop: '32px' }}>Filter by Meal Time</h3>
              {mealTimeFilters.map(filter => {
                const count = getFilterCount('mealTime', filter.name);
                return (
                  <div key={filter.id} className="form-check filter-check">
                    <input 
                      className="form-check-input" 
                      type="checkbox" 
                      id={`mealtime-${filter.id}`}
                      checked={selectedMealTime.includes(filter.name)}
                      onChange={() => handleMealTimeChange(filter.name)}
                    />
                    <label className="form-check-label" htmlFor={`mealtime-${filter.id}`}>
                      {filter.name} ({count})
                    </label>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-lg-9">
            <div className="row g-4">
              {filteredRecipes.length > 0? (
                filteredRecipes.map((recipe, index) => (
                  <div 
                    key={recipe.id} 
                    className="col-md-4 col-sm-6 animate__animated animate__fadeInUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Updated card structure - image top, text below */}
                    <Link to={`/recipe/${recipe.id}`} className="recipe-card">
                      <div className="recipe-img-wrapper">
                        <img 
                          src={recipe.image} 
                          alt={recipe.title} 
                          className="recipe-img" 
                        />
                      </div>
                      <div className="recipe-title-wrapper">
                        <h4 className="recipe-title">{recipe.title}</h4>
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <div className="col-12 text-center">
                  <p>No recipes found. Try different filters.</p>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
      <footer className="footer-section">
                    <div className="container text-center">
                      <div className="footer-logo animate__animated animate__fadeInUp">
                        <img src={logoImage} alt="My Kitchen" className="footer-logo-img" />
                      </div>
                      
                      <p className="footer-tagline animate__animated animate__fadeInUp animate__delay-1s">
                        Healthy recipes for busy people
                      </p>
            
                      <div className="footer-social animate__animated animate__fadeInUp animate__delay-2s">
                        <a href="#" className="footer-social-link"><i className="bi bi-twitter"></i></a>
                        <a href="#" className="footer-social-link"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="footer-social-link"><i className="bi bi-instagram"></i></a>
                        <a href="#" className="footer-social-link"><i className="bi bi-youtube"></i></a>
                        <a href="#" className="footer-social-link"><i className="bi bi-linkedin"></i></a>
                        <a href="#" className="footer-social-link"><i className="bi bi-share"></i></a>
                      </div>
            
                      <form className="footer-newsletter animate__animated animate__fadeInUp animate__delay-3s">
                        <input 
                          type="email" 
                          className="footer-input" 
                          placeholder="Enter your email address here" 
                          required
                        />
                        <button type="submit" className="footer-btn">
                          <i className="bi bi-send-fill"></i>
                        </button>
                      </form>
                      <p className="footer-note">*Be informed about the latest recipes and workshops</p>
            
                      <div className="footer-bottom">
                        <Link to="/privacy" className="footer-link">Privacy Policy</Link>
                        <p className="footer-copy">copyrights 2022 © my kitchen</p>
                      </div>
                    </div>
                  </footer>
    </>
  );
};

export default Recipes;