import { Profile } from "./Profile/Profile";
import user from './data/user.json';

import { Statistics } from "./Statistics/Statistics";
import data from './data/data.json';

import { Friends } from "./friends/Friends";
import friends from "./data/friends.json";

import { TransactionHistory } from "./transactions/Transactions";
import transactions from "./data/transactions.json";

export const App = () => {
  return <div>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}/>
    <Statistics title="Upload stats" stats={data} />
    <Friends friendsList={friends} class="friends" />
    <TransactionHistory items={transactions} />
    </div>;
};
