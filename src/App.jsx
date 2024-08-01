import { useState, useRef, useEffect } from "react"

function App() {
  // const [name, setName] = useState("")
  const nameRef = useRef()
  // key difference between these, ref works on final input and state works on every re-render.
  // which causes performance issue, if i don't need input on every render.
  useEffect(() => {
    console.log('To check render')
  })

  function handleSubmit(e) {
    e.preventDefault()
    const name = nameRef.current.value
    if (name === "") return alert(`Name cannot be empty`)
    alert(`Name: ${name}`)
  }
  return (
    <>
      <h1>Forms</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:&nbsp;</label>
        {/* controlled input */}
        {/* <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} /> */}
        {/* uncontrolled input */}
        <input type="text" id="name" ref={nameRef} />
        &nbsp;
        <button>Alert Name</button>
      </form>
    </>
  )
}

export default App
