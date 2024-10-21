import React from 'react';
import './App.css';
import Image from './assets/pic2.jpg'; 
import proj from './assets/proj1.jpg';

const App = () => {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <p>CHRISTIAN JAMES BUNDA</p>
        </div>
        <nav className="nav">
          <ul className="nav-links">
            <li><a href="#hero">HOME</a></li>
            <li><a href="#about">ABOUT ME</a></li>
            <li><a href="#projects">PROJECTS</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <img src={Image} alt="Gamer Character" className="hero-image" />
          <div className="hero-text">
            <h1>CHRISTIAN JAMES BUNDA</h1>
            <p>BSIT STUDENT</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
       <div className="title"> <h2>ABOUT ME</h2></div>
        <div className="about-box">
          <h2>SKILLS</h2>
          <p>UI/UX Designer</p>
        </div>
        <div className="about-box">
          <h2>HOBBY</h2>
          <p>My hobby is playing online game and playing basketbal.</p>
        </div>
        <div className="about-box">
          <h2>PERSONALITY</h2>
          <p>My personality is Kindness and Open-minded.</p>
        </div>
      </section>
 
      <section id="projects" className="projects-section">
  <h2>MY PROJECTS</h2>
  <div className="projects-grid">
    <div className="project-card">
      <div className="card-image">
        {/* Image for Project 1 */}
        <img src={proj} alt="Project 1" />
      </div>
      <p>REACT</p>
    </div>
    <div className="project-card">
      <div className="card-image">
        {/* Image for Project 2 */}
        <img src={proj} alt="Project 1" />
      </div>
      <p>FIGMA</p>
    </div>
  </div>
</section>
<section id="contact" className="contact">
        <h2>CONTACT ME</h2>
        <div className="contact-info">
          <div className="contact-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
            alt="Whatsapp" />
            <span>+63 915 670 6119</span>
          </div>
          <div className="contact-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"  
            alt="Email" />
            <span>christianjamesbunda@gmail.com</span>
          </div>
          <div className="contact-item">
          <img 
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
          alt="Facebook Icon" 
        />
            <span>CHRISTIAN JAMES BUNDA</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>God Bless us all. 2024</p>
      </footer>
    </div>
  );
};

export default App;