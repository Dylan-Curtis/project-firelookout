import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import RenderStars from "./RenderStars";

function TrailCard({ trail, reviews, liked, setLiked }) {
  
  

 

  const handleLike = () => {
    setLiked(!liked);
  };
  

  return (
    <div className="TrailCard">
      <div className="image-container">
      <Link trail={trail} to={`/trail/${trail.id}`}>
        <img src={trail.image} alt={trail.name} className="trail-image" />
        </Link>
        <button onClick={handleLike} className={`heart-button ${liked ? "liked" : ""}`}>
          {liked ? "❤️" : "🤍"}
        </button>
      </div>
      <div className="trail-details">
        <span>
        <h3 className="trail-name">
          {trail.name}</h3>
         <div className="trail-rating-card">
          <RenderStars reviews={trail.reviews} trail={trail}/>
          </div>
        </span>
        <div className="trail-length"> {trail.length} mi
          <span className="review-count">
            {reviews.length} {reviews.length === 1 ? "Review" : "Reviews"}
          </span>
        </div>
      </div>
      <h3>
        {trail.reviews.map((review, index) => (
          <div key={index}>
            {/* <li className="review">{review.body}</li> */}
          </div>
        ))}
      </h3>
    </div>
  );
}

export default TrailCard;