import { useState } from "react"
import { Counter } from "./Counter"
import { CounterClass } from "./CounterClass"

function App() {
  const[name, setName] = useState('Akshay')

  return (
    <div>
      <h1>Stateful Components</h1>
      <Counter />
      <CounterClass />
      <h3>
        Input event listeners example:&nbsp;
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </h3>
    </div>
    // 'value' and 'onChange' attr is an controlled input for react
    // defaultValue attr for input is for browser control anc act as uncontrolled input for react
  );
}

export default App
