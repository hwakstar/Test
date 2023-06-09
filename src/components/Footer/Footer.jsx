import React from 'react';
import logoB from '../../images/LogoB.png'
import './style/Footer.css';

function Footer() {
	return (
		<div className='footer'>
			<div className="footer__container">
				<div className="footer__logo">
					<div className="footer__imgContainer">
					<img src={logoB} alt="sub Logo"/>
					</div>
					<div className="footer__logoText">
						LOSANGELES
						<br/>
						<span>
						MOUNTAINS
						</span>
					</div>
				</div>
				<div className="footer__copyright">
					<div className="footer__copyrightText">COPYRIGHT 2016. ALL RIGHTS RESERVED.</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
