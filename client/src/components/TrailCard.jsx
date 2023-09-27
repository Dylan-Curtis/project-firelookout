import { useContext, useState } from 'react';
import { UserContext } from '../App';
import { Link } from 'react-router-dom';
import RenderStars from "./RenderStars";

function TrailCard({ trail, reviews }) {
  const { user, setUser } = useContext(UserContext);
  const [liked, setLiked] = useState(false);

  const handleLike = async () => { // Make sure to mark the function as async
    try {
      // Send a POST request to your backend to like/unlike the trail
      const response = await fetch('/like-trail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ trail_id: trail.id, user_id: user.id, }),
      });

      if (response.ok) {
        // Update the liked state in your React context
        setLiked(!liked);
      } else {
        console.error('Failed to like/unlike trail');
      }
    } catch (error) {
      console.error('An error occurred while processing the request', error);
    }
  };

  return (
    <div className="TrailCard">
      <div className="image-container">
        <Link to={`/trail/${trail.id}`}>
          <img src={trail.image} alt={trail.name} className="trail-image" />
        </Link>
        <button
          onClick={handleLike}
          className={`heart-button ${liked ? "liked" : ""}`}          
        >
          {liked ? "❤️" : "🤍"}
        </button>
      </div>
      <div className="trail-details">
        <span>
          <h3 className="trail-name">{trail.name}</h3>
          <div className="trail-rating-card">
            <RenderStars reviews={trail.reviews} trail={trail} />
          </div>
        </span>
        <div className="trail-length">
          {trail.length} mi
          <span className="review-count">
            {reviews.length} {reviews.length === 1 ? "Review" : "Reviews"}
          </span>
        </div>
      </div>
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