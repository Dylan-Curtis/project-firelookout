import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RenderStars from "./RenderStars";

function TrailPage({liked, setLiked, reviews}) {
  const { trailId } = useParams();
  const [trail, setTrail] = useState(null);

  useEffect(() => {
    // Fetch the trail data using the ID    
    fetch(`/trails/${trailId}`)
      .then((response) => response.json())
      .then((trail) => setTrail(trail));
      console.log(trail)
  }, [trailId]);

  const handleLike = () => {
    setLiked(!liked);
  };
  if (!trail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="TrailPage">
      <img src={trail.trail.image} alt={trail.trail.name} className="trail-page-image" />
      <div className="trail-page-name">
          {trail.trail.name}
          <button onClick={handleLike} className={`trail-page-heart-button ${liked ? "liked" : ""}`}>
          {liked ? "❤️" : "🤍"}
          <span>
          <RenderStars className="trail-page-rating" reviews={trail.reviews} trail={trail}/>
          {trail.trail.length}mi • {trail.trail.elevation_gain}Elevation Gain
          </span>
        </button>
        </div>
          
      {/* Render other trail details here */}
    </div>
  );
}

export default TrailPage;