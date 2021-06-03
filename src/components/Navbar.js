import React from 'react'

import './styles/Navbar.css'
import logo from '../images/logo.svg'

class Navbar extends React.Component {
	render() {
		return (
			<div className='Navbar'>
				<a className='Navbar__brand' href='/'>
					<img className='Navbar__brand-logo' src={logo} alt='Logo' />
					<span>Platzi</span>
					<span>Badges</span>
				</a>
			</div>
		)
	}
}

export default Navbar
