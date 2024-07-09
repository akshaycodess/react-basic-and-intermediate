import { Name } from "./Name"
import { NameClass } from "./NameClass";
import { TodoList } from "./TodoList"
import { TodoListClass } from "./TodoListClass";

function App() {
  return (
    <div>
      <TodoList />
      <Name />
      <TodoListClass />
      <NameClass />
    </div>
  );
}

export default App
