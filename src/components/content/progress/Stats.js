import React from "react";


const Stats = ({totalMins, totalDays, streaks}) => {
	return (
		<div>
			<p>{`In all, you've logged in ${totalMins} minutes.`}</p>
			<p>{`You've stayed consistent for a total of ${totalDays} days.`}</p>
			<p>{`And you're on a ${streaks} day(s) streak of logging in, well done :)`}</p>
		</div>
	)
}

export default Stats;