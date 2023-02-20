// import { useState } from "react";
function TrailCard({trail}){
    // const [showForm, setShowForm] = useState(false);

    // const handleClick = () => {
    //     setShowForm(true);
    //   };

return(
    <div className="TrailCard">
        <img src={trail.image} alt={trail.name} className="trail-image" />
        <p className="trail-name">{trail.name}</p>
        <p className="hiking-des">Length:{trail.length} mi ~ </p>
        <h3> {trail.reviews.map((review, index) => (
        <div key={index}>
          <li className ="review">{review.body}</li>
          {/* <li  >{review.condition}</li>          */}
        </div>
      ))}</h3>

    </div>
)}

export default TrailCard