import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css'; // Підключаємо CSS-модуль

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.friendListItem}>
      <span className={`${styles.status} ${isOnline ? styles.online : styles.offline}`}></span>
      <img 
        className={styles.avatar} 
        src={avatar || "https://via.placeholder.com/48"} // Додаємо резервну аватарку
        alt={name} 
        width="48" 
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string, // Може бути undefined, тому не ставимо isRequired
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;