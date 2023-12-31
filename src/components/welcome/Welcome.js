import React from "react";
import Home from "./Home";
import Signin from "./Signin";
import Register from "./Register";


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