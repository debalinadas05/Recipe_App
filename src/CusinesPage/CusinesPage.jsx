import React from "react";
import "./CusinesPage.css";

const cusines = [
    {
        name: "Indian",
        img:""
    },
     {
        name: "Chinese",
        img:""
    },
     {
        name: "English",
        img:""
    },
     {
        name: "Italian",
        img:""
    },
    
];

export default function Cuisine() {
    return (
        <div className="cuisine-section">
            <h2 className="title">Explore by Cuisine</h2>
            <p className="subtitle">
                Discover new flavors and cooking techniques with our diverse selection
                of cuisine types.
            </p>

            <div className="cuisine-container">
                {cusines.map((cusines, index) => (
                   <div className="cuisine-card" key={index}>
                        <img src={cusines.img} alt={cusines.name} />
                        <div className="card-overlay">
                            <span>{cusines.name} &rarr;</span>
                        </div>
                   </div> 
                ))}
            </div>
            
            <div className="nav-buttons">
                <button className="arrow-btn left">&#8592;</button>
                <button className="arrow-btn right">&#8594;</button>
            </div>
        </div>
    );
}