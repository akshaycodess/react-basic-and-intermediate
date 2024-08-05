import { createContext, useEffect, useReducer } from "react"
import "./style.css"
import { TodoForm } from "./TodoForm"
import { TodoList } from "./TodoList"

const LOCAL_STORAGE_KEY = "todos"
const ACTIONS = {
  ADD: "ADD",
  UPDATE: "UPDATE",
  TOGGLE: "TOGGLE",
  DELETE: "DELETE",
}

function reducer(todos, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD:
      return [
        ...todos,
        { name: payload.name, completed: false, id: crypto.randomUUID() },
      ]
    case ACTIONS.TOGGLE:
      return todos.map(todo => {
        if (todo.id === payload.id) {
          return { ...todo, completed: payload.completed }
        }

        return todo
      })
    case ACTIONS.DELETE:
      return todos.filter(todo => todo.id !== payload.id)
    case ACTIONS.UPDATE:
      return todos.map(todo => {
        if (todo.id === payload.id) {
          return { ...todo, name: payload.name }
        }

        return todo
      })
    default:
      throw new Error(`No action found for ${type}.`)
  }
}

export const TodoContext = createContext()

function App() {
  const [todos, dispatch] = useReducer(reducer, [], (initialValue) => {
    const value = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (value == null) return initialValue
    return JSON.parse(value)
  })

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  // add new todo item
  function addNewTodo(name) {
    dispatch({ type: ACTIONS.ADD, payload: { name } })
  }
  // to set item completed (true/fasle)
  function toggleTodo(todoId, completed) {
    dispatch({ type: ACTIONS.TOGGLE, payload: { id: todoId, completed } })
  }
  // to delete an item
  function deleteTodo(todoId) {
    dispatch({ type: ACTIONS.DELETE, payload: { id: todoId } })
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        addNewTodo,
        toggleTodo,
        deleteTodo,
      }}
    >
      <h1>Advanced Todo List Project</h1>
      <TodoList />
      <TodoForm />
    </TodoContext.Provider>
  )
}

export default App

// Instructions
// 1. The state for our todos should be stored in local storage so when we come back to the page at a later time all our data is still there
// 2. Convert all the state in the application to use `useReducer` and `Context` to pass the state between components