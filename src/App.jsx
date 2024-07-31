import { useState } from "react"
import { useFetch } from "./useFetch"

// If the API does not work use these local URLs
// const URLS = {
//   USERS: "users.json",
//   POSTS: "posts.json",
//   COMMENTS: "comments.json",
// }

const URLS = {
  USERS: "https://jsonplaceholder.typicode.com/users",
  POSTS: "https://jsonplaceholder.typicode.com/posts",
  COMMENTS: "https://jsonplaceholder.typicode.com/comments",
}

// BONUS:
// const OPTIONS = {
//   method: "POST",
//   body: JSON.stringify({ name: "Akshay" }),
//   headers: {
//     "Content-type": "application/json",
//   },
// }

function App() {
  const [url, setUrl] = useState(URLS.USERS)

  const { data, isLoading, isError } = useFetch(url)

  // BONUS:
  // const { data, isLoading, isError } = useFetch(url, OPTIONS)

  return (
    <>
      <div>
        <h1>useFetch Project</h1>
        <label>
          <input
            type="radio"
            checked={url === URLS.USERS}
            onChange={() => setUrl(URLS.USERS)}
          />
          Users
        </label>
        <label>
          <input
            type="radio"
            checked={url === URLS.POSTS}
            onChange={() => setUrl(URLS.POSTS)}
          />
          Posts
        </label>
        <label>
          <input
            type="radio"
            checked={url === URLS.COMMENTS}
            onChange={() => setUrl(URLS.COMMENTS)}
          />
          Comments
        </label>
      </div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : isError ? (
        <h2>Error</h2>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </>
  )
}

export default App
