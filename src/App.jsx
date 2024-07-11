import { CounterName } from "./CounterName"
import { CounterNameClass } from "./CounterNameClass";

function App() {
  return (
    <div style={{textAlign:'center'}}>
      <h1>Counter with name project</h1>
      <h2>via function</h2>
      <CounterName />
      <br />
      <h2>via class</h2>
      <CounterNameClass />
    </div>
  );
}

export default App
