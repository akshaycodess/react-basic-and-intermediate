import { ConditionalRendering } from "./ConditionalRendering";
import { RenderingLists } from "./RenderingLists";

function App() {
  return (
    <div>
      <h1>Advance Components</h1>
      <ConditionalRendering favNo={8} />
      <RenderingLists />
    </div>
  );
}

export default App
