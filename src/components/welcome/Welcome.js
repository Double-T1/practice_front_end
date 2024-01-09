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
			alertMessage: ""
		}
	}

	showAlert = (message) => {
		this.setState({
			isAlertVisible: true,
			alertMessage: message
		})

		setTimeout(() => {
            this.setState({ 
            	isAlertVisible: false,
            	alertMessage: ""
            })
        }, 3000);
	} 

	render() {
		const {route, loadUser, onRouteChange} = this.props;
		if (route === "home") {
			return ( <Home /> );
		} else {
			return  (
				<div>
					{ this.state.isAlertVisible && <Alert alertMessage={this.state.alertMessage}/> }
					{ route === "signin" ? 
						( <Signin loadUser={loadUser} onRouteChange={onRouteChange} showAlert={this.showAlert}/> ) :
						( <Register loadUser={loadUser} onRouteChange={onRouteChange} showAlert={this.showAlert}/> )  
					}
				</div>
			)	
		}
	}
}


export default Welcome;