import { useState } from "react"

export function Counter() {
    const [counter, setCounter] = useState(0)

    function handleClick() {
        setCounter((currentcounter) => {
            return currentcounter + 1
        })
    }
    return (
    <div>
        <h3 onClick={handleClick}>Counter function example: {counter}</h3>
    </div>
    )
}

// Create a new component called counter
// have a state for a counter that is 0 and render it in JSX
// When you click the number increment by 1
