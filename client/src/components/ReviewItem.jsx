import React from "react";
import halfStar from "../images/HalfStar.png"; // Import your half star image here

function ReviewItem({ review }) {
  // Placeholder values for averageRating and halfStar
  const averageRating = 4; // Replace with the actual average rating
  const maxStars = 5;
  const roundedRating = Math.round(averageRating * 2) / 2; // Round to nearest 0.5
  const formattedDate = new Date(review.created_at).toLocaleDateString();
  const generateStars = () => {
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
    <div className="review-item">
      <p>Created on: {formattedDate}</p>
      <span className="trail-rating">{generateStars()}</span>
      <p>{review.body}</p>
    </div>
  );
}

export default ReviewItem;