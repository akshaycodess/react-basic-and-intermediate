import './user.css'
import user from "./user.json"
import { UserCard } from "./UserCard"
import { UserCardClass } from './UserCardClass'

function App() {
  return (
    <div>
      <h1>User Cards</h1>
      <h2>via function component</h2>
      <UserCard
        name={user.name}
        age={user.age}
        phoneNumber={user.phoneNumber}
        address={user.address}
      />
      &nbsp;
      <h2>via class component</h2>
      <UserCardClass
        name={user.name}
        age={user.age}
        phoneNumber={user.phoneNumber}
        address={user.address}
      />
    </div>
  );
}

export default App
