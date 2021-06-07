import React from 'react'

import './styles/Home.css'
import astronaut from '../images/not-found.webp'

function NotFound() {
	return (
		<React.Fragment>
			<div className='Home'>
				<img src={astronaut} alt='astronauta' />
			</div>
		</React.Fragment>
	)
}

export default NotFound
