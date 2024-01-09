import React from "react";
import './Alert.css';

const Alert = ({ alertMessage }) => {
	return (
		<div className="alert">
			<h3>
				{ alertMessage }
			</h3>
		</div>
	)
}


export default Alert;