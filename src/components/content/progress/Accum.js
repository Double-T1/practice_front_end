import React from 'react';

const Accum = ({name, todayMins}) => {
	return (
		<div>
			<div className="back f3" >
				{`${name}, your currently logged time is....`}
			</div>
			<div className="black f1" >
				{`${todayMins}`}
			</div>
		</div>
	)
}

export default Accum;