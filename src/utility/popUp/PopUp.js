import React from "react";
import "./PopUp.css";

class PopUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputDailyGoal: 0
		}
	}

	onInputChange = (e) => {
		this.setState({
			inputDailyGoal: e.target.value
		})
	}

	onSubmitDailyGoal = () => {
		this.props.setLoading(true);
		fetch("https://input-hours-server.onrender.com/updateDailyGoal", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				id: this.props.id,
				newDailyGoal: this.state.inputDailyGoal
			})
		})
		.then(res => {
			return res.json()
		})
		.then(dailyGoal => {
			this.props.onChangeDailyGoal(dailyGoal.dailygoal);
			this.props.setLoading(false);
			this.props.setShowPopUp();
		})
		.catch(error => console.log(error));	
	}

	render() {
		const {dailyGoal, setShowPopUp} = this.props;
		return (
			<div className="popup-container">
				<div className="popup-inner">
					<button className="close-btn" onClick={setShowPopUp}>close</button>
					<h1>change your daily goal</h1>
					<h3>{`current daily goal: ${dailyGoal} mins`}</h3>
					<div id=""> 
						<label htmlFor="newDailyGoal">New Daily Goal: </label>
						<input 
							id="newDailyGoal"
							type="text"
							name="newDailyGoal"
							onChange={this.onInputChange}
						/>
					</div>
					<br></br>
					<div>
						<input
							onClick={this.onSubmitDailyGoal}
							className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
							type="submit"
							value="Change daily goal" //what is the value for??
						/>
					</div>
				</div>
			</div>
		)
	}
}

export default PopUp;




