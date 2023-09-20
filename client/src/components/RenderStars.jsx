import React, { useState, useEffect } from "react";
import halfStar from "../images/HalfStar.png"; 

function RenderStars({ reviews }) {
  const [averageRating, setAverageRating] = useState(null);

  useEffect(() => {
    if (reviews && reviews.length > 0) {
      const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
      const avg = totalRating / reviews.length;
      setAverageRating(avg);
    }
  }, [reviews]);
  
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
    <div>     
        <span className="trail-rating">{generateStars()}</span>     
    </div>
  );
}

export default RenderStars;