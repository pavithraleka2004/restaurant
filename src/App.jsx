import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import RecipeDetail from './RecipeDetail.jsx';
import Recipe from './Recipe.jsx';
import Recipes from './Recipe.jsx';
import Blog from './Blog';
import BlogDetail from './BlogDetail';
import AboutMe from './AboutMe.jsx';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} /> 
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    
  );
}

export default App;
