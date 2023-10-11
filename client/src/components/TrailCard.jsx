import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../App';
import { Link } from 'react-router-dom';
import RenderStars from "./RenderStars";


function TrailCard({ trail, reviews }) {
  const { user, setUser } = useContext(UserContext);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const checkLikedStatus = async () => {
      try {
        const response = await fetch(`/likes/show?trail_id=${trail.id}&user_id=${user.id}`);
        // console.log("fetching likes")
        if (response.ok) {
          const likedStatus = await response.json();
          // console.log(likedStatus.liked)
          setLiked(likedStatus);
          // console.log(liked)
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

return (
  <div className="TrailCard trail-card">
    <div className="image-container">
      <Link to={`/trail/${trail.id}`}>
        <img src={trail.image} alt={trail.name} className="trail-image" />
      </Link>
      <button
        onClick={handleLike}
        className={`heart-button ${liked ? "liked" : ""}`}>
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
  </div>
);
}

export default TrailCard;