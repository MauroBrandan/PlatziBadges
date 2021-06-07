import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Navbar.css'
import logo from '../images/logo.svg'

class Navbar extends React.Component {
	render() {
		return (
			<div className='Navbar'>
				<Link className='Navbar__brand' to='/'>
					<img className='Navbar__brand-logo' src={logo} alt='Logo' />
					<span>Platzi</span>
					<span>Badges</span>
				</Link>
			</div>
		)
	}
}

export default Navbar
