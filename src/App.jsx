import { useState } from "react"
import { Child } from "./Child"
import { ChildClass } from "./ChildClass";
import { FetchData } from "./FetchData";

export default function App() {
  const [show, setShow] = useState(true)
  const childComponent = show ? <Child /> : null
  const childClassComponent = show ? <ChildClass /> : null

  return (
    <div style={{ textAlign: "center" }}>
      <h1>useEffect Hook Implementation</h1>
      <button onClick={() => setShow((currentShow) => !currentShow)}>
        Show/Hide
      </button>
      {childComponent}
      <h1>useEffect via lifecycle Implementation</h1>
      {childClassComponent}
      <FetchData />
    </div>
  );
}
