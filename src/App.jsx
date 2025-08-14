import React from "react";
import './App.css';
import bowlImage from './assets/bowl-image.png'; // Use your actual file name here

const CookioHome = () => {
  return (
    <div className="cookio-home">
      <header className="navbar">
        <div className="logo">Cookio<span className="dot">.</span></div>
        <nav>
          <ul>
            <li className="active">Home</li>
            <li>About us</li>
            <li>Recipes</li>
            <li>Blogs</li>
          </ul>
        </nav>
        <div className="actions">
          <button className="sign-in">Sign in</button>
        </div>
      </header>

      <main className="hero">
        <div className="hero-text">
          <h1 className="text-1">
            Crave It. <span className="highlight yellow">Search It.</span><br />
            <span className="highlight red">Cook It.</span>
          </h1>
          <p className="text-2">We prepare delicious food <br/>for your every cravings.</p>
          <button className="explore-btn">Explore Now</button>
        </div>
        <div className="hero-image">
          <img className="bowl-image" src={bowlImage} alt="Salad Bowl" />
        </div>
        
      </main>
    </div>
  );
};

export default CookioHome;
