import React, { Component } from 'react';
import { getQueryParams } from "./utility/urlUtility"
import './App.scss';
import Login from'./component/login'
import Home from './component/home'
import NavBar from './component/navbar'
import DashBoardEditor from './component/dashboardEditor/DashBoardEditor'
import { Route } from "react-router-dom";
import {connect} from 'react-redux'
import changeUser from "./actions/useractions";
class App extends Component {
  
  constructor(){
    super()
    if (getQueryParams().token && !localStorage.dashToken){
      console.log('getting token from url...')
      localStorage.setItem('dashToken',getQueryParams().token)
    }
  }

  componentDidMount(){
    if (!this.props.user.name){
      fetch(`/user/?token=${window.localStorage.dashToken}`)
      .then(res=>res.json())
      .then(res=>this.props.changeUser(res))
      .catch(err=>{
        console.log(err)
        this.props.changeUser({})
        localStorage.clear()
      })
    }
  }

  render(){
    
    if(!this.props.user.name){
      return (
        <div className="App">
          {<Login /> }
        </div>
      )}
      else{
        return(
        <div className="App">
          <NavBar />
          <Route path="/" exact component={Home}  />
          <Route path="/new" exact component={DashBoardEditor} />
        {`you are logged in ${this.props.user.name}`}
        </div>)
      }
    }
}

const stateToProps = (state)=>state

export default connect(stateToProps,changeUser)(App);
