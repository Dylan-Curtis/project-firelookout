import React from "react";

function ReviewItem({ review }) {
  return (
    <div className="review-item">
      <p>Rating: {review.rating}</p>
      <p>{review.body}</p>
    </div>
  );
}

export default ReviewItem;