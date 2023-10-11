import React, { useState, useEffect, useContext } from "react";
import EditProfileForm from "./EditProfileForm";
import { UserContext } from "../App";
import TrailCard from './TrailCard';
import ReviewedTrailCard from './ReviewedTrailCard';
import UserCard from './UserCard'; // Import UserCard component

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

  const reviewedTrailCards =userReviews && userReviews.map((userReview) => (
    <ReviewedTrailCard key={userReview.trail.id} trail={userReview.trail} review={userReview} />
  ));

  if (!user) {
    return <div>Loading...</div>;
  } 
  
  console.log(user)

  return (
    <div>
      {showEditProfileForm ? (
        <div>
          <EditProfileForm handleEditToggle={handleEditToggle} />
        </div>
      ) : (
        // Use the UserCard component and pass the user prop
        <UserCard handleEditToggle={handleEditToggle}/>
      )}
      <h3 className="user-hikes">{user.name}'s Favorite Lookout Hikes</h3>
      <div className="user-liked-trails">{trailCards}</div>
      <div>
        <h3 className="user-hikes">{user.name}'s Past Lookout Hikes</h3>
        <div className="user-liked-trails">{reviewedTrailCards}</div>
      </div>
    </div>
  );
}

export default UserProfile;