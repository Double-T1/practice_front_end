import React from "react";
import Progress from "./Progress";
import Profile from "./Profile";


class Content extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {route, name, todayMins, onInputChange, onInputClick, 
			onRouteChange, id, email} = this.props;
		return (
			route === "progress" ? 
			( <Progress name={name} todayMins={todayMins} 
				onInputChange={onInputChange} onInputClick={onInputClick}/> 
			) :
			( <Profile name={name} email={email}
				onRouteChange={onRouteChange} id={id}/> )		
		)
	}
}



export default Content;