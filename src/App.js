import React, { Component } from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Main from './component/Main';
import Caesarview from './component/CaesarView';


class App extends Component {

  
  render() {
    return (
      <div className="App">
       <Route exact path="/" component={Main}></Route>
       <Route exact path="/caesar" component={Caesarview}></Route>
          
      </div>
    );
  }
}

export default App;
