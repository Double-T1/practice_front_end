import React from "react";
import Progress from "./progress/Progress";
import Profile from "./profile/Profile";


class Content extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {route, name, todayMins, onSubmitInput, 
			onRouteChange, id, email, loadUser, setLoading,
			unloadUser, totalMins, totalDays, streaks} = this.props;
		return (
			route === "progress" ? 
			( <Progress name={name} todayMins={todayMins} 
				onSubmitInput={onSubmitInput} totalMins={totalMins} 
				totalDays={totalDays} streaks={streaks}/> 
			) :
			( <Profile name={name} email={email}
				onRouteChange={onRouteChange} id={id}
				loadUser={loadUser} setLoading={setLoading} 
				unloadUser={unloadUser}/> )		
		)
	}
}



export default Content;