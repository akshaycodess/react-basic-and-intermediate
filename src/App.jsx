import { useLocalStorage } from "./useLocalStorage"

function App() {
  const [firstName, setFirstName] = useLocalStorage("FIRST_NAME", "")

  // Bonus:
  const [lastName, setLastName] = useLocalStorage("LAST_NAME", () => {
    return "Default"
  })
  const [hobbies, setHobbies] = useLocalStorage("HOBBIES", [
    "Programming",
    "Weight Lifting",
  ])

  return (
    <>
      <h1>useLocalStorage Project</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: "1rem",
        }}
      >
        <label>First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: "1rem",
        }}
      >
        <label>Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>{hobbies.join(", ")}</div>
      <button
        onClick={() =>
          setHobbies((currentHobbies) => [...currentHobbies, "New hobby"])
        }
      >
        Add Hobby
      </button>
    </>
  );
}

export default App
