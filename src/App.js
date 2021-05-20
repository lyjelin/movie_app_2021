import React from "react";
import PropTypes from "prop-types";

class App extends React.Component{
  state = {
    count: 0 
  }

  add = () => {
    this.setState(current => ({count: current.count + 1}));
  };
  subtract = () => {
    this.setState(current => ({count: current.count - 1}));
  };

  componentDidMount() {
    console.log("component rendering");
  }

  componentDidUpdate() {
    console.log("I just updated");
  }

  render(){
    console.log("I'm rendering");
    return (
      <div>
        <h1>This number is : {this.state.count}</h1>
        <button onClick={this.add}>ADD</button>
        <button onClick={this.subtract}>SUB</button>
      </div>
    )
  }
}

export default App;
