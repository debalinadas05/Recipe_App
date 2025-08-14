import React from "react";
import "./MenuPage.css"
import food1 from '../assets/food-1.png';
import food2 from '../assets/food-2.png';
import food3 from '../assets/food-3.png';
import food4 from '../assets/food-4.png';


const recipes = [
  {
    image: food1,
    title: "Creamy Tomato Basil Soup",
    description:
      "This comforting soup made with fresh tomatoes, aromatic basil, and a touch of a cream.",
    buttonColor: "default",
  },
  {
    image:food2,
    title: "Creamy Tomato Basil Soup",
    description:
      "This comforting soup made with fresh tomatoes, aromatic basil, and a touch of a cream.",
    buttonColor: "red",
  },
  {
    image: food3,
    title: "Creamy Tomato Basil Soup",
    description:
      "This comforting soup made with fresh tomatoes, aromatic basil, and a touch of a cream.",
    buttonColor: "default",
  },
  {
    image: food4,
    title: "Creamy Tomato Basil Soup",
    description:
      "This comforting soup made with fresh tomatoes, aromatic basil, and a touch of a cream.",
    buttonColor: "default",
  },
];

const Recipes = () => {
    return(
        <div className="recipes-section">
            <h1 className="recipes-heading">Popular Recipes You Xan't Miss</h1>
            <p className="recipes-subheading">
                From comfort food classics to exotic flavors,
                 our features recipes are sure to impress.
            </p>
            <div className="recipes-grid">
                {recipes.map((item, index) => (
                    <div key = {index} className="recipe-card">
                        <img src={item.image} alt={item.title} className="recipe-image"/>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <button className={`recipe-btn ${item.buttonColor === "red" ? "red" : ""}`}>
                            See Full Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recipes;