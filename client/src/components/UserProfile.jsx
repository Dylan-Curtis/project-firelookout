import React, { useState, useEffect, useContext } from "react";
import EditProfileForm from "./EditProfileForm";
import { UserContext } from "../App";

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

    // Fetch User Reviews
    async function fetchUserReviews() {
      try {
        const response = await fetch('reviews#index_by_user');
        if (response.ok) {
          const data = await response.json();
          // Assuming 'data' is an array of user reviews, you can slice it to get the first 4.
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

    // Call the fetch functions
    fetchLikes();
    fetchUserReviews();
  }, []); // Empty dependency array to run the effect only once when the component mounts

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
      <div>
        <h3>Liked Trails</h3>
        <ul>
          {likedTrails.map((trail) => (
            <li key={trail.id}>{trail.name}</li>
          ))}
        </ul>
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