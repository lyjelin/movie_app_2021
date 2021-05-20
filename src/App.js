import React from "react";
import PropTypes from "prop-types";

class App extends React.Component{
  state = {
    count: 0 
  }

  add = () => {
    console.log("add");
  };
  subtract = () => {
    console.lof("minus");
  };



  render(){
    return (
      <div>
        <h1>This number is : {this.state.count}</h1>
        <button onClick={this.add}>ADD</button>
        <button onClock={this.subtract}>SUB</button>
      </div>
    )
  }
}

export default App;
