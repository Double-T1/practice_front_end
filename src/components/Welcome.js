import React from "react";
import SignIn from "./welcome/Signin";
import Register from "./welcome/Register";


class Welcome extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			route: "home" //home, signin, register 
		}
	}

	onRouteChange = (route) => {
	    if (route === 'signout') {
	      this.setState({isSignedIn : false})
	    } else if (route === "signin") {
	      this.setState({isSignedIn: true})
	    }
	    this.setState({route: route})
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

	render() {
		const route = this.state.route;
		return (
			route == "" 
			? ( <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/> ) 
          	: ( <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/> )
		)
	}
}



export default Welcome;