import React from 'react'
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className='about-container'>
        <div className="about-top">
            <img src="" alt="" />

            <div className="aboyt-text">
                <h2>ABOUT US</h2>
                <p>
                    Discover, cook and enjoy delicious
                    recipes from around the world.
                    Our app brings you step-by-step instruction,
                     personalized suggestions, and everything you 
                    need to make cooking easy and fun right at your
                    fingertips.
                </p>

                <button className='learn-btn'>
                    Learn More <span className='arrow'>&#8594;</span>
                </button>
            </div>
        </div>

        <div className="about-bottom">
            <div className="recipe-box">
                <h3>Have New Recipe ?</h3>
                <p>
                    If you have new recipes, DM us
                    we will review it and add it to our 
                    website.
                </p>
                <div className="recipe-input">
                    <input type="text" placeholder='Write the recipe here...'/>
                    <button className='submit-btn'>Submit</button>
                </div>
            </div>

            <div className="contact-box">
                <h3>CONTACT</h3>
                <p>8583083767</p>
                <p>cookio@gmail.com</p>
            </div>

            <div className="follow-box">
                <h3>FOLLOW</h3>

                <div className="social-icons">
                    <i className="fab fa-x-twitter"></i>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-instagram"></i>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AboutUs;