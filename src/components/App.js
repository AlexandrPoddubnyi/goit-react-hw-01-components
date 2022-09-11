import { Profile } from '../components/Profile/Profile';
import users from '../components/Profile/user.json';
import { Statistics } from '../components/Statistics/Statistics'
import statistics from '../components/Statistics/data.json';
import {FriendList} from '../components/FriendList/FriendList'
import friends from '../components/FriendList/friends.json';
import { TransactionHistory } from '../components/Transactions/Transactions';
import transactions from '../components/Transactions/transactions.json';


export const App = () => {
  return (
    <div>
      <Profile user={users} />
      <Statistics title="Upload stats" stats={statistics} />
      <FriendList friends={friends} /> 
      <TransactionHistory items={transactions } />
    </div>
  );
};
