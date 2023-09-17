import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import RenderStars from "./RenderStars";
import ReviewItem from "./ReviewItem";
import TrailReviewForm from "./TrailReviewForm";

function TrailPage({ liked, setLiked, reviews }) {
  const { trailId } = useParams();
  const [trail, setTrail] = useState(null);
  const [showReviewForm, setShowReviewForm] = useState(false);

  useEffect(() => {
    // Fetch the trail data using the ID
    fetch(`/trails/${trailId}`)
      .then((response) => response.json())
      .then((trail) => setTrail(trail));
    console.log(trail);
  }, [trailId]);

  const handleLike = () => {
    setLiked(!liked);
  };

  if (!trail) {
    return <div>Loading...</div>;
  }

  const handleReviewSubmit = (newReview) => {
    // You can handle the review submission logic here, e.g., send it to a server.
    // Once the review is submitted, you can update the reviews state and hide the form.
    // For now, let's just print the submitted review to the console.
    console.log("Submitted Review:", newReview);
    // Assuming you have a function to update the list of reviews, update it here.

    // Hide the review form after submission
    setShowReviewForm(false);
  };

  return (
    <div>
      {showReviewForm ? (
        // Display the review form if showReviewForm is true
        <TrailReviewForm onReviewSubmit={handleReviewSubmit} />
      ) : (
        <div className="trail-page-container">
          <img src={trail.trail.image} alt={trail.trail.name} className="trail-page-image" />

          <div className="trail-page-content">
            <div className="trail-page-name">
              <span>
                {trail.trail.name}
                <button
                  onClick={handleLike}
                  className={`trail-page-heart-button ${liked ? "liked" : ""}`}
                >
                  {liked ? "❤️" : "🤍"}
                </button>
              </span>
            </div>
            <div className="trail-page-info">
              <RenderStars className="trail-page-rating" reviews={trail.reviews} trail={trail} />
              {trail.trail.length}mi • {trail.trail.elevation_gain}Elevation Gain
            </div>

            <p className="trail-page-body">{trail.trail.body}</p>
          </div>

          <div className="trail-page-reviews">
            <h3>
              Reviews{" "}
              <button
                className="reviewButton"
                onClick={() => setShowReviewForm(true)} // Show the review form when the button is clicked
              >
                Leave a Review
              </button>
            </h3>
            {trail.reviews.length > 0 ? (
              <div className="review-list">
                {trail.reviews.map((review, index) => (
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