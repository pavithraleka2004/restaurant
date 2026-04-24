import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import logoImage from './assets/logo.png';
import featuredImg from './assets/blog header image.png';

// These images + IDs should match your allRecipes array from Recipes.js
import gridImg1 from './assets/blog 1.png';      
import gridImg2 from './assets/blog 2.png';       
import gridImg3 from './assets/blog 3.png';      
import gridImg4 from './assets/blog 4.png';     
import gridImg5 from './assets/blog 5.png';    
import gridImg6 from './assets/blog 6.png';          

const featuredPost = {
  id: 1,
  title: 'The Ultimate Guide to Meal Prep',
  date: '08/04/2025',
  excerpt: 'To meal prep effectively, start by planning your meals for the week, then create a grocery list based on those plans. Prep ingredients in advance and consider...',
  image: featuredImg,
  tag: 'FEATURED ARTICLE',
  quickPrefix: [
    'What are the foods for breakfast?',
    'How do you clean vegetables?',
    'How much ingredients for each recipes?',
    'What quantities makes a food good?',
    'Which ingredient is good for every season?'
  ]
};

// IMPORTANT: These IDs must match your allRecipes in RecipeDetail.jsx
const gridPosts = [
  {
    id: 101, // This should exist in your allRecipes array
    title: 'Easy and healthy millets recipes',
    date: '08/04/2025',
    excerpt: 'Welcome to my blog, where I share the knowledge acquired...',
    image: gridImg1,
  },
  {
    id: 102, // Match your RecipeDetail.jsx ID
    title: 'How to handle lobster',
    date: '22/03/2025',
    excerpt: 'Welcome to my blog, where I share the knowledge acquired...',
    image: gridImg2,
  },
  {
    id: 103,
    title: 'Platter arrangements',
    date: '15/03/2025',
    excerpt: 'Welcome to my blog, where I share the knowledge acquired...',
    image: gridImg3,
  },
  {
    id: 104,
    title: 'Food and scientific facts',
    date: '08/04/2025',
    excerpt: 'Welcome to my blog, where I share the knowledge acquired...',
    image: gridImg4,
  },
  {
    id: 105,
    title: 'Goodness of vegetables',
    date: '22/03/2025',
    excerpt: 'Welcome to my blog, where I share the knowledge acquired...',
    image: gridImg5,
  },
  {
    id: 106,
    title: 'Benefits of Nuts and dry fruits',
    date: '15/03/2025',
    excerpt: 'Welcome to my blog, where I share the knowledge acquired...',
    image: gridImg6,
  }
];

const Blog = () => {
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
            <li><Link to="/recipes" className="nav-link">RECIPES</Link></li>
            <li><Link to="/blog" className="nav-link active">BLOG</Link></li>
            <li><Link to="/about" className="nav-link">ABOUT ME</Link></li>
          </ul>
        </div>
      </nav>

      <div className="container py-5">
        <h1 className="page-heading text-center mb-5 animate__animated animate__fadeInUp">Blog</h1>

        {/* Featured Section - still goes to /blog/1 */}
        <div className="row g-5 align-items-start mb-5">
          <div className="col-lg-7 animate__animated animate__fadeInLeft">
            <Link to={`/blog/${featuredPost.id}`} className="blog-featured-card">
              <div className="blog-img-wrapper">
                <span className="blog-tag">{featuredPost.tag}</span>
                <img src={featuredPost.image} alt={featuredPost.title} className="blog-img" />
              </div>
              <div className="blog-content">
                <p className="blog-date">{featuredPost.date}</p>
                <h2 className="blog-title">{featuredPost.title}</h2>
                <p className="blog-excerpt">{featuredPost.excerpt}</p>
              </div>
            </Link>
          </div>

          <div className="col-lg-5 animate__animated animate__fadeInRight">
            <div className="quick-prefix-box">
              <h3 className="quick-prefix-title">Quick Prefix in this Article:</h3>
              <ol className="quick-prefix-list">
                {featuredPost.quickPrefix.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Grid Section - NOW LINKS TO /recipe/:id */}
        <div className="row g-4">
          {gridPosts.map((post, index) => (
            <div 
              key={post.id} 
              className="col-lg-4 col-md-6 animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="blog-grid-card">
                {/* Clicking image goes to RecipeDetail.jsx */}
                <Link to={`/recipe/${post.id}`} className="blog-grid-img-link">
                  <div className="blog-grid-img-wrapper">
                    <img src={post.image} alt={post.title} className="blog-grid-img" />
                  </div>
                </Link>
                <div className="blog-grid-content">
                  <p className="blog-grid-date">{post.date}</p>
                  <h3 className="blog-grid-title">{post.title}</h3>
                  <p className="blog-grid-excerpt">{post.excerpt}</p>
                  {/* Read Now also goes to RecipeDetail.jsx */}
                  <Link to={`/recipe/${post.id}`} className="read-now-btn">
                    Read Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
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
      </div>
    </>
  );
};

export default Blog;