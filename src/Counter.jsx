import { useReducer } from "react"

export default function Counter() {
    function reducer(count, action) {
        switch (action.type) {
            case "MINUS":
                return count === 0 ? count : count - 1
            case "PLUS":
                return count + 1
            case "RESET":
                return 0
            default:
                return count
        }
    }
    const [count, dispatch] = useReducer(reducer, 0)

    return (
        <>
            <span>Count: {count}&nbsp;</span>
            <button onClick={() => dispatch({ type: "MINUS" })}>-</button>
            <button onClick={() => dispatch({ type: "PLUS" })}>+</button>
            <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
        </>
    )
}