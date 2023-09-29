import React, { useState, useEffect, useContext } from "react";
import EditProfileForm from "./EditProfileForm";
import { UserContext } from "../App";
import TrailCard from './TrailCard';

function UserProfile() {
  const [showEditProfileForm, setShowEditProfileForm] = useState(false);
  const [likedTrails, setLikedTrails] = useState([]);
  const [userReviews, setUserReviews] = useState([]);
  const { user, setUser } = useContext(UserContext);

  const handleEditToggle = () => {
    setShowEditProfileForm(!showEditProfileForm);
  };

  useEffect(() => {
    // Fetch Liked Trails
    async function fetchLikes() {
      try {
        const response = await fetch(`/likes/${user.id}/liked_trails`);
        if (response.ok) {
          const data = await response.json();
          // Assuming 'data' is an array of liked trails, you can slice it to get the first 4.
          const firstFourLikedTrails = data.slice(0, 4);
          console.log(data)
          setLikedTrails(firstFourLikedTrails);
        } else {
          console.error('Failed to fetch likes');
        }
      } catch (error) {
        console.error('An error occurred while fetching likes', error);
      }
    }

    async function fetchUserReviews() {
      try {
        const response = await fetch(`/reviews/${user.id}`);
        if (response.ok) {
          const data = await response.json();
          const firstFourUserReviews = data.slice(0, 4);
          setUserReviews(firstFourUserReviews);
          console.log(data)
        } else {
          console.error('Failed to fetch user reviews');
        }
      } catch (error) {
        console.error('An error occurred while fetching user reviews', error);
      }
    }

    fetchLikes();
    fetchUserReviews();
  }, []); 

  const trailCards = likedTrails && likedTrails.map((trail) => (
    <TrailCard key={trail.id} trail={trail} reviews={trail.reviews} />
  ));

  return (
    <div>
      {showEditProfileForm ? (
        <div>
          <EditProfileForm handleEditToggle={handleEditToggle} />
        </div>
      ) : (
        <div className="user-container">
          <div className="title-container">
            <h3 className="title">{user.name}</h3>
            <button onClick={handleEditToggle} className="smallButton">
              Edit Account
            </button>
          </div>
          <p id="user-profile">{user.blurb}</p>
          <p>Edit your profile to add an about me section</p>
        </div>
      )}
      <h3 className="user-hikes">{user.name}'s Favorite Lookout Hikes</h3>   
      <div className='user-liked-trails'>            
        {trailCards}        
      </div>
      <div>
        <h3>User Reviews</h3>
        <ul>
          {userReviews.map((review) => (
            <li key={review.id}>{review.body}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserProfile;