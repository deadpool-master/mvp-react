import React from 'react';
import { BrowserRouter as Router, Route
  // ,Link 
  } from 'react-router-dom'
import './App.css';


import Welcomepage from './components/welcomepage';
import Cardlist from './components/cardlist';




class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  render() {
    return (
      <form> <center>




        {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Iplay
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>  */}

        {/* <header>
          Hii people in HEADER
        </header> */}
        <div>
          <Welcomepage />
        </div>
        <div className="container">
          <Router>
          

     
            <Route exact path="/welcomepage" component={Welcomepage} />
            <Route exact path="/cardlist" component={Cardlist} />
          </Router>
        </div>

        {/* <div>
          <footer>
            i am a footer
      </footer>
        </div> */}

        </center>
      </form>

    );
  }
}   


export default App;
