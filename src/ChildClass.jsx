import React from "react"

export class ChildClass extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            age: 0,
        }
    }
    // 1.console.log the text Render each time the component re-renders
    // 2.console.log the text Hi when the component mounts
    // manage component intialization
    componentDidMount() {
        console.log("Hi")
        console.log("Render")
    }
    // to manage dependencies via name, age
    componentDidUpdate(prevProps, prevState) {
        // 3.console.log the text My name is {name} and I am {age} years old whenever the name or age changes
        if (prevState.name !== this.state.name || prevState.age !== this.state.age) {
            console.log(`My name is ${this.state.name} and I am ${this.state.age} years old`)
        }
        // 4.update the document.title to be equal to name whenever the name changes
        if (prevState.name !== this.state.name) {
            document.title = this.state.name
            // 6.Create a timeout that console.logs the text My name is {name} only after there has been a 1 second delay since the last time the name was changed
            if (this.nameTimeout != null) clearTimeout(this.nameTimeout)
            this.nameTimeout = setTimeout(() => {
                console.log(`My name is ${this.state.name}`)
            }, 1000)
        }
    }
    // 5.console.log the text Bye when the component unmounts
    componentWillUnmount() {
        if (this.nameTimeout != null) clearTimeout(this.nameTimeout)
        console.log("Bye")
    }

    render() {
        return (
            <div>
                <h2>via class</h2>
                <label htmlFor="name1">
                    Name:
                    &nbsp;
                    <input type="text" id="name1" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                </label>
                &nbsp;
                <button onClick={() => this.setState((state) => { return { age: (state.age != 0) ? state.age - 1 : state.age } })}>-</button>
                &nbsp; {this.state.age} &nbsp;
                <button onClick={() => this.setState((state) => { return { age: state.age + 1 } })}>+</button>
                <br />
                My name is {this.state.name} and I am {this.state.age} years old.
            </div>
        )
    }
}
