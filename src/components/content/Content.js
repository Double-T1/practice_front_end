import React from "react";
import Progress from "./progress/Progress";
import Profile from "./profile/Profile";


class Content extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {route, name, todayMins, onSubmitInput, setShowPopUp,
			onRouteChange, id, email, loadUser, setLoading,
			unloadUser, totalMins, totalDays, streaks, dailyGoal} = this.props;
		return (
			route === "progress" ? 
			( <Progress name={name} todayMins={todayMins} setShowPopUp={setShowPopUp}
				onSubmitInput={onSubmitInput} totalMins={totalMins} 
				totalDays={totalDays} streaks={streaks} dailyGoal={dailyGoal}/> 
			) :
			( <Profile name={name} email={email}
				onRouteChange={onRouteChange} id={id}
				loadUser={loadUser} setLoading={setLoading} 
				unloadUser={unloadUser}/> )		
		)
	}
}



export default Content;