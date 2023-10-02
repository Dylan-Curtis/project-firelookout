import halfStar from "../images/HalfStar.png"; 

function ReviewItem({ review }) {

  function generateStars() {
    const maxStars = 5;
    const roundedRating = Math.round(review.rating * 2) / 2; 
    const starIcons = [];
    for (let i = 1; i <= maxStars; i++) {
      if (i <= roundedRating) {
        starIcons.push(<span key={i}>★</span>);
      } else if (i === Math.ceil(roundedRating) && roundedRating % 1 !== 0) {
        starIcons.push(
          <img key={i} src={halfStar} alt="Half Star" className="half-star-icon" />
        );
      } else {
        starIcons.push(<span key={i}>☆</span>);
      }
    }
    
    return starIcons;
  }
console.log(review)
    return (
      <div className="review-item">
      <div className='review-name'>{review.name}</div>
      <div className="review-header">
        <div className='review-date'>{review.date}</div>
        <div className="trail-rating">{generateStars()}</div>
      </div>
      <p>{review.body}</p>
    </div>
    );
  }

export default ReviewItem;