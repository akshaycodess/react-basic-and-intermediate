import { useState, useMemo } from "react"
import { validateEmail, validatePassword } from "./validators"

    export default function StateForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // Bonus
    const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState(false)
    const emailErros = useMemo(() => {
        return isAfterFirstSubmit ? validateEmail(email) : []
    }, [isAfterFirstSubmit, email])
    const passwordErros = useMemo(() => {
        return isAfterFirstSubmit ? validatePassword(password) : []
    }, [isAfterFirstSubmit, password])
    
    function handleSubmit(e) {
        e.preventDefault()
        // Bonus
        setIsAfterFirstSubmit(true)

        const emailResults = validateEmail(email)
        const passwordResults = validatePassword(password)

        if (emailResults.length === 0 && passwordResults.length === 0) {
            alert(`Success: ${email}`)
        }
    }
    return (
        <form onSubmit={handleSubmit} className="form">
        <div className={`form-group ${emailErros.length > 0 ? "error" : ""}`}>
            <label className="label" htmlFor="email">
            Email
            </label>
            <input
            className="input"
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
            {emailErros.length > 0 && (<div className="msg">{emailErros.join(", ")}</div>)}
        </div>
        <div className={`form-group ${passwordErros.length > 0 ? "error" : ""}`}>
            <label className="label" htmlFor="password">
            Password
            </label>
            <input
            className="input"
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            id="password"
                />
            {passwordErros.length > 0 && (<div className="msg">{passwordErros.join(", ")}</div>)}
        </div>
        <button className="btn" type="submit">
            Submit
        </button>
        </form>
    )
    }

// Instructions
// 1. Create a form with an email and password input that check for the following validations:
//  Email:
//    Required (Cannot be blank)
//    Must end in @webdevsimplified.com
//  Password:
//    Required (Cannot be blank)
//    Must Be 10 characters or longer
//    Must include a lowercase letter
//    Must include an uppercase letter
//    Must include a number
// 2. Show error messages next to the inputs every time the form is submitted if there are any. If there are no errors alert the message Success.
// 3. If you did the first 2 steps using refs, repeat the same thing with state instead. If you used state for the first 2 steps instead repeat the same thing with refs.
// Bonus
// 1. Make it so that the error messages show up when you submit the form (just like step 2), but also make it so the error messages will automatically update when you change the value in each input but only after the first time you submit the form.
// 2. For example if you type in an email that is incorrect and submit the form it should show an error message. Then when you go back and start making changes to the email input, the error message should update with the current errors as you change the input and disappear when the input is valid.
