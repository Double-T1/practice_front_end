import React from 'react';

const Logger = ({onInputChange, onInputClick}) => {
	return (
		<div className="">
			<p className="f3">
				{`Record your daily input here`}
			</p>
			<div>
				<input type="number" placeholder="How many minutes?" onChange={onInputChange}/>
				<button onClick={onInputClick}>Submit</button>
			</div>
		</div>
	)
}

export default Logger;