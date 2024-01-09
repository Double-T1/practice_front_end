import React from "react";

class ChangeEmail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentEmail: "",
			newEmail: ""
		}
	}

	// onInputChange = (field, event) => {

	// }

	onCurrentEmailChange = (event) => {
		this.setState({
			currentEmail: event.target.value
		})
	}

	onNewEmailChange = (event) => {
		this.setState({
			newEmail: event.target.value
		})
	}

	onChangeEmailSubmit = () => {
		this.props.setLoading(true);
		fetch("https://input-hours-server.onrender.com/profile/update/changeEmail", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				currentEmail: this.state.currentEmail,
				newEmail: this.state.newEmail
			})
		})
		.then(res => {
			return res.json();
		})
		.then(user => {
			this.props.setLoading(false);
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
					<legend>Change Email</legend>	
					<div id=""> 
						<label htmlFor="inputCurrentEmail">Current Email: </label>
						<input 
							id="inputCurrentEmail"
							type="text"
							name="currentEmail"
							onChange={this.onCurrentEmailChange}
						/>
					</div>
					<div id=""> 
						<label htmlFor="inputNewEmail">New Email: </label>
						<input 
							id="inputNewEmail"
							type="text"
							name="NewEmail"
							onChange={this.onNewEmailChange}
						/>
					</div>
				</fieldset>
				<div className="">
		          <input
		            onClick={this.onChangeEmailSubmit}
		            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
		            type="submit"
		            value="Change email" //what is the value for??
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


export default ChangeEmail;