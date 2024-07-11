import { useState } from "react"

// 1. Create state that stores an array with the initial value of ["A", "B", "C"]
const INITIAL_ARRAY = ["A", "B", "C"]

export function ArrayComponent() {
    const [array, setArray] = useState(INITIAL_ARRAY)
    const [inputValue, setInputValue] = useState('')

    // 2. Add the ability to remove the first element from the array
    function removeFirstElement() {
        setArray((currentArray) => {
            return currentArray.slice(1)
        })
    }
    // 3. Add the ability to remove a specific letter from the array
    function removeSpecficLetter(letter) {
        setArray((currentArray) => {
            return currentArray.filter((element) => element !== letter)
        })
    }
    // 4. Add the ability to add a new element to the start of the array
    // 5. Add the ability to add a new element to the end of the array
    function addNewElemetToStartAndEnd(letter, position = 'start') {
        setArray((currentArray) => {
            return (letter != '') ? ((position == 'start') ? [letter, ...currentArray] : [...currentArray, letter]) : currentArray
        })
    }
    // 6. Add the ability to clear the array
    function clearArray() {
        setArray([])
    }
    // 7. Add the ability to reset the array to the initial value
    function resetArray() {
        setArray(INITIAL_ARRAY)
    }
    // 8. Add the ability to update all X elements in the array to H
    function updateXtoH(searchValue, replaceValue) {
        setArray((currentArray) => {
            return currentArray.map((element) => {
                if (element === searchValue) return replaceValue
                    return element
                })
        })
    }
    // 10. Add the ability to add a new element at any index in the array
    function addLetterAtAnyIndex(letter, index) {
        setArray((currentArray) => {
            return [
                ...currentArray.slice(0, index),
                letter,
                ...currentArray.slice(index),
            ]
        })
    }

    return (
        <div style={{ textAlign: 'center' }}>    
            <h1>Array State Project</h1>
            {array.join(", ")}
            <br />
            <button onClick={removeFirstElement}>remove first element</button>
            &nbsp;
            <button onClick={() => removeSpecficLetter('B')}>remove all B's</button>
            &nbsp;
            <button onClick={() => addNewElemetToStartAndEnd('X')}>add 'X' letter to start</button>
            &nbsp;
            <button onClick={() => addNewElemetToStartAndEnd('Z', 'end')}>add 'Z' letter to end</button>
            &nbsp;
            <button onClick={clearArray}>clear</button>
            &nbsp;
            <button onClick={resetArray}>reset</button>
            {/* Bonus functions */}
            &nbsp;
            <button onClick={() => updateXtoH('X', 'H')}>update 'X' to 'H'</button>
            &nbsp;
            <button onClick={() => addLetterAtAnyIndex('B', 2)}>add 'B' at '2'</button>
            <br />
            {/* 9. Add an input that is connected to state and a button that will add the input value to the start of the array */}
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            &nbsp;
            <button onClick={() => addNewElemetToStartAndEnd(inputValue)}>input value to add to array</button>
        </div>
    )

}
