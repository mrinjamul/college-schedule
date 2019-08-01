import React, {Component} from 'react';
import Loading from "./components/Loading"
import Schedule from './components/Schedule';

import './App.css';


class App extends Component {
   constructor() {
     super()
     this.state = {
       isLoading: true
     }
   }
   componentDidMount() {
       setTimeout(() => {
           this.setState({
               isLoading: false
           })
       }, 1500)
   }

  render() {
      return (
      <div className="App">
        {this.state.isLoading ?
        <Loading /> :
        <div>
          <Schedule />
          <h3 className="copyright">Made with <font color="red"><b>❤ </b></font> by Injamul Mohammad Mollah</h3>
        </div>
        }
       </div>
    );
  }
}

export default App;
