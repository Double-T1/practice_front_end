import React from "react";

class Profile extends React.Component {
	constructor(props) {
		super(props);
	}

	onSubmitDelete = () => {
		fetch(`https://input-hours-server.onrender.com/delete/${this.props.id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			}
		})
		.then(res => res.json())
		.then(name => {
			//console.log(`${name.name}, you're deleted`);
			this.props.onRouteChange("home");
		})
	}

	render() {
		const {name, email} = this.props;
		return (
			<div>
				<div> 
					<h1>This page shows the setting and delete account option</h1>
				</div>
				<div>
					<p>{`User name: ${name}`}</p>
					<p>{`Email: ${email}`}</p>
					<p>change password?</p>
				</div>
				<div className="">
					<input
						onClick={this.onSubmitDelete}
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