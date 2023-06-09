import React from 'react';
import './style/Sidebar.css';

const Sidebar = (props) => {
	let sidebarClasses = ['sidebar'];
	if (props.show) {
		sidebarClasses = ['sidebar open'];
	}
	return (
		<nav className={sidebarClasses}>
			<ul>
				<li>
					<a href='#history'>01. HISTORY</a>
				</li>
				<li>
					<a href='#team'>02. TEAM</a>
				</li>
			</ul>
		</nav>
	);
};

export default Sidebar;
