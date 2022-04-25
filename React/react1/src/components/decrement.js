import React from "react";

class Decrement extends React.Component {
    render() {
        return <button onClick={this.props.decrement}>Decrement</button>
    }
}

export default Decrement