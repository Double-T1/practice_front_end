import React from "react";
import Home from "./Home";
import Signin from "./Signin";
import Register from "./Register";
import Alert from "./alert/Alert";


class Welcome extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isAlertVisible: false,
			message: "",
			isSuccessful: false
		}
	}

	showAlert = (message, isSuccessful) => {
		this.setState({
			isAlertVisible: true,
			message: message,
			isSuccessful: isSuccessful
		})

		setTimeout(() => {
            this.setState({ 
            	isAlertVisible: false,
            	message: "",
            	isSuccessful: false
            })
        }, 3000);
	} 

	render() {
		const {route, loadUser, onRouteChange} = this.props;
		const {isAlertVisible, message, isSuccessful} = this.state;
		if (route === "home") {
			return ( <Home /> );
		} else {
			return  (
				<div>
					{ isAlertVisible && ( <Alert message={message} isSuccessful={isSuccessful}/> ) }
					{ route === "signin" ? 
						( <Signin loadUser={loadUser} onRouteChange={onRouteChange} showAlert={this.showAlert}/> ) :
						( <Register onRouteChange={onRouteChange} showAlert={this.showAlert}/> )  
					}
				</div>
			)	
		}
	}
}


export default Welcome;