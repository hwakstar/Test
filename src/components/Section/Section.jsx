import React from 'react';
import './style/Section.css';

const Section = (props) => {
	return <div className='section'>{props.children}</div>;
};

export default Section;
