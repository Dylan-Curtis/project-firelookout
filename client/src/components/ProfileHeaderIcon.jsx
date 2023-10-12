import Bear from "../images/ProfilePictures/Bear.png";
import Deer from "../images/ProfilePictures/Deer.png";
import Hawk from "../images/ProfilePictures/Hawk.png";
import Goat from "../images/ProfilePictures/Goat.png";
import Marmot from "../images/ProfilePictures/Marmot.png";
import LookoutMountain from "../images/ProfilePictures/LookoutMountain.png";

const ProfileIcon = ({ iconIndex }) => {
  const profileIcons = [Deer, Bear, Hawk, Goat, LookoutMountain, Marmot];
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