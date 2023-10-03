import React, { useContext, useState } from "react";
import ReviewBackground from '../images/ReviewBackground.png';
import LookoutLogo from '../images/LookoutLogo.png';
import { UserContext } from "../App";

function TrailReviewForm({ setReviews, trail, setShowReviewForm }) {
  const [rating, setRating] = useState(0);
  const [body, setBody] = useState('');
  const [condition, setCondition] = useState('');
  const [date, setDate] = useState('')
  const { user } = useContext(UserContext);

  const backgroundStyle = {
    backgroundImage: `url(${ReviewBackground})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '67vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  };

  const reviewData = {
    rating: rating,
    body: body,
    date: date,
    user_id: user.id,
    condition: condition,
    trail_id: trail.id,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    fetch('/new-review', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
    .then((response) => response.json())
    .then((newReview) => {
      setReviews((prevReviews) => [...prevReviews, newReview]);
      setShowReviewForm(false);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  };

  const handleStarClick = (clickedRating) => {
    setRating(clickedRating);
  };

  return (
    <div className="container" style={backgroundStyle}>
      <form onSubmit={handleSubmit} className="form">
        <img className="lookoutImageForm" alt="lookoutLogo" src={LookoutLogo}></img>
        <div className="title">{trail.name}</div>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className="trail-rating-big"
                onClick={() => handleStarClick(star)}
              >
                {star <= rating ? "★" : "☆"}
              </span>
            ))}
          </div>
        <label className="revew-form-lables">Date</label>
          <input
            className="input-container"
            name="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        <label className="revew-form-lables">Condition</label>
          <select
            className="condition-dropdown"
            name="condition"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            required
          >
            <option value="">Select condition</option>
            <option value="Good">Good</option>
            <option value="Bad">Bad</option>
            <option value="Normal">Normal</option>
            <option value="Snowy">Snowy</option>
            <option value="Washed Out">Washed Out</option>
          </select>
          <label className="revew-form-lables">Review</label>
          <textarea
            className="input-container"
            placeholder="Leave Your Review Here"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
          <span className="button-container">
        <button type="submit" className="submit">
         Post
        </button>
        <button onClick={() => setShowReviewForm(false)} className="submit">
         Go Back
        </button>
        </span>
      </form>
    </div>
  );
}

export default TrailReviewForm;