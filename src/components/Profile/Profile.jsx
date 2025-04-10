import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css'; // Підключаємо стилі

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          className={styles.avatar}
          src={image || "https://cdn-icons-png.flaticon.com/512/1077/1077012.png"} // Додаємо резервне зображення
          alt="User avatar"
        />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string, // Робимо поле необов'язковим
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;