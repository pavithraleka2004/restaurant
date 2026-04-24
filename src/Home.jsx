import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Home.css';

// Hero + Logo
import heroImage from './assets/hero image.png';
import logoImage from './assets/logo.png';

// Top 2 cards
import dessertImg from './assets/dessert.png';
import seafoodImg from './assets/platter.png';

// Latest Recipes
import img1 from './assets/latest recipes 1.png';
import img2 from './assets/latest recipes 2.png';
import img3 from './assets/latest recipes 3.png';
import img4 from './assets/latest recipes 4.png';
import tiffyImg from './assets/profile.png';

// Readers Favourites images
import fav1 from './assets/readers fav 1.png';
import fav2 from './assets/readers fav 2.png';
import fav3 from './assets/readers fav 3.png';
import fav4 from './assets/readers fav 4.png';

import insta1 from './assets/insta 1.png';
import insta2 from './assets/insta 2.png';
import insta3 from './assets/insta 3.png';
import insta4 from './assets/insta 4.png';
import insta5 from './assets/insta 5.png';
import logoFrame from './assets/logo.png'; 

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  const instagramPosts = [
    { id: 9, image: insta1 },
    { id: 10, image: insta2 },
    { id: 11, image: insta3 },
    { id: 12, image: insta4 },
    { id: 13, image: insta5 },
  ];

  const recipes = [
    { id: 1, title: 'Chickpea and sprouts salad', image: img1 },
    { id: 2, title: 'High protein chocolate mousse', image: img2 },
    { id: 3, title: 'Big mac lamb chops and veggies', image: img3 },
    { id: 4, title: 'Healthy apple crumble', image: img4 },
  ];

  const favourites = [
    { id: 5, title: 'Time saving meal prep', image: fav1 },
    { id: 6, title: 'Toddler-friendly foods', image: fav2 },
    { id: 7, title: '10-must try vegan recipes', image: fav3 },
    { id: 8, title: 'Canning and preserving methods', image: fav4 },
  ];

  const handleRecipeClick = (id) => {
    navigate(`/recipe/${id}`);
  };

  const handleFavouriteClick = (id) => {
    navigate(`/recipe/${id}`);
  };

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
            <li>
              <Link to="/" className={isActive('/')}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/recipes" className={isActive('/recipes')}>
                RECIPES
              </Link>
            </li>
            <li>
              <Link to="/blog" className={isActive('/blog')}>
                BLOG
              </Link>
            </li>
            <li>
              <Link to="/about" className={isActive('/about')}>
                ABOUT ME
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container">
        <div 
          className="hero-section animate__animated animate__fadeInUp"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="hero-content">
            <h1 className="hero-title">Sharing my love for food</h1>
            <p className="hero-text">
              I'm excited to share my passion for all things culinary. Food is not just about nourishment: it's an experience that brings people together, evokes memories, and sparks creativity.
            </p>
            <button className="hero-btn">
              GET IN TOUCH <i className="bi bi-send-fill"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row g-4 mb-5">
          <div className="col-md-6 animate__animated animate__fadeInUp">
            <div className="recipe-card" onClick={() => handleRecipeClick(2)}>
              <div className="recipe-img-wrapper">
                <img 
                  src={dessertImg} 
                  alt="Chocolate Mousse" 
                  className="recipe-img" 
                />
              </div>
              <div className="recipe-content">
                <p className="recipe-category">DESSERT</p>
                <h3 className="recipe-title">Chocolate Mousse</h3>
              </div>
            </div>
          </div>

          <div className="col-md-6 animate__animated animate__fadeInUp animate__delay-1s">
            <div className="recipe-card" onClick={() => handleRecipeClick(3)}>
              <div className="recipe-img-wrapper">
                <img 
                  src={seafoodImg} 
                  alt="Sea Food Platter" 
                  className="recipe-img" 
                />
              </div>
              <div className="recipe-content">
                <p className="recipe-category">PLATTER</p>
                <h3 className="recipe-title">Sea Food Platter</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="newsletter-box animate__animated animate__fadeInUp animate__delay-2s">
          <div className="row align-items-center">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <p className="newsletter-subtitle mb-1">New recipes</p>
              <h2 className="newsletter-title mb-0">Straight to your inbox</h2>
            </div>
            <div className="col-lg-8">
              <form className="newsletter-form">
                <div className="row g-3 align-items-end">
                  <div className="col-md-5">
                    <input 
                      type="text" 
                      className="newsletter-input" 
                      placeholder="Enter your name" 
                      required
                    />
                  </div>
                  <div className="col-md-5">
                    <input 
                      type="email" 
                      className="newsletter-input" 
                      placeholder="Enter your email address here" 
                      required
                    />
                  </div>
                  <div className="col-md-2">
                    <button type="submit" className="newsletter-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    
      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4 animate__animated animate__fadeInDown">
          <h2 className="section-title mb-0">Latest Recipes</h2>
          <Link to="/recipes" className="btn view-all-btn">
            View All <i className="bi bi-arrow-right ms-1"></i>
          </Link>
        </div>

        <div className="row g-4">
          {recipes.map((recipe, index) => (
            <div 
              key={recipe.id} 
              className="col-lg-3 col-md-6 animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="recipe-card"
                onClick={() => handleRecipeClick(recipe.id)}
              >
                <div className="recipe-img-container">
                  <img 
                    src={recipe.image} 
                    alt={recipe.title} 
                    className="recipe-img" 
                  />
                </div>
                <div className="recipe-body">
                  <p className="recipe-name">{recipe.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="tiffy-section">
        <div className="container">
          <div className="tiffy-box animate__animated animate__fadeInUp">
            <div className="row align-items-center">
              <div className="col-lg-7 text-center text-lg-start mb-4 mb-lg-0">
                <h3 className="tiffy-heading">Hello there! I am Tiffy.</h3>
                <p className="tiffy-subheading">Start cooking with me</p>
                <div className="social-icons my-3">
                  <a href="#" className="social-link"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="social-link"><i className="bi bi-instagram"></i></a>
                  <a href="#" className="social-link"><i className="bi bi-youtube"></i></a>
                </div>
                <Link to="/about" className="view-more-link">VIEW MORE</Link>
              </div>
              <div className="col-lg-5 text-center">
                <img src={tiffyImg} alt="Tiffy" className="tiffy-img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="section-title mb-0">Readers Favourites</h2>
          <Link to="/recipes" className="btn view-all-btn">
            View All <i className="bi bi-arrow-right ms-1"></i>
          </Link>
        </div>

        <div className="row g-4 mb-5">
          {favourites.map((fav, index) => (
            <div 
              key={fav.id} 
              className="col-lg-3 col-md-6 animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="favourite-card"
                onClick={() => handleFavouriteClick(fav.id)}
              >
                <div className="favourite-img-container">
                  <img 
                    src={fav.image} 
                    alt={fav.title} 
                    className="favourite-img" 
                  />
                </div>
                <div className="favourite-body">
                  <p className="favourite-name">{fav.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="newsletter-red-box animate__animated animate__fadeInUp">
          <h3 className="newsletter-red-title">Our Newsletter</h3>
          <p className="newsletter-red-text">
            Subscribe to our newsletter & keep up with our latest recipes<br />
            and organized workshops.
          </p>
          <form className="newsletter-red-form">
            <input 
              type="email" 
              className="newsletter-red-input" 
              placeholder="Enter your email address here" 
              required
            />
            <button type="submit" className="newsletter-red-btn">
              <i className="bi bi-send-fill"></i>
            </button>
          </form>
        </div>
      </div>

      <div className="instagram-section py-5">
        <div className="container text-center">
          <h3 className="instagram-heading animate__animated animate__fadeInUp">
            Share Your Meals On With Instagram With <span className="text-red">#mykitchen</span><br />
            & We Will Reward The Meal Of The Month!
          </h3>

          <div className="row g-3 justify-content-center mt-4">
            {instagramPosts.map((post, index) => (
              <div 
                key={post.id} 
                className="col animate__animated animate__fadeInUp"
                style={{ animationDelay: `${index * 0.1}s`, maxWidth: '220px' }}
              >
                <div className="instagram-card">
                  <img 
                    src={post.image} 
                    alt="Instagram meal" 
                    className="instagram-img" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="footer-section">
        <div className="container text-center">
          <div className="footer-logo animate__animated animate__fadeInUp">
            <img src={logoFrame} alt="My Kitchen" className="footer-logo-img" />
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

export default Home;