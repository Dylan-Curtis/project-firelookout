import React, { useState } from "react";

function TrailCard({ trail }) {
  const [liked, setLiked] = useState(false);

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
      <span className="trail-name">{trail.name}
       - Length: {trail.length} mi ~ </span>
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