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
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className="trail-rating-big" 
                onClick={() => handleStarClick(star)}
              >
                {star <= rating ? "★" : "☆"} {/* Display ★ for filled and ☆ for empty */}
              </span>
            ))}
          </div>          
        </label>
        <label>
          <input
            placeholder="Condition"
            className="input-container"
            name="name"
            type="text" value={condition} onChange={e => setCondition(e.target.value)} required />
        </label>
        <label>         
          <textarea className="input-container" placeholder="Leave Your Review Here" value={body} onChange={e => setBody(e.target.value)} required />
        </label>

        <button 
           type="submit" 
           className="submit"          
          name="name">Submit Review</button>
      </form>
    </div>
  )
};
export default TrailReviewForm


