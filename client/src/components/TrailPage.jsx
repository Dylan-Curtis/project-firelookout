import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import RenderStars from "./RenderStars";
import ReviewItem from "./ReviewItem";
import TrailReviewForm from "./TrailReviewForm";
import { UserContext } from '../App';
import MapIcon from '../images/MapIcon.png';

function TrailPage({ onSubmit }) {
  const { user, setUser } = useContext(UserContext);
  const { trailId } = useParams();
  const [trail, setTrail] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [liked, setLiked] = useState(false);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const checkLikedStatus = async () => {
      try {
        const response = await fetch(`/likes/show?trail_id=${trail.id}&user_id=${user.id}`);
        if (response.ok) {
          const likedStatus = await response.json();
          setLiked(likedStatus);
          console.log(liked)
        } else {
          console.error('Failed to check liked status for trail');
        }
      } catch (error) {
        console.error('An error occurred while processing the request', error);
      }
    };

    checkLikedStatus();
  }, []);

  const handleLike = async () => { 
    try {
      const response = await fetch('/like-trail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ trail_id: trail.id, user_id: user.id, }),
      });

      if (response.ok) {
        setLiked(!liked);
      } else {
        console.error('Failed to like/unlike trail');
      }
    } catch (error) {
      console.error('An error occurred while processing the request', error);
    }
  };

  useEffect(() => {
    fetch(`/trails/${trailId}`)
      .then((response) => response.json())
      .then((trailData) =>  {
        setReviews(trailData.reviews);
        setTrail(trailData.trail);
      })
  }, [trailId]);

  if (!trail) {
    return <div>Loading...</div>;
  } 
  
  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <div>
      {showReviewForm ? (        
        <TrailReviewForm trail={trail} setShowReviewForm={setShowReviewForm} onSubmit={onSubmit} setReviews={setReviews} />
      ) : (
        <div className="trail-page-container">
          <div className="trail-page-image">        
          {showMap ? (
              <img src={trail.map} alt={trail.name}  className="trail-page-image" />
          ) : (
            <img src={trail.image} alt={trail.name} className="trail-page-image" />
          )}
          <button
            onClick={toggleMap}
            className='map-button'>
            <img src={MapIcon} alt="Map"/>
          </button> 
          </div>           
          <div className="trail-page-content">
            <div className="trail-page-name">
              {trail.name}
              <button
                onClick={handleLike}
                className={`trail-page-heart-button ${liked ? "liked" : ""}`}
              >
                {liked ? "❤️" : "🤍"}
              </button>
            </div>
            <div className="trail-page-info">
              <RenderStars className="trail-page-rating" reviews={reviews} trail={trail} />
              <div className="trail-page-tags">
              {trail.length}mi • {trail.elevation_gain}<div>Elevation Gain</div>
              </div>
            </div>

            <p className="trail-page-body">{trail.body}</p>
          </div>

          <div className="trail-page-reviews">
            <h3>
              Reviews{" "}
              <button
                className="smallButton"
                onClick={() => setShowReviewForm(true)}
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