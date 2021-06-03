import React from 'react'

import './styles/BadgeNew.css'
import Navbar from '../components/Navbar'
import Badge from '../components/Badge'
import Hero from '../images/badge-header.svg'

class BadgeNew extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className='BadgeNew__hero'>
					<img className='BadgeNew__hero--img' src={Hero} alt='Hero' />
				</div>
				<div className='container'>
					<Badge
						firstName='Mauro'
						lastName='Brandan'
						jobTitle='Frontend Developer'
						twitterAccount='maurobrandan'
						avatarUrl='https://es.gravatar.com/userimage/177088679/ede52fae594be9df19c45c39347a88eb.jpg?size=200'
					/>
				</div>
			</div>
		)
	}
}

export default BadgeNew
