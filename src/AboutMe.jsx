import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './AboutMe.css';

// Import all your images here
import logoImage from './assets/logo.png';
import aboutPhoto from './assets/about me 1.png';
import recipe1 from './assets/about me 2.png';
import recipe2 from './assets/about me 3.png';
import recipe3 from './assets/about me 4.png';
import recipe4 from './assets/about me 5.png';
import recipe5 from './assets/about me 6.png';

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const recipeImages = [recipe1, recipe2, recipe3, recipe4, recipe5];

  return (
    <>
      <div className={`newsletter-bar ${isVisible ? 'fade-in-down' : ''}`}>
        <p>Subscribe to our newsletter - <strong>mykitchen@gmail.com</strong></p>
      </div>

      <div className={`container header-main ${isVisible ? 'fade-in-down delay-1' : ''}`}>
        <div className="header-row">
          <div className="logo-col">
            <img src={logoImage} alt="My Kitchen" className="logo-img" />
          </div>
          <div className="search-col">
            <div className="search-wrapper">
              <input type="text" className="search-input" placeholder="Search" />
              <button className="search-btn">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <nav className={`main-nav ${isVisible ? 'fade-in-down delay-2' : ''}`}>
        <div className="container">
          <ul className="nav-list">
            <li><Link to="/" className="nav-link">HOME</Link></li>
            <li><Link to="/recipes" className="nav-link">RECIPES</Link></li>
            <li><Link to="/blog" className="nav-link">BLOG</Link></li>
            <li><Link to="/about" className="nav-link active">ABOUT ME</Link></li>
          </ul>
        </div>
      </nav>

      <Container className="about-content py-5">
        <Row>
          <Col xs={12}>
            <h2 className={`about-title text-center mb-5 ${isVisible ? 'fade-in-up delay-3' : ''}`}>
              About Me
            </h2>
            
            <div className={`about-text ${isVisible ? 'fade-in-up delay-3' : ''}`}>
              <p>
                I'm Tiffy (Tiffany) a born and "bread" 20-something South African gal. I'm a food lover, self-taught 
                chef, baker, food photographer & videographer. I started my blog as a hobby in lockdown 1.0, but it 
                has since become my full-time job and biggest passion! My main inspiration for sharing easy and 
                healthy recipes comes from my past of disordered, restrictive eating habits and my struggles with 
                a hormonal disorder - PCOS.
              </p>
              <p>
                I'm at my happiest when helping & serving others and I hope that my recipes can help YOU make 
                healthier choices, without the "FAD" diets and restriction, but instead by making recipes using 
                healthier ingredients. I like to think of my recipes as "good for your soul and your body". OH, and my 
                recipes are minimal-effort, so that even the *busiest* people can make them!
              </p>
            </div>

            <div className={`about-image-wrapper mt-5 ${isVisible ? 'fade-in-up delay-4' : ''}`}>
              <img 
                src={aboutPhoto} 
                alt="Tiffy cooking in kitchen"
                className="about-img"
              />
            </div>

            <div className={`quick-facts-section mt-5 ${isVisible ? 'fade-in-up delay-4' : ''}`}>
              <h4 className="facts-title mb-4">Quick Fire Facts:</h4>
              
              <ul className="facts-list">
                <li>
                  <i className="bi bi-arrow-right-short facts-arrow"></i>
                  <span>I became a Christian 3 years ago and it's completely turned my life around in all the best ways. I got baptised last year with my sister!</span>
                </li>
                <li>
                  <i className="bi bi-arrow-right-short facts-arrow"></i>
                  <span>I grew up in Cape Town, but moved to England (alone) when I was 18.</span>
                </li>
                <li>
                  <i className="bi bi-arrow-right-short facts-arrow"></i>
                  <span>I went on my first solo trip to Europe in November/December last year for 6 weeks.</span>
                </li>
                <li>
                  <i className="bi bi-arrow-right-short facts-arrow"></i>
                  <span>I'm at my happiest when helping & serving others.</span>
                </li>
                <li>
                  <i className="bi bi-arrow-right-short facts-arrow"></i>
                  <span>My death-row meal: fresh sourdough (cut thick) with salted butter and cheddar</span>
                </li>
                <li>
                  <i className="bi bi-arrow-right-short facts-arrow"></i>
                  <span>I have PCOS (polycystic ovarian syndrome) – this is the main inspiration for eating healthier & nourishing my body – to heal my hormones.</span>
                </li>
                <li>
                  <i className="bi bi-arrow-right-short facts-arrow"></i>
                  <span>I struggled with disordered eating a couple of years ago (obsessive calorie counting, restrictive eating and food guilt) and actually still struggle sometimes, but I'm working on it.</span>
                </li>
              </ul>

              <p className="facts-note mt-4">
                These above factors are things that drive me and motivate me to create and share my easy & healthy recipes with you.
              </p>

              <p className="mission-text mt-4">
                ✨ <em>"My mission is to motivate you to nourish your body, without depriving yourself of cravings, but rather by making mindful choices and finding balance. To prove that being healthy can be easy and fun."</em> ✨
              </p>

              <h5 className="recipes-heading mt-5 mb-3">Here are a few of my recipes I've ever created:</h5>

              <div className="recipe-grid">
                {recipeImages.map((img, idx) => (
                  <img 
                    key={idx}
                    src={img} 
                    alt={`Recipe ${idx + 1}`} 
                    className="recipe-img"
                  />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
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

export default AboutMe;