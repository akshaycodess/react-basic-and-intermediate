import Counter from "./Counter"

function App() {  
  return (
    <>
      <h1>Advance Stateful Components</h1>
      <h2>useReducer hook</h2>
      <Counter />
      <h2>Environment Variables</h2>
      {/* create a file with name .env.development.local
          with variable VITE_URL,PASSWORD,REACT_APP_URL,PASSWORD
          to check the below code
      */}
      <h3>via Vite</h3>
      <p>{import.meta.env.VITE_URL}</p>
      {/*  this will not work because not defined via VITE_*/}
      {/* <p>{import.meta.env.PASSWORD}</p> */}
      <h3>via React</h3>
      {/* <p>{process.env.REACT_APP_URL}</p>
      this will not work because not defined via VITE_
      <p>{process.env.PASSWORD}</p> */}
      <p>Note: here you need to restart the server always</p>
    </>
  );
}

export default App
