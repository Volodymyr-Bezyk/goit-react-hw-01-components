import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import userData from 'database/user.json';
import stats from 'database/data.json';
import friends from 'database/friends.json';
import transactions from 'database/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      ></Profile>

      {/* <Statistics title="User stats" stats={stats}></Statistics>
      <Statistics stats={stats}></Statistics> */}

      {/* <FriendList friends={friends}></FriendList> */}

      {/* <TransactionHistory items={transactions}></TransactionHistory> */}
    </div>
  );
};
