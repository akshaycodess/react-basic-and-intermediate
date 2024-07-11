import React from "react"

export class CounterNameClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            age: 0,
        }
    }

    render() {
        const decreaseAge = () => {
            this.setState((currentState) => {
                return { age: (currentState.age != 0) ? currentState.age - 1 : currentState.age }
            })
        }
        const increaseAge = () => {
            this.setState((currentState) => {
                return { age: currentState.age + 1 }
            })
        }

        return (
            <div>
                <label htmlFor="name">
                    Name: &nbsp;
                    <input type="text" name="name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                </label>
                &nbsp;
                <label htmlFor="age">Age:</label>
                &nbsp;
                <button onClick={decreaseAge}>-</button>
                &nbsp;{this.state.age}&nbsp;
                <button onClick={increaseAge}>+</button>
                <h2>My name is {this.state.name} and I am {this.state.age} years old</h2>
            </div>
        )
    }
}

// 1.Create a new class component that has state for name and age
// 2.Create a text input that when updated will update the name state
// 3.Create a plus and minus button that will update the age state and display the state between the two buttons
// 4.Display the string My name is {name} and I am {age} years old in your JSX
// 5.Repeat but for a class component instead of a function component
