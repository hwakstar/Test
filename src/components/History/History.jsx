import React from 'react';
import CarouselSection from '../CarouselSection/CarouselSection';
import './style/History.css';

function History() {
	return (
		<div className='history' id='history'>
			<div className='history__container'>
				<div className='history__heading'>
					<div className='history__number'>01.</div>
					<div className='history__title'>HISTORY</div>
				</div>
				<div className='history__description'>
					<div className='history__descriptionContainer'>
						<div className='history__descriptionText'>
							Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Proin in ante viverra, rutrum
							erat rutrum, consectetur mi. Proin at maximus
							est. Nullam purus ex, iaculis sed erat sed,
							blandit tincidunt quam. Cras scelerisque id
							quam sed dignissim Pellentesque urna nunc,
							gravida quis hendrerit ac, tristique ut quam.
							Vivamus suscipit dignissim tortor nec congue.
						</div>
					</div>
				</div>
			</div>
			<div className='history__carousel'>
				<CarouselSection />
			</div>
		</div>
	);
}

export default History;
