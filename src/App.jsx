import { Name } from "./Name"
import { NameClass } from "./NameClass"
import { TodoList } from "./TodoList"
import { TodoListClass } from "./TodoListClass"
import { TodoListItem } from "./TodoListItem"
import { TodoListItemClass } from "./TodoListItemClass"

function App() {
  return (
    <div>
      <TodoList />
      <Name />
      <TodoListClass />
      <NameClass />
      <h2>Props example via function</h2>
      <TodoListItem isComplete>
        TodoListItem1 checked
      </TodoListItem>
      <TodoListItem>
        TodoListItem2 unchecked
      </TodoListItem>
      <h2>Props example via class</h2>
      <TodoListItemClass>
        TodoListItemClass1 unchecked
      </TodoListItemClass>
      <TodoListItemClass isComplete> 
        TodoListItemClass2 checked
      </TodoListItemClass>
    </div>
  );
}

export default App
