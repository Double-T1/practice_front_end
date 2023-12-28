import React from 'react';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
		}
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
	onSubmitSignIn = () => {
		fetch("https://input-hours-server.onrender.com/signin", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password
			})
		})
		.then(res => res.json())
		.then(user => {
			if (user.id) {
				this.props.loadUser(user);
				this.props.onRouteChange("home");
			}
		})
	}

	render() {
		return (
			<div>
				<fieldset>
					<legend>Sign in</legend>	
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
	                onClick={this.onSubmitSignIn}
	                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
	                type="submit"
	                value="Sign in" //what is the value for??
	              />
	            </div>
			</div>
		)
	}
}


export default SignIn;