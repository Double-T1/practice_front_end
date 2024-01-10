import React, { Component, componentDidMount, componentWillUnmount } from 'react';
import './App.css';
import Navigation from '../components/navigation/Navigation';
import Welcome from "../components/welcome/Welcome";
import Content from "../components/content/Content";


class App extends Component {
  constructor() {
    super();
    this.state = {
      isSignedIn: false,
      isLoading: false,
      route: "home", //home, signin, register, progress, profile
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
  };

  loadUser = (currentUser) => {
    this.setState({
      user: {
        id: currentUser.id,
        name: currentUser.name,
        email: currentUser.email,
        todayMins: currentUser.todayMins,
        joined: currentUser.joined
      }
    })
    localStorage.setItem("user",JSON.stringify(currentUser));
  }

  onRouteChange = (route) => {
    if (route === "home") {
      this.setState({isSignedIn : false})
    } else if (route === "progress") {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      this.loadUser(user);
      this.onRouteChange("progress");
    }
  }

  setLoading = (status) => {
    this.setState({
      isLoading: status
    })
  }

  onInputClick = (inputMins) => {
    this.setLoading(true);
    fetch("https://input-hours-server.onrender.com/input", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({
        id: this.state.user.id,
        inputMins: inputMins
      })
    })
    .then(res => res.json())
    .then(todayMins => {
      this.setLoading(false);
      this.setState(
        Object.assign(this.state.user,{todayMins: todayMins})
      )
      const currentUser = JSON.parse(localStorage.getItem("user"));
      localStorage.setItem("user",JSON.stringify({
        ...currentUser,
        todayMins: todayMins
      }));
    })
    .catch(err => console.log("something went wrong"))
  }

  render() {
    const { isSignedIn, route, user, isLoading } = this.state;
    const { name, todayMins, email, id } = user;
    return (
      <div className="App">
        {
          isLoading && 
          ( 
            <div className="loader-container">
              <div className="spinner"></div>
            </div> 
          )
        }
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        { 
          isSignedIn ?
          ( <Content route={route} name={name} todayMins={todayMins} 
            onInputClick={this.onInputClick} 
            onRouteChange={this.onRouteChange} id={id} email={email}
            loadUser={this.loadUser} setLoading={this.setLoading}/> 
          ) : 
          ( <Welcome route={route} loadUser={this.loadUser} 
            onRouteChange={this.onRouteChange} setLoading={this.setLoading}/> )
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