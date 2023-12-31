import React from 'react';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
		}
	}

	onInputChange = (target) => {
		const onChange = (event) => {
			this.setState({
				[target]: event.target.value 
			})
		}
		return onChange;
	}

	//arrow function for the scope of 'this' keyword
	onSubmitSignIn = () => {
		this.props.setLoading(true);
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
			this.props.setLoading(false);
			if (user.id) {
				this.props.loadUser(user);
				this.props.onRouteChange("progress");
			} else {
				this.props.showAlert(user,false);
			}
		})
	}

	render() {
		return (
			<div>
				<fieldset>
					<legend>Sign in</legend>	
					<div id="email"> 
						<label htmlFor="inputEmail">Email: </label>
						<input 
							id="inputEmail"
							type="text"
							name="email"
							onChange={this.onInputChange("email")}
						/>
					</div>
					<div id="password">
						<label htmlFor="inputEmail">Password: </label>
						<input 
							id="inputPassword"
							type="text"
							name="password"
							onChange={this.onInputChange("password")}
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