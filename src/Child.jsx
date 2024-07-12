import { useState, useEffect } from "react"

export function Child() {
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)

    // run always as no dependency
    useEffect(() => {
        console.log("re-render")
    })
    // run once on mount as have blank array dependency
    useEffect(() => {
        console.log("Hi")

        return () => {
            console.log("Bye")
        }
    }, [])
    // run when name and age changes
    useEffect(() => {
        console.log(`My name is ${name} and I am ${age} years old`)
    }, [name, age])

    useEffect(() => {
        document.title = name

        const timeout = setTimeout(() => {
            console.log(`My name is ${name}`)
        }, 1000)

        return () => {
            clearTimeout(timeout)
        }
    }, [name])

    return (
        <div>
            <h2>via function</h2>
            <label htmlFor="name">
                Name:
                &nbsp;
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            &nbsp;
            <button onClick={() => setAge((a) => (a != 0) ? a - 1 : a)}>-</button>
            &nbsp; {age} &nbsp;
            <button onClick={() => setAge((a) => a + 1)}>+</button>
            <br />
            My name is {name} and I am {age} years old.
        </div>
    )
}
