import React from 'react';

const Navigation = ({ isSignedIn, onRouteChange }) => {
	if (isSignedIn) {
		return (
			<nav style={{display: 'flex', justifyContent: 'flex-end'}} className="bb bw1">
				<p id="progress" 
					className="pa3" 
					onClick={() => onRouteChange("progress")}>
					Progress
				</p>
				<p id="profile" 
					className="pa3" 
					onClick={() => onRouteChange("profile")}>
					Profile
				</p>
				<p id="signout" 
					className="pa3" 
					onClick={() => onRouteChange("home")}>
					Sign Out
				</p>
			</nav>
		)
	} else {
		return (
			<nav style={{display: 'flex', justifyContent: 'flex-end'}} className="bb bw1"> 
				<p id="signIn" 
					className="pa3" 
					onClick={() => onRouteChange("home")}>
					Home
				</p>
				<p id="signIn" 
					className="pa3" 
					onClick={() => onRouteChange("signin")}>
					Sign In
				</p>
				<p id="register" 
					className="pa3" 
					onClick={() => onRouteChange("register")}>
					Register
				</p>
			</nav>
		)
	}
	
}

export default Navigation;