import React, { Component } from 'react';
import './App.css';
import Navigation from '../components/navigation/Navigation';
import Welcome from "../components/welcome/Welcome";
import Content from "../components/content/Content";


class App extends Component {
  constructor() {
    super();
    this.state = {
      isSignedIn: false,
      route: "home", //home, signin, register, progress, profile
      inputMins: 0,
      user: {
        id: "",
        name: "",
        email: "",
        todayMins: 0,
        // totalMins: 0,
        // totalDays: 0,
        // streaks: 0,
        joined: '' //date  
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
    if (route === "home") {
      this.setState({isSignedIn : false})
    } else if (route === "progress") {
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
    fetch("https://input-hours-server.onrender.com/input", {
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
    const { isSignedIn, route, user } = this.state;
    const { name, todayMins, email, id } = user;
    return (
      <div className="App">
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        { 
          isSignedIn ?
          ( <Content route={route} name={name} todayMins={todayMins} 
            onInputChange={this.onInputChange} onInputClick={this.onInputClick} 
            onRouteChange={this.onRouteChange} id={id} email={email}
            loadUser={this.loadUser}/> 
          ) : 
          ( <Welcome route={route} loadUser={this.loadUser} 
            onRouteChange={this.onRouteChange}/> )
        }
      </div>
    )
  }
}

export default App;







/*
Navigation => register, signin
Intro Page => before signin

home, signin, register, signout, progress, profile


*/