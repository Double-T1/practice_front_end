import React from "react";
import NoChange from "./NoChange";
import ChangeName from "./ChangeName";
import ChangeEmail from "./ChangeEmail";
import ChangePassword from "./ChangePassword";
import DeleteAccount from "./deleteAccount/DeleteAccount";

class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			noChange: true,
			route: "default" //default, changeName, changeEmail, changePassword, deleteAccount
		}
	}

	onSubmitDeleteAccount = () => {
		this.props.setLoading(true);
		fetch(`https://input-hours-server.onrender.com/delete/${this.props.id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			}
		})
		.then(res => res.json())
		.then(name => {
			this.props.setLoading(false);
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
		const { name, email, loadUser, setLoading } = this.props;
		const { noChange, route } = this.state; 
		return (
			<div>
				<div> 
					<h1>This page shows the setting and delete account options</h1>
				</div>
				{	
					noChange ? 
					( <NoChange name={name} email={email} onChangeRoute={this.onChangeRoute}/> ) : 
					route === "changeName" ?
					( <ChangeName email={email} onChangeRoute={this.onChangeRoute} loadUser={loadUser} setLoading={setLoading}/> ) :
					route === "changeEmail" ?
					( <ChangeEmail onChangeRoute={this.onChangeRoute} loadUser={loadUser} setLoading={setLoading}/> ) :
					route === "changePassword" ? 
					( <ChangePassword email={email} onChangeRoute={this.onChangeRoute} loadUser={loadUser} setLoading={setLoading}/> ) :
					( <DeleteAccount onSubmitDeleteAccount={this.onSubmitDeleteAccount} onChangeRoute={this.onChangeRoute}/> )
				}
			</div>
		)
	}
}


export default Profile;