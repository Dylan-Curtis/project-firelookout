import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../App';
import { Link } from 'react-router-dom';
import RenderStars from "./RenderStars";

function ReviewedTrailCard({ trail, review }) {
  console.log(review)  
  return (
    <div className="TrailCard">
      <div className="image-container">
        <Link to={`/trail/${trail.id}`}>
          <img src={trail.image} alt={trail.name} className="trail-image" />
        </Link>        
      </div>
      <div className="trail-details">
        <span>
          <h3 className="trail-name">{trail.name}</h3>
          <div className="trail-rating-card">
            <RenderStars reviews={ [review] } />
          </div>
        </span>
        <div>
          {review.body}       
        </div>
      </div>
    </div>
  );
}

export default  ReviewedTrailCard;