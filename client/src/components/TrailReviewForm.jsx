import React, { useContext, useState } from "react";
import ReviewBackground from '../images/ReviewBackground.png';
import LookoutLogo from '../images/LookoutLogo.png';
import { UserContext } from "../App";
import { useNavigate } from 'react-router-dom';

function TrailReviewForm({ onSubmit, trail, setShowReviewForm }) {
  const [rating, setRating] = useState(0);
  const [body, setBody] = useState('');
  const [condition, setCondition] = useState('');
  const navigate = useNavigate();
  const backgroundStyle = {
    backgroundImage: `url(${ReviewBackground})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  };

  const user = useContext(UserContext);
  console.log(user)
  const reviewData = {
    rating: rating,
    body: body,
    user: user,
    condition: condition,
    trail: trail,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/newreview', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => {
            // Assuming onSubmit is a function you want to call with the updated user data
            onSubmit(user);
            // Navigate to a different route if needed
            navigate(`/trails/${trail.id}`);
          });
        } else {
          r.json().then((err) => {
            console.log(err.error);
            // Handle errors as needed
          });
        }
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
        <label>
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
        </label>
        <label>
          <input
            placeholder="Condition"
            className="input-container"
            name="name"
            type="text"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            required
          />
        </label>
        <label>
          <textarea
            className="input-container"
            placeholder="Leave Your Review Here"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="submit">
         post
        </button>
        <button onClick={() => setShowReviewForm(false)} className="submit">
         Go Back
        </button>
      </form>
    </div>
  );
}

export default TrailReviewForm;