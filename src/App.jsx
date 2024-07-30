import { useEffect, useState } from "react"
import { User } from "./User"

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const controller = new AbortController()
    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    })
      .then((data) => {
        return data.json()
      })
      .then(setUsers)
      .finally(() => {
        setLoading(false)
      })
    
    return () => {
      controller.abort()
    }
  }, [])

  return (
    <>
      <h1>User list project</h1>
      {loading ? (
        <p>loading currently...</p>
      ) : (
        <ul>
          {users.map((user) => {
            return <User key={user.id} name={user.name} />
          })}
        </ul>
      )}
    </>
  )
}

export default App
