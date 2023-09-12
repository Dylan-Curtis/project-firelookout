import React, { useState, useEffect } from "react";
import halfStar from "../images/HalfStar.png"; // Import the PNG for the half star

function TrailCard({ trail, reviews }) {
  const [liked, setLiked] = useState(false);
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
        <img src={trail.image} alt={trail.name} className="trail-image" />
        <button onClick={handleLike} className={`heart-button ${liked ? "liked" : ""}`}>
          {liked ? "❤️" : "🤍"}
        </button>
      </div>
      <div className="trail-details">
  <span>
    <h3 className="trail-name">{trail.name}</h3>
    {reviews.length > 0 ? (
      <span className="trail-rating">{generateStars()}</span>
    ) : (
      <span className="no-reviews">No Reviews</span>
    )}
  </span>
  <span className="trail-length"> {trail.length} mi</span>
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