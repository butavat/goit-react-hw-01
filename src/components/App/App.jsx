import React from 'react';
import Profile from '../Profile/Profile'; // Імпортуємо компонент Profile
import userData from '../../userData.json'; // Імпортуємо дані про користувача
import FriendList from '../FriendList/FriendList'; // Імпортуємо компонент FriendList
import friends from '../../friends.json'; // Імпортуємо дані про друзів
import TransactionHistory from '../TransactionHistory/TransactionHistory'; // Імпортуємо компонент TransactionHistory
import transactions from '../../transactions.json'; // Імпортуємо дані про транзакції

const App = () => {
  return (
    <div className="App">
      <h1>Домашнє завдання React HW-01</h1>
      
      {/* Компонент Profile */}
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      
      {/* Компонент FriendList */}
      <FriendList friends={friends} />
      
      {/* Компонент TransactionHistory */}
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;

