import React from 'react';

const Navigation = ({ isSignedIn, onRouteChange }) => {
	if (isSignedIn) {
		return (
			<nav style={{display: 'flex', justifyContent: 'flex-end'}} className="bb bw1">
				<p id="profile" 
					className="pa3" 
					onClick={() => onRouteChange("signout")}>
					Profile (not functioning yet)
				</p>
				<p id="signout" 
					className="pa3" 
					onClick={() => onRouteChange("signout")}>
					Sign Out
				</p>
				<p id="delete" 
					className="pa3" 
					onClick={() => onRouteChange("signout")}>
					Delete Account (not functioning yet)
				</p>
			</nav>
		)
	} else {
		return (
			<nav style={{display: 'flex', justifyContent: 'flex-end'}} className="bb bw1"> 
				<p id="signIn" 
					className="pa3" 
					onClick={() => onRouteChange("home")}>
					Home (not functioning yet)
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