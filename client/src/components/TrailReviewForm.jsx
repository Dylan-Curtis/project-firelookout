import { useState } from "react";
function TrailReviewForm({ onSubmit }) {
    const [rating, setRating] = useState('');
    const [body, setBody] = useState('');
    const [condition, setCondition] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit({ rating, body, condition });
    }
  
    return (
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
    )
};
export default TrailReviewForm 