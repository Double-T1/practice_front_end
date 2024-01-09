import React from "react";

class ChangeName extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentName: "",
			newName: ""
		}
	}

	// onInputChange = (field, event) => {

	// }

	onCurrentNameChange = (event) => {
		this.setState({
			currentName: event.target.value
		})
	}

	onNewNameChange = (event) => {
		this.setState({
			newName: event.target.value
		})
	}

	onChangeNameSubmit = () => {
		this.props.setLoading(true);
		fetch("https://input-hours-server.onrender.com/profile/update/changeName", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: this.props.email,
				currentName: this.state.currentName,
				newName: this.state.newName
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
					<legend>Change Name</legend>	
					<div id=""> 
						<label htmlFor="inputCurrentName">Current Name: </label>
						<input 
							id="inputCurrentName"
							type="text"
							name="currentName"
							onChange={this.onCurrentNameChange}
						/>
					</div>
					<div id=""> 
						<label htmlFor="inputNewName">New Name: </label>
						<input 
							id="inputNewName"
							type="text"
							name="NewName"
							onChange={this.onNewNameChange}
						/>
					</div>
				</fieldset>
				<div className="">
		          <input
		            onClick={this.onChangeNameSubmit}
		            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
		            type="submit"
		            value="Change name" //what is the value for??
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


export default ChangeName;