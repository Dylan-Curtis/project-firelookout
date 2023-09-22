import halfStar from "../images/HalfStar.png"; 

function ReviewItem({ review }) {
  const formattedDate = new Date(review.created_at).toLocaleDateString();

  // Create a StarRating component to display stars
  function generateStars() {
    const maxStars = 5;
    const roundedRating = Math.round(review.rating * 2) / 2; // Round to nearest 0.5
    const starIcons = [];
    console.log(review)
    for (let i = 1; i <= maxStars; i++) {
      if (i <= roundedRating) {
        // Full star
        starIcons.push(<span key={i}>★</span>);
      } else if (i === Math.ceil(roundedRating) && roundedRating % 1 !== 0) {
        // Half star using custom PNG image
        starIcons.push(
          <img key={i} src={halfStar} alt="Half Star" className="half-star-icon" />
        );
      } else {
        // Empty star
        starIcons.push(<span key={i}>☆</span>);
      }
    }
    
    return starIcons;
  }

  return (
<div className="review-item">
    <p>{review.name}</p>
      <p>{formattedDate}</p>
      <span className="trail-rating">{generateStars()}</span>
      <p>{review.body}</p>
    </div>
  );
}

export default ReviewItem;