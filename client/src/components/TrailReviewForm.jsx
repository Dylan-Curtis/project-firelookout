import { useState } from "react";
import ReviewBackground from '../images/ReviewBackground.png'

function TrailReviewForm({ onSubmit }) {
    const [rating, setRating] = useState('');
    const [body, setBody] = useState('');
    const [condition, setCondition] = useState('');

    const backgroundStyle = {
      backgroundImage: `url(${ReviewBackground})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      minHeight: '100vh', // Ensure the container takes up the entire viewport height
      display: 'flex',
      alignItems: 'center', // Vertically center the form
      justifyContent: 'center', // Horizontally center the form
      padding: '20px', // Add some padding around the form
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit({ rating, body, condition });
    }
  
    return (
      <div className="container" style={backgroundStyle}>  
      <form onSubmit={handleSubmit}>
        <label>
          Rating:
          <input type="number" min="1" max="5" value={rating} onChange={e => setRating(e.target.value)} required />
        </label>
        <label>
          Condition:
          <input type="text" value={condition} onChange={e => setCondition(e.target.value)} required />
        </label>
        <label>
          Body:
          <textarea value={body} onChange={e => setBody(e.target.value)} required />
        </label>
        <button type="submit">Submit Review</button>
      </form>
      </div>
    )
};
export default TrailReviewForm 