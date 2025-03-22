// App.jsx (Виправлення назви пропса)
import React from 'react';
import Profile from '../Profile/Profile';
import userData from '../../userData.json';
import FriendList from '../FriendList/FriendList';
import friends from '../../friends.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from '../../transactions.json';

const App = () => {
  return (
    <div className="App">
      <h1>Домашнє завдання React HW-01</h1>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;

