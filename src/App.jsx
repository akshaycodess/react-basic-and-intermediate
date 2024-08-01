import { useRef } from "react"
import "./style.css"
import StateForm from "./StateForm"
import RefForm from "./RefForm"

function App() {
  return (
    <>
      <h1>Form validation project</h1>
      {/* <h2>via State</h2> */}
      <StateForm />
      {/* <h2>via Ref</h2>
      <RefForm /> */}
    </>
  )
}

export default App
