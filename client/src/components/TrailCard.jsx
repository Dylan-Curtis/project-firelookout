import React, { useState, useEffect } from "react";

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

  return (
    <div className="TrailCard">
      <div className="image-container">
        <img src={trail.image} alt={trail.name} className="trail-image" />
        <button onClick={handleLike} className={`heart-button ${liked ? "liked" : ""}`}>
          {liked ? "❤️" : "🤍"}
        </button>
      </div>
      <div className="trail-details">
        <h3 className="trail-name">
          {trail.name} {averageRating ? `Average Rating: ${averageRating.toFixed(2)}` : "N/A"}
        </h3>
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