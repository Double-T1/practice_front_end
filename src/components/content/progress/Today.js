import React from 'react';
import { FaPencil } from "react-icons/fa6";

const Today = ({name, todayMins, dailyGoal}) => {
	return (
		<div className="ma3 b ph3 pv2 b--dashed bw1 br3 dib">
			<div className="back f3" >
				{`${name}, today your log-in minutes are....`}
			</div>
			<div className="black f1" >
				{`${todayMins}`}
			</div>
			<p>{`your daily goal is ${dailyGoal} minutes`}</p>
			{
				dailyGoal > todayMins ?
				( <p>{`you are ${dailyGoal - todayMins} behind, all it takes is a bit more effort.`}</p> ) :
				( <p>{`you are ${todayMins - dailyGoal} minutes ahead, keep up the good work!`}</p> )
			}
			<p className="bg-blue white pa1 br3 dib dim"> <FaPencil /> change your daily goal</p>
		</div>
	)
}

export default Today;


