import React from "react";
import Progress from "./progress/Progress";
import Profile from "./profile/Profile";


class Content extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {route, name, todayMins, onInputChange, onInputClick, 
			onRouteChange, id, email, loadUser, setLoading} = this.props;
		return (
			route === "progress" ? 
			( <Progress name={name} todayMins={todayMins} 
				onInputClick={onInputClick}/> 
			) :
			( <Profile name={name} email={email}
				onRouteChange={onRouteChange} id={id}
				loadUser={loadUser} setLoading={setLoading}/> )		
		)
	}
}



export default Content;