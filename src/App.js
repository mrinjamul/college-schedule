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
      updateOn: "February 11, 2021",
      expires: "August 31, 2022",
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
              <font color="#009879">
                <b> ❤ </b>
              </font>{" "}
              by  
              <a href="https://github.com/mrinjamul">  Injamul Mohammad Mollah</a> & 
              <a href="https://github.com/mahafujul"> Mahafujul Haque</a>
            </h3>
          </div>
        )}
      </div>
    );
  }
}

export default App;
