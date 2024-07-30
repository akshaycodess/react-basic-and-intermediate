import { useState } from "react"
import "./style.css"
import { TodoItem } from "./TodoItem"

function App() {
  const [newTodoName, setNewTodoName] = useState("")
  const [todos, setTodos] = useState([])

  // add new todo item
  function addNewTodo() {
    if (newTodoName === "") return

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { name: newTodoName, completed: false, id: crypto.randomUUID() },
      ]
    })
    setNewTodoName("")
  }
  // to set item completed (true/fasle)
  function toggleTodo(todoId, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === todoId) return { ...todo, completed }
        return todo
      })
    })
  }
  // to delete an item
  function deleteTodo(todoId) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== todoId)
    })
  }

  return (
    <>
      <h1>Todo List Project</h1>
      <ul id="list">
        {todos.map(todo => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          )
        })}
      </ul>

      <div id="new-todo-form">
        <label htmlFor="todo-input">
          New Todo &nbsp;
          <input
            type="text"
            id="todo-input"
            value={newTodoName}
            onChange={(e) => setNewTodoName(e.target.value)}
          />
        </label>
        <button onClick={addNewTodo}>Add Todo</button>
      </div>
    </>
  )
}

export default App
