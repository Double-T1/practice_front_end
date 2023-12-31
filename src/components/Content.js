import React from "react";
import Progress from "./content/Progress";
import Profile from "./content/Profile";


class Content extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {route, name, todayMins, onInputChange, onInputClick} = this.props;
		return (
			route === "progress" ? 
			( <Progress name={name} todayMins={todayMins} onInputChange={onInputChange} onInputClick={onInputClick}/> ) :
			( <Profile /> )		
		)
	}
}



export default Content;