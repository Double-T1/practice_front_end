import React from "react";
import NoChange from "./NoChange";
import ChangeName from "./ChangeName";
import ChangeEmail from "./ChangeEmail";
import ChangePassword from "./ChangePassword";

class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			noChange: true,
			route: "default" //default, changeName, changeEmail, changePassword
		}
	}

	onSubmitDeleteAccount = () => {
		fetch(`https://input-hours-server.onrender.com/delete/${this.props.id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			}
		})
		.then(res => res.json())
		.then(name => {
			this.props.onRouteChange("home");
		})
	}

	onChangeRoute = (route) => {
		if (route === "default") {
			this.setState({noChange: true});
		} else {
			this.setState({noChange: false});
		}
	    this.setState({route: route})
	}

	render() {
		const { name, email, loadUser } = this.props;
		const { noChange, route } = this.state; 
		return (
			<div>
				<div> 
					<h1>This page shows the setting and delete account option</h1>
				</div>
				{	
					noChange ? 
					( <NoChange name={name} email={email} onChangeRoute={this.onChangeRoute}/> ) : 
					route === "changeName" ?
					( <ChangeName email={email} onChangeRoute={this.onChangeRoute} loadUser={loadUser}/> ) :
					route === "changeEmail" ?
					( <ChangeEmail onChangeRoute={this.onChangeRoute} loadUser={loadUser}/> ) :
					( <ChangePassword email={email} onChangeRoute={this.onChangeRoute} loadUser={loadUser}/> )
				}
				<div className="pa3">
					<input
						onClick={this.onSubmitDeleteAccount}
						className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
						type="submit"
						value="Delete Account"
					/>
	            </div>
			</div>
		)
	}
}


export default Profile;