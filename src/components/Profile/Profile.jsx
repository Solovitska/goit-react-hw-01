import css from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  const altUserAv = "User avatar";
  return (
    <div className={css.profile}>
      <div className={css.avatar}>
        <img className={css.img} src={image} alt={altUserAv} width={50} />
        <p className={css.textName}>{name}</p>
        <p className={css.textTag}>@{tag}</p>
        <p className={css.textLocation}>{location}</p>
      </div>
      <ul className={css.statsList}>
        <li className={css.statItem}>
          <span className={css.itemSpan}>Followers</span>{" "}
          <span className={css.itemNumbers}>{followers}</span>
        </li>

        <li className={css.statItem}>
          <span className={css.itemSpan}>Views</span>{" "}
          <span className={css.itemNumbers}>{views}</span>
        </li>

        <li className={css.statItem}>
          <span className={css.itemSpan}>Likes</span>
          <span className={css.itemNumbers}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;