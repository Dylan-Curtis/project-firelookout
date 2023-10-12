import Bear from "../images/ProfilePictures/Bear.png";
import Deer from "../images/ProfilePictures/Deer.png";
import Hawk from "../images/ProfilePictures/Hawk.png";
import Goat from "../images/ProfilePictures/Goat.png";
import Marmot from "../images/ProfilePictures/Marmot.png";
import LookoutMountain from "../images/ProfilePictures/LookoutMountain.png";

const ProfileIcon = ({ iconIndex }) => {
  // Define an array of profile icons based on the imported image files.
  const profileIcons = [Deer, Bear, Hawk, Goat, LookoutMountain, Marmot];
console.log(iconIndex)
  // Ensure the iconIndex is within a valid range.
  const index = Math.max(0, Math.min(iconIndex - 1, profileIcons.length - 1));

  return (
    <img
      src={profileIcons[index]}
      alt={`Profile Icon ${index + 1}`}
      className="profile-pic-header"
    />
  );
};

export default ProfileIcon;