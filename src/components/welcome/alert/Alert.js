import React from "react";
import './Alert.css';

const Alert = ({ message, isSuccessful }) => {
	return (
		<div className={ !isSuccessful ? ("alert") : ("success") } >
			<h3>
				{ `${message}` }
			</h3>
		</div>
	)
}


export default Alert;