import React from 'react';

const Today = ({name, todayMins}) => {
	return (
		<div className="ma3 b ph3 pv2 b--dashed bw1 br3 dib">
			<div className="back f3" >
				{`${name}, today your log-in minutes are....`}
			</div>
			<div className="black f1" >
				{`${todayMins}`}
			</div>
		</div>
	)
}

export default Today;


