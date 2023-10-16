import { useNavigate } from "react-router-dom";
import LookoutLogo from '../images/LookoutLogo.png'

function EmptyReviews() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/");
  };

  return (
    <div className="empty-card-container">
      <img  className="lookoutImageForm" alt="lookoutLogo" src={LookoutLogo}></img>
      <strong className= "empty-card-title">Review Some Trails</strong>
      <button className="submit" onClick={handleExploreClick}>
        Explore Trails
      </button>
    </div>
  );
}

export default EmptyReviews;