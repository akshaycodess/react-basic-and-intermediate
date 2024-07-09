function App() {
  return (
    // Q1. div with class large and the id largeDiv with the text Hi.
    // <div className="large" id="largeDiv">Hi</div>

    // Q2. remove the text Hi
    // Add a label with for prop set to inputId and add any text
    // Add an input with the id inputId, type number and value of 3 as a number
    <div className="large" id="largeDiv">
      <label htmlFor="inputId">Any text</label>
      <input id="inputId" type="number" value={3} />
    </div>
  )
}

export default App
