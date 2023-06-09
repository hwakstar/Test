import React, { Component } from 'react'
import Carousel from 'react-elastic-carousel'
import carouseImgA from '../../images/carouseImgA.png'
import carouseImgB from '../../images/carouseImgB.png'
import './style/CarouselSection.css'


export class CarouselSection extends Component {
	state = {
		items: [
			{id: 1, title: 'Pic #1', src: carouseImgA},
			{id: 2, title: 'Pic #2', src: carouseImgB},
			{id: 3, title: 'Pic #3', src: carouseImgA},
			{id: 4, title: 'Pic #4', src: carouseImgB},
			{id: 5, title: 'Pic #5', src: carouseImgA},
			{id: 6, title: 'Pic #6', src: carouseImgB},
			{id: 7, title: 'Pic #7', src: carouseImgA},
			{id: 8, title: 'Pic #8', src: carouseImgB},
			{id: 9, title: 'Pic #9', src: carouseImgA},
			{id: 10, title: 'Pic #10', src: carouseImgB},
			{id: 11, title: 'Pic #11', src: carouseImgA},
			{id: 12, title: 'Pic #12', src: carouseImgB},
		]
	}

	render() {
		const { items } = this.state;
		return (
			<div className='CarouselSection'>
				<Carousel itemsToScroll={4} itemsToShow={4} showArrows={false} >
					{items.map(item => <img key={item.id} src={item.src} alt={item.title} />)}
				</Carousel>
			</div>
		)
	}
}

export default CarouselSection
