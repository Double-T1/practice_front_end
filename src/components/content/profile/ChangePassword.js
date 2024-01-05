import React from "react";

class ChangePassword extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPassword: "",
			newPassword: ""
		}
	}

	// onInputChange = (field, event) => {

	// }

	onCurrentPasswordChange = (event) => {
		this.setState({
			currentPassword: event.target.value
		})
	}

	onNewPasswordChange = (event) => {
		this.setState({
			newPassword: event.target.value
		})
	}

	onChangePasswordSubmit = () => {
		fetch("https://input-hours-server.onrender.com/profile/update/changePassword", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: this.props.email,
				currentPassword: this.state.currentPassword,
				newPassword: this.state.newPassword
			})
		})
		.then(res => {
			return res.json();
		})
		.then(user => {
			if (user.id) {
				this.props.loadUser(user);
				this.props.onChangeRoute("default");
			}
		})
		.catch(error => console.log("shit happens hehe"));
	}

	render () {
		return (
			<div>
				<fieldset>
					<legend>Change Password</legend>	
					<div id=""> 
						<label htmlFor="inputCurrentPassword">Current Password: </label>
						<input 
							id="inputCurrentPassword"
							type="text"
							name="currentPassword"
							onChange={this.onCurrentPasswordChange}
						/>
					</div>
					<div id=""> 
						<label htmlFor="inputNewPassword">New Password: </label>
						<input 
							id="inputNewPassword"
							type="text"
							name="newPassword"
							onChange={this.onNewPasswordChange}
						/>
					</div>
				</fieldset>
				<div className="">
		          <input
		            onClick={this.onChangePasswordSubmit}
		            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
		            type="submit"
		            value="Change password" //what is the value for??
		          />
		          <input
		            onClick={() => this.props.onChangeRoute("default")}
		            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
		            type="submit"
		            value="Cancel"
		          />
		        </div>
			</div>
		)
	}
}


export default ChangePassword;