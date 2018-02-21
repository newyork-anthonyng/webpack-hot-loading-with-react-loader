import React from "react";
import LoadableLongList from "./LoadableLongList";
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
                <h1>Hi</h1>
                <button onClick={this.handleClick}>{this.state.count}</button>
                <LoadableLongList length={5} />
            </div>
        )
    }
}

export default hot(module)(App);