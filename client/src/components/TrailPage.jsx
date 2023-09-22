import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import RenderStars from "./RenderStars";
import ReviewItem from "./ReviewItem";
import TrailReviewForm from "./TrailReviewForm";

function TrailPage({ liked, setLiked, onSubmit}) {
  const { trailId } = useParams();
  const [trail, setTrail] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [showReviewForm, setShowReviewForm] = useState(false);
  

  useEffect(() => {
    // Fetch the trail data using the ID
    fetch(`/trails/${trailId}`)
      .then((response) => response.json())
      .then((trailData) =>  {
        console.log(trailData)
        setReviews(trailData.reviews); // Separate state update for reviews

        setTrail(trailData.trail); // Separate state update for trail
      })
      console.log(trail)
  }, [trailId]);

  const handleLike = () => {
    setLiked(!liked);
  };
 
  if (!trail) {
    return <div>Loading...</div>;
  }
  
  

  return (
    <div>
      {showReviewForm ? (        
        <TrailReviewForm trail={trail} setShowReviewForm={setShowReviewForm} onSubmit={onSubmit} setReviews={setReviews} />
      ) : (
        <div className="trail-page-container">
          <img src={trail.image} alt={trail.name} className="trail-page-image" />
          <div className="trail-page-content">
            <div className="trail-page-name">
              <span>
                {trail.name}
                <button
                  onClick={handleLike}
                  className={`trail-page-heart-button ${liked ? "liked" : ""}`}
                >
                  {liked ? "❤️" : "🤍"}
                </button>
              </span>
            </div>
            <div className="trail-page-info">
              <RenderStars className="trail-page-rating" reviews={reviews} trail={trail} />
              {trail.length}mi • {trail.elevation_gain}Elevation Gain
            </div>

            <p className="trail-page-body">{trail.body}</p>
          </div>

          <div className="trail-page-reviews">
            <h3>
              Reviews{" "}
              <button
                className="smallButton"
                onClick={() => setShowReviewForm(true)} // Show the review form when the button is clicked
              >
                Leave a Review
              </button>
            </h3>
            {reviews.length > 0 ? (
              <div className="review-list">
                {reviews.map((review, index) => (
                  <ReviewItem key={index} review={review} />
                ))}
              </div>
            ) : (
              <p>No Reviews</p>
            )}
          </div>
        </div>
      )}
    </div>
    
  );
}

export default TrailPage;