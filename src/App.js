import React, { Component } from "react";
import Loading from "./components/Loading";
import Schedule from "./components/Main";

import "./App.css";
import "./styles/dracula.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      updateOn: "October 12, 2021",
      expires: "December 31, 2021",
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 1500);
  }

  render() {
    return (
      <div className="App">
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <div>
            <Schedule expires={this.state.expires} />
            <h3 className="copyright"> Updated on {this.state.updateOn}. </h3>
            <h3 className="copyright" style={{ color: "red" }}>
              {" "}
              Valid til {this.state.expires}.{" "}
            </h3>
            <h3 className="copyright">
              Made with{" "}
              <font color="red">
                <b> ❤ </b>
              </font>{" "}
              by Injamul Mohammad Mollah, All rights reserved
            </h3>
          </div>
        )}
      </div>
    );
  }
}

export default App;
