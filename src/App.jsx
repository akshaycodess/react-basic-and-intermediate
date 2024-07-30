import { useEffect, useState } from "react"
import { User } from "./User"
import { ConditionalRendering } from "./ConditionalRendering"
import { RenderingLists } from "./RenderingLists"

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

  const CUSTOM_HTML = `<div>Custom RAW HTML (just to demo not prefered)</div>`
  return (
    <>
      <h1>Advance Components</h1>
      <ConditionalRendering favNo={8} />
      <RenderingLists />
      <h3>Spread Props</h3>
      {loading ? (
        <p>loading currently...</p>
      ) : (
        <ul>
          {users.map((user) => {
            return <User key={user.id} {...user} />
          })}
        </ul>
      )}
      <h3>Render Raw HTML</h3>
      <div dangerouslySetInnerHTML={{ __html: CUSTOM_HTML }}></div>
    </>
  )
}

export default App
