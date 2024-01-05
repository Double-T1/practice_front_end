import React from "react";
import Progress from "./Progress";
import Profile from "./profile/Profile";


class Content extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {route, name, todayMins, onInputChange, onInputClick, 
			onRouteChange, id, email, loadUser} = this.props;
		return (
			route === "progress" ? 
			( <Progress name={name} todayMins={todayMins} 
				onInputChange={onInputChange} onInputClick={onInputClick}/> 
			) :
			( <Profile name={name} email={email}
				onRouteChange={onRouteChange} id={id}
				loadUser={loadUser} /> )		
		)
	}
}



export default Content;