import React from "react";
import Decrement from "./Decrement";
import Increment from "./Increment";
import "./css/App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {number: 0};

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this)
  }

  increment() {
    this.setState({
      number: this.state.number + 1
    });
  }

  decrement() {
    this.setState({
      number: this.state.number - 1
    });
  }

  render() {
    return <div className="Home">
      <div className="row">{this.state.number} </div>
      <div className="row"><Decrement decrement={this.decrement}/></div>
      <div className="row"><Increment increment={this.increment}/></div>
    </div>
  }
}

export default App;
