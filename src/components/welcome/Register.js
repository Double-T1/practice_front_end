import React from 'react';

class Register extends React.Component {
	//why pass props here ???
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			password: ""
		}
	}

	onNameChange = (event) => {
		this.setState({
			name: event.target.value
		})
	}

	onEmailChange = (event) => {
		this.setState({
			email: event.target.value
		})
	}

	onPasswordChange = (event) => {
		this.setState({
			password: event.target.value
		})
	}

	//arrow function for clarity of this keyword
	onSubmitRegister = () => {
		console.log(this.props);
		fetch("https://input-hours-server.onrender.com/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				name: this.state.name,
				email: this.state.email,
				password: this.state.password
			})
		})
		.then(res => res.json())
		.then(user => {
			if (user) {
				this.props.loadUser(user);
				this.props.onRouteChange("progress");
			}
		})
	}

	render() {
		return (
			<div>
				<fieldset>
					<legend>Register your account</legend>	
					<div id="name">
						<label htmlFor="inputName">Name</label>
						<input 
							id="inputName"
							type="text"
							name="name"
							onChange={this.onNameChange}
						/>
					</div>
					<div id="email"> 
						<label htmlFor="inputEmail">Email</label>
						<input 
							id="inputEmail"
							type="text"
							name="email"
							onChange={this.onEmailChange}
						/>
					</div>
					<div id="password">
						<label htmlFor="inputEmail">Password</label>
						<input 
							id="inputPassword"
							type="text"
							name="password"
							onChange={this.onPasswordChange}
						/>
					</div>
				</fieldset>
				<div className="">
	              <input
	                onClick={this.onSubmitRegister}
	                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
	                type="submit"
	                value="Register"
	              />
	            </div>
			</div>
		)
	}

}




export default Register;