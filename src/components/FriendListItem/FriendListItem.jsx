import React from 'react';
import PropTypes from 'prop-types';
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.friendListItem}>
      <span
        className={`${styles.status} ${isOnline ? styles.online : styles.offline}`}
      ></span>
      <img src={avatar} alt="Avatar" width="48" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;