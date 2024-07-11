import { useState } from "react"

export function CounterName() {
    const[name, setName] = useState('')
    const[age, setAge] = useState(0)
    
    function decreaseAge() {
        setAge((currentAge) => {
            return (currentAge != 0) ? currentAge - 1 :currentAge
        })
    }
    function increaseAge() {
        setAge((currentAge) => {
            return currentAge + 1
        })
    }

    return (
        <div>
            <label htmlFor="name">
                Name: &nbsp;
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            &nbsp;
            <label htmlFor="age">Age:</label>
            &nbsp;
            <button onClick={decreaseAge}>-</button>
            &nbsp;{age}&nbsp;
            <button onClick={increaseAge}>+</button>
            <h2>My name is {name} and I am {age} years old</h2>
        </div>
    );
}

// 1.Create a new function component that has state for name and age
// 2.Create a text input that when updated will update the name state
// 3.Create a plus and minus button that will update the age state and display the state between the two buttons
// 4.Display the string My name is {name} and I am {age} years old in your JSX
// 5.Repeat but for a class component instead of a function component
