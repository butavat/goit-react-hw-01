import React from "react";
import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profile}>
      {/* Заголовок профілю */}
      <div className={styles.profileHeader}>
        <img src={image} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      {/* Статистика */}
      <div className={styles.stats}>
        <div className={styles.statItem}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </div>
        <div className={styles.statItem}>
          <span>Views</span>
          <span>{stats.views}</span>
        </div>
        <div className={styles.statItem}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;