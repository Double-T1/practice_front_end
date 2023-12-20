import React, { Component } from 'react';
import './App.css';
import Navigation from '../components/Navigation';
import Logger from '../components/Logger';
import Accum from '../components/Accum';
import SignIn from '../components/Signin';
import Register from '../components/Register';


class App extends Component {
  constructor() {
    super();
    this.state = {
      isSignedIn: false,
      route: "signin",
      inputMins: 0,
      user: {
        id: "",
        name: "",
        email: "",
        todayMins: 0,
        // totalMins: 0,
        // totalDays: 0,
        // streaks: 0,
        joinedDate: '' //date  
      }
    };
  }

  loadUser = (currentUser) => {
    this.setState({
      user: {
        id: currentUser.id,
        name: currentUser.name,
        email: currentUser.email,
        todayMins: currentUser.minutes,
        joined: currentUser.joined
      }
    })
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn : false})
    } else if (route === "home") {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }

  onInputChange = (event) => {
    this.setState({
      inputMins: event.target.value
    })
  }

  onInputClick = () => {
    fetch("http://localhost:3000/input", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({
        id: this.state.user.id,
        minutes: this.state.inputMins
      })
    })
    .then(res => res.json())
    .then(mins => {
      this.setState(
        Object.assign(this.state.user,{todayMins: mins})
      )
    })
    .catch(err => console.log("something went wrong"))
  }

  render() {
    const { isSignedIn, route } = this.state; 
    return (
      <div className="App">
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        { 
          route === "home" ?
          (
            <div>
              <Accum 
                name={this.state.user.name} 
                todayMins={this.state.user.todayMins}
              />
              <Logger onInputChange={this.onInputChange} onInputClick={this.onInputClick}/>
            </div>  
          )
          : route === "signin" ? 
          ( <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/> ) 
          : ( <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/> )
        }
      </div>
    )
  }
}

export default App;


/*
Navigation => register, signin
Intro Page => before signin



*/