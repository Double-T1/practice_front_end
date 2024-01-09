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

	onInputChange = (target) => {
		const onChange = (event) => {
			this.setState({
				[target]: event.target.value 
			})
		}
		return onChange;
	}

	//arrow function for clarity of this keyword
	onSubmitRegister = () => {
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
			if (user.id) {
				this.props.loadUser(user);
				this.props.onRouteChange("progress");
			} else {
				this.props.showAlert(user);
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
							onChange={this.onInputChange("name")}
						/>
					</div>
					<div id="email"> 
						<label htmlFor="inputEmail">Email</label>
						<input 
							id="inputEmail"
							type="text"
							name="email"
							onChange={this.onInputChange("email")}
						/>
					</div>
					<div id="password">
						<label htmlFor="inputEmail">Password</label>
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