import React, { useState } from "react";
import ReviewBackground from '../images/ReviewBackground.png'
import LookoutLogo from '../images/LookoutLogo.png'

function TrailReviewForm({ onSubmit, trail }) {
  const [rating, setRating] = useState(0); // Initialize rating to 0
  const [body, setBody] = useState('');
  const [condition, setCondition] = useState('');

  const backgroundStyle = {
    backgroundImage: `url(${ReviewBackground})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ rating, body, condition });
  }

  const handleStarClick = (clickedRating) => {
    // Update the rating when a star is clicked
    setRating(clickedRating);
  }

  return (
    <div className="container" style={backgroundStyle}>
      <form onSubmit={handleSubmit} className="form">
        <img className="lookoutImageForm" alt="lookoutLogo" src={LookoutLogo}></img>
        <div className="title">{trail.name}</div>
        <label>
          Rating:
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className="star"
                onClick={() => handleStarClick(star)}
              >
                {star <= rating ? "★" : "☆"} {/* Display ★ for filled and ☆ for empty */}
              </span>
            ))}
          </div>
          {rating > 0 ? `${rating}/5` : ''} {/* Display rating only if it's greater than 0 */}
        </label>
        <label>
          Condition:
          <input
            placeholder="User Name"
            className="input-container"
            name="name"
            type="text" value={condition} onChange={e => setCondition(e.target.value)} required />
        </label>
        <label>
          Body:
          <textarea value={body} onChange={e => setBody(e.target.value)} required />
        </label>
        <button placeholder="User Name"
          className="input-container"
          type="text"
          name="name">Submit Review</button>
      </form>
    </div>
  )
};
export default TrailReviewForm


