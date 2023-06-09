import React from 'react';
import './style/SidebarBackdrop.css';

const SidebarBackdrop = (props) => (
	<div
		className='sidebarBackdrop'
		onClick={props.sidebarBackdropClickHandler}
	/>
);

export default SidebarBackdrop;
