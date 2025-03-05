import UserBio from "../user/UserBio";
import UserFavourites from "../user/UserFavourites";
import UserReviews from "../user/UserReviews";

function UserProfile() {
  return (
    <>
      <UserBio />
      <UserFavourites />
      <UserReviews />
    </>
  );
}
export default UserProfile;
