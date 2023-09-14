import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function TrailPage({liked, setLiked}) {
  const { trailId } = useParams();
  const [trail, setTrail] = useState(null);

  useEffect(() => {
    // Fetch the trail data using the ID    
    fetch(`/trails/${trailId}`)
      .then((response) => response.json())
      .then((trail) => setTrail(trail));
    
  }, [trailId]);
  
  const handleLike = () => {
    setLiked(!liked);
  };
  if (!trail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="TrailPage">
      <img src={trail.trail.image} alt={trail.name} className="trail-page-image" />
      <div className="trail-page-name">
          {trail.trail.name}
          <button onClick={handleLike} className={`heart-button ${liked ? "liked" : ""}`}>
          {liked ? "❤️" : "🤍"}
        </button>
        </div>
          
      {/* Render other trail details here */}
    </div>
  );
}

export default TrailPage;