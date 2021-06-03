import React from 'react'

import './styles/Badge.css'
import confLogo from '../images/badge-header.svg'

class Badge extends React.Component {
	render() {
		return (
			<div className='Badge'>
				<div className='Badge__header'>
					<img src={confLogo} alt='Logo de la conferencia' />
				</div>

				<div className='Badge__section-name'>
					<img
						className='Badge__avatar'
						src='https://es.gravatar.com/userimage/177088679/ede52fae594be9df19c45c39347a88eb.jpg?size=200'
						alt='Avatar'
					/>
					<h1>
						Mauro <br /> Brandan
					</h1>
				</div>

				<div className='Badge__section-info'>
					<h3>Frontend Developer</h3>
					<p>@maurobrandan.mb</p>
				</div>

				<div className='Badge__footer'>#platziconf</div>
			</div>
		)
	}
}

export default Badge
