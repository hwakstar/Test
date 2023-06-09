import React, { Component } from 'react'
import Schedule from '../Schedule/Schedule'
import './style/Climb.css'


const infoA = [
    {
        id: 1, 
        dates: '25 Nov 2016',
        location: 'Vestibulum viverr'
    },
    {
        id: 2, 
        dates: '28 Nov 2016',
        location: 'Vestibulum viverr'
    },
    {
        id: 3, 
        dates: '',
        location: ''
    },
    {
        id: 4, 
        dates: '18 Dec 2016',
        location: 'Vestibulum viverr'
    },
    {
        id: 5, 
        dates: '',
        location: ''
    },
    {
        id: 6, 
        dates: '7 Jan 2017',
        location: 'Vestibulum viverr'
    },
]
const infoB = [
    {
        id: 1, 
        dates: '17 Nov 2016',
        location: 'Vestibulum viverr'
    },
    {
        id: 2, 
        dates: '',
        location: ''
    },
    {
        id: 3, 
        dates: '13 Dec 2016',
        location: 'Vestibulum viverr'
    },
    {
        id: 4, 
        dates: '28 Dec 2016',
        location: 'Vestibulum viverr'
    },
    {
        id: 5, 
        dates: '',
        location: ''
    },
    {
        id: 6, 
        dates: '9 Feb 2017',
        location: 'Vestibulum viverr'
    },
]

const MountainA = (props) => {
    return (
        <Schedule information={infoA} />
    )
}

const MountainB = (props) => {
    return (
        <Schedule information={infoB} />
    )
}


class Climb extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            display: 'first',
            className: 'climb'
        };
    }
    
    changeDisplay = () => {
        let { display } = this.state;
        console.log(display)
        this.setState({display: display === 'first' ? 'second' : 'first' });
    }
    
    renderInner() {
        let { display } = this.state;
        console.log(display)
        if (display === 'first') {
            return <MountainA/>
        } else if (display === 'second') {
            return <MountainB />
        }
    }
    
    changeClassName = () => {
        let { className } = this.state;
        this.setState({className: className === 'climb' ? 'climbNewBg' : 'climb' });
    }
    
    renderClassName() {
        let { display, className } = this.state;
        console.log(className)
        if (display === 'first') {
            return 'climb'
        } else if (display === 'second') {
            return 'climbNewBg'
        }
    }

    render(){
        return (
            <div className={this.renderClassName()} id="team">
                <div className='climb__container'>
                    <div className="climb__heading">
                        <div className="climb__number">02.</div>
                        <div className="climb__title">CLIMB</div>
                        <div className="climb__description">
                            Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit
                            ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue.
                        </div>
                    </div>
                    <div className="climb__navbar">
                        <ul>
                            <li>
                                <button onClick={this.changeDisplay} >MOUNTAIN 1</button>
                            </li>
                            <li>
                                <button onClick={this.changeDisplay} >MOUNTAIN 2</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='climb__scheduleContainer'>
                    {this.renderInner()}
                </div>
            </div>
        )
    }
}

export default Climb
