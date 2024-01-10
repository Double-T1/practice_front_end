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
        totalMins: 0,
        totalDays: 0, 
        lastInputDate: '',
        streaks: 0,
        joined: '' //date  
      }
    };
  };

  loadUser = (currentUser) => {
    //terrible patch here for the sake of convenience
    const todayMins = currentUser.todayMins ? currentUser.todayMins : currentUser.todaymins;
    const totalMins = currentUser.totalMins ? currentUser.totalMins : currentUser.totalmins;
    const totalDays = currentUser.totalDays ? currentUser.totalDays : currentUser.totaldays;
    const lastInputDate = currentUser.lastInputDate ? currentUser.lastInputDate : currentUser.lastinputdate;
    this.setState({
      user: {
        id: currentUser.id,
        name: currentUser.name,
        email: currentUser.email,
        todayMins: todayMins,
        totalMins: totalMins,
        totalDays: totalDays,
        lastInputDate: lastInputDate,
        streaks: currentUser.streaks,
        joined: currentUser.joined
      }
    })
    localStorage.setItem("user",JSON.stringify(currentUser));
  }

  unloadUser = () => {
    this.setState({
      user: {
        id: "",
        name: "",
        email: "",
        todayMins: 0,
        totalMins: 0,
        totalDays: 0, 
        lastInputDate: '',
        streaks: 0,
        joined: '' //date  
      }
    })
    localStorage.setItem("user",null);
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

  onSubmitInput = (inputMins) => {
    this.setLoading(true);
    fetch("https://input-hours-server.onrender.com/updateInput", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({
        id: this.state.user.id,
        inputMins: inputMins,
        newInputDate: new Date()
      })
    })
    .then(res => res.json())
    .then(res => {
      this.setLoading(false);
      this.setState(
        Object.assign(this.state.user,{
          todayMins: res.todaymins,
          totalMins: res.totalmins,
          totalDays: res.totaldays,
          streaks: res.streaks  
        })
      )
      const currentUser = JSON.parse(localStorage.getItem("user"));
      localStorage.setItem("user",JSON.stringify({
        ...currentUser,
        todayMins: res.todaymins,
        totalMins: res.totalmins,
        totalDays: res.totaldays,
        streaks: res.streaks
      }));
    })
    .catch(err => console.log("something went wrong"))
  }

  render() {
    const { isSignedIn, route, user, isLoading } = this.state;
    const { name, todayMins, email, id, totalMins, totalDays, streaks } = user;
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
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} unloadUser={this.unloadUser}/>
        { 
          isSignedIn ?
          ( <Content route={route} name={name} todayMins={todayMins} 
            onSubmitInput={this.onSubmitInput} unloadUser={this.unloadUser}
            onRouteChange={this.onRouteChange} id={id} email={email}
            loadUser={this.loadUser} setLoading={this.setLoading}
            totalMins={totalMins} totalDays={totalDays} streaks={streaks}/> 
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