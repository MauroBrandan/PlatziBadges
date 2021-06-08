import React from 'react'

import './styles/PageError.css'
import ErrorImg from '../images/error-service.svg'

function PageError(props) {
	return (
		<div className='PageError'>
			<h1>❌{props.error.message}❌</h1>
			<img src={ErrorImg} alt='Error' className='PageError__img' />
		</div>
	)
}

export default PageError
