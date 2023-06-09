import React, { Component } from 'react';
// Components
import Header from '../../components/Header/Header';
import HeroImg from '../../components/HeroImg/HeroImg';
import History from '../../components/History/History';
import Section from '../../components/Section/Section';
import Sidebar from '../../components/Sidebar/Sidebar';
import SidebarBackdrop from '../../components/SidebarBackdrop/SidebarBackdrop';
import SubSection from '../../components/SubSection/SubSection';
import Climb from '../../components/Climb/Climb';
import Footer from '../../components/Footer/Footer';
// images
import heroImg from '../../images/HeroImg.png';
// style
import './style/App.css';

class App extends Component {
	state = {
		sidebarOpen: false,
	};

	sidebarClickHandler = () => {
		this.setState((prevState) => {
			return { sidebarOpen: !prevState.sidebarOpen };
		});
	};

	sidebarBackdropClickHandler = () => {
		this.setState({ sidebarOpen: false });
	};

	render() {
		let sidebarBackdrop;

		if (this.state.sidebarOpen) {
			sidebarBackdrop = (
				<SidebarBackdrop
					sidebarBackdropClickHandler={
						this.sidebarBackdropClickHandler
					}
				/>
			);
		}
		return (
			<div className='app'>
				<Header
					sidebarClickHandler={this.sidebarClickHandler}
				/>
				<Sidebar show={this.state.sidebarOpen} />
				{sidebarBackdrop}
				<Section>
					<HeroImg src={heroImg} />
					<SubSection />
				</Section>
				<Section>
					<History />
				</Section>
				<Section>
					<Climb />
				</Section>
				<Footer />
			</div>
		);
	}
}

export default App;
