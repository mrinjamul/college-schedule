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
      updateOn: "Feb 22, 2023",
      expires: "August 31, 2023",
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
            <h3 className="copyright" style={{ color: "#009879" }}>
              {" "}
              Valid til {this.state.expires}.{" "}
            </h3>
            <h3 className="copyright">
              Made with{" "}
              <font color="red">
                <b> ❤ </b>
              </font>{" "}
              by
              <a
                href="https://github.com/mrinjamul"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Injamul Mohammad Mollah
              </a>{" "}
              &
              <a
                href="https://github.com/mahafujul"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Mahafujul Haque
              </a>
            </h3>
          </div>
        )}
      </div>
    );
  }
}

export default App;
