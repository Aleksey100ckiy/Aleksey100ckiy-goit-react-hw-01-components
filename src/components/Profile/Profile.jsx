import css from 'components/Profile/Profile.module.css';


export const Profile = ({ username, tag, location, avatar, stats }) => {
    return <div className={css.profile}>
  <div className={css.description}>
    <img
      src={user.avatar}
      alt="User avatar"
      className={css.avatar}
    />
    <p className={css.name}>{user.username}</p>
    <p className={css.tag}>{user.tag}</p>
    <p className={css.location}>{user.location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{user.stats.followers}</span>
    </li>
    <li>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{user.stats.views}</span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{user.stats.likes}</span>
    </li>
  </ul>
</div>
}