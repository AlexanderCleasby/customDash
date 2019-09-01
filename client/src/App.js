import React, { Component } from 'react';
import { getQueryParams } from "./utility/urlUtility"
import './App.css';
import Login from'./component/login'
class App extends Component {
  
  constructor(){
    super()
    this.state = { token: getQueryParams().token }
  }
  render(){
  
  return (
    <div className="App">
      
      {!this.state.token ? <Login /> : ""  }
      
    </div>
  );}
}

export default App;
