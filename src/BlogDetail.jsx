import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Blog.css';
import logoImage from './assets/logo.png';
import featuredImg from './assets/blog header image.png';  
const blogPosts = [
  {
    id: 1,
    title: 'The Ultimate Guide to Meal Prep',
    date: '08/04/2025',
    image: featuredImg,
    tag: 'FEATURED ARTICLE',
    content: {
      intro: 'Meal prepping saves time, money, and stress. Here is how to master it.',
      steps: [
        { step: 1, title: 'Plan Your Menu', desc: 'Choose 3-4 recipes for the week. Mix proteins, carbs, and veggies. Check your calendar for busy days.' },
        { step: 2, title: 'Make Grocery List', desc: 'Write down every ingredient. Group by store section: produce, meat, pantry. Stick to the list.' },
        { step: 3, title: 'Batch Cook Proteins', desc: 'Bake 6 chicken breasts, cook quinoa, roast 2 trays of veggies at once. 375°F for 25 min works for most.' },
        { step: 4, title: 'Store Smart', desc: 'Use glass containers. Label with date. Fridge: 3-4 days. Freezer: 3 months. Keep sauces separate.' },
        { step: 5, title: 'Reheat Right', desc: 'Microwave with damp paper towel to avoid drying. Or 350°F oven for 10 min for crispy texture.' }
      ]
    }
  }
];

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) return <div className="container py-5"><p>Post not found</p></div>;

  return (
    <>
      <div className="newsletter-bar">
        <p>Subscribe to our newsletter - <strong>mykitchen@gmail.com</strong></p>
      </div>

      <div className="container header-main">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6">
            <Link to="/"><img src={logoImage} alt="My Kitchen" className="logo-img" /></Link>
          </div>
          <div className="col-md-6">
            <div className="search-wrapper">
              <input type="text" className="search-input" placeholder="Search" />
              <button className="search-btn"><i className="bi bi-search"></i></button>
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
        <Link to="/blog" className="back-link mb-4 d-inline-block">← Back to Blog</Link>
        
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <span className="blog-tag mb-3 d-inline-block">{post.tag}</span>
            <h1 className="article-title mb-2">{post.title}</h1>
            <p className="blog-date mb-4">{post.date}</p>
            
            <img src={post.image} alt={post.title} className="article-hero-img mb-4" />
            
            <p className="article-intro mb-5">{post.content.intro}</p>

            <h3 className="steps-heading mb-4">Preparation & Steps</h3>
            {post.content.steps.map(item => (
              <div key={item.step} className="step-item mb-4">
                <div className="step-number">{item.step}</div>
                <div className="step-content">
                  <h4 className="step-title">{item.title}</h4>
                  <p className="step-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;