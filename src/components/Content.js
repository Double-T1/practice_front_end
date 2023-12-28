import React from "react";
import Stats from "./content/Stats";

class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			route: "stats" //stats, profile, signout??
		}
	}

	onRouteChange = (route) => {
		this.setState({route: route});
		if (route === "signout") {
			this.onNavChange(true);
		} 
	 }

	render() {
		return (
			<div></div>
			// <Stats name={name} todayMins={todayMins} onInputChange={this.onInputChange} onInputClick={this.onInputClick}/>
		)
	}
}



export default Content;