import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './styles/Home.css'
import Logo from '../images/platziconf-logo.svg'
import Astronauts from '../images/astronauts.svg'

export class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<div className='Home'>
					<div className='Home__info'>
						<img src={Logo} alt='Logo' />
						<p>PRINT YOUR BADGES</p>
						<p>The easiest way to manage your conference</p>
						<Link className='btn btn-primary' to='/badges'>
							Start Now
						</Link>
					</div>
					<img className='Home__img' src={Astronauts} alt='Astronautas' />
				</div>
			</React.Fragment>
		)
	}
}

export default Home
