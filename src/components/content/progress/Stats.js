import React from "react";


const Stats = ({totalMins, totalDays, streaks}) => {
	return (
		<div>
			<h4>Summary so far</h4>
			<p>{`In all, you've logged in ${totalMins} minutes.`}</p>
			<p>{`You've stayed consistent for a total of ${totalDays} days.`}</p>
			<p>{`And you're on a ${streaks} day(s) streak of logging in, keep it going :)`}</p>
		</div>
	)
}

export default Stats;