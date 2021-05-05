import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

class Input extends Component {
  state = { value: "" };
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Practice:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              ></input>
            </label>
            <input type="submit" value="Submit" />
          </form>
          <p>{this.state.value}</p>
        </div>
      </>
    );
  }
}

ReactDOM.render(<Input />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
