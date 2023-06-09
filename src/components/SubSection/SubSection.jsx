import React from 'react';
import logo from '../../images/Logo.png';
import './style/SubSection.css';

function SubSection() {
	return (
		<div className='subSection'>
			<div className='subSection__container'>
				<div className='subSection__logo'>
					<img src={logo} alt='sub Logo' />
					<div className='subSection__logoText'>
						LOSANGELES
						<br />
						<span>MOUNTAINS</span>
					</div>
				</div>
				<div className='subSection__navigationItems'>
					<ul>
						<li>
							<a href='#history'>01. HISTORY</a>
						</li>
						<li>
							<a href='#team'>02. TEAM</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default SubSection;
