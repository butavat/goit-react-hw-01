// FriendListItem.jsx (Виправлення синтаксичної помилки)
import React from 'react';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
      <p className={`status ${isOnline ? 'online' : 'offline'}`}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;