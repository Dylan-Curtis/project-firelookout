import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import halfStar from "../images/HalfStar.png"; 
// import TrailPage from "./TrailPage"

function TrailCard({ trail, reviews, liked, setLiked }) {
  
  const [averageRating, setAverageRating] = useState(null);

  useEffect(() => {
    // Calculate the average rating when reviews change
    if (reviews && reviews.length > 0) {
      const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
      const avg = totalRating / reviews.length;
      setAverageRating(avg);
    }
  }, [reviews]);

  const handleLike = () => {
    setLiked(!liked);
  };
  const generateStars = () => {
    const maxStars = 5;
    const roundedRating = Math.round(averageRating * 2) / 2; // Round to nearest 0.5
    const starIcons = [];
  
    for (let i = 1; i <= maxStars; i++) {
      if (i <= roundedRating) {
        // Full star
        starIcons.push(<span key={i}>★</span>);
      } else if (i === Math.ceil(roundedRating) && roundedRating % 1 !== 0) {
        // Half star using custom PNG image
        starIcons.push(
          <img key={i} src={halfStar} alt="Half Star" className="half-star-icon" />
        );
      } else {
        // Empty star
        starIcons.push(<span key={i}>☆</span>);
      }
    }
  
    return starIcons;
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
          {reviews.length > 0 ? (
            <span className="trail-rating">{generateStars()}</span>
          ) : (
            <span className="no-reviews">No Reviews</span>
          )}
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