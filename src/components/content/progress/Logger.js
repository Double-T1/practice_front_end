import React from 'react';

class Logger extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputMins: 0
		}
	}

	onInputChange = (event) => {
	    this.setState({
	     	inputMins: event.target.value
	    })
	}

	render() {
		const { onInputClick } = this.props;
		return (
			<div className="">
				<p className="f3">
					{`Record your daily input here`}
				</p>
				<div>
					<input type="number" placeholder="How many minutes?" onChange={this.onInputChange}/>
					<button onClick={() => onInputClick(this.state.inputMins)}>Submit</button>
				</div>
			</div>
		)
	}
}

export default Logger;