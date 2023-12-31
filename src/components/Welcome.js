import React from "react";
import Home from "./welcome/Home";
import Signin from "./welcome/Signin";
import Register from "./welcome/Register";


class Welcome extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {route, loadUser, onRouteChange} = this.props;
		return (
			route === "home" ?
			( <Home /> ) :
			route === "signin" ?
			( <Signin loadUser={loadUser} onRouteChange={onRouteChange}/> ) :
			( <Register loadUser={loadUser} onRouteChange={onRouteChange}/> ) 
		)
	}
}


export default Welcome;