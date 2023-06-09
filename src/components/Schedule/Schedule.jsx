import React from 'react';
import './style/Schedule.css';

function Schedule({ information }) {
	console.log(information)
	return (
		<div className='schedule'>
			<div className='schedule__container'>
				<div className='schedule__box'>
					<div className='schedule__title'>Schedule</div>
					{information.map((info) => (
						<div className='schedule__subContainer' key={info.id}>
					
							<div
								className='schedule__dates'
								key={info.id}>
								{info.dates}
							</div>
							<div
								className='schedule__location'
								key={info.location}>
								{info.location}
							</div>
						
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Schedule;
