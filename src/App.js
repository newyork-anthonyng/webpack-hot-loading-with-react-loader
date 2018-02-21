import React from "react";
import { hot } from "react-hot-loader";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    handleClick = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.count}</button>
            </div>
        )
    }
}

export default hot(module)(App);