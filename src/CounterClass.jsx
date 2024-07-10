import React from "react"

export class CounterClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0,
        }
    }

    render() {
        return (
        <div>
            <h3
                onClick={() => {
                this.setState((currentState) => {
                    return { counter: currentState.counter + 1 }
                })
                }}
            >
            Counter class example: {this.state.counter}
            </h3>
        </div>
        );
    }
}

// Create a new class component called counter
// have a state for a counter that is 0 and render it in JSX
// When you click the number increment by 1
