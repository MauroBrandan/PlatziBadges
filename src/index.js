import React from 'react'
import ReactDOM from 'react-dom'

import './global.css'
import Badge from './components/Badge'

const container = document.getElementById('app')

ReactDOM.render(
	<Badge
		firstName='Mauro'
		lastName='Brandan'
		jobTitle='Frontend Developer'
		twitterAccount='maurobrandan'
		avatarUrl='https://es.gravatar.com/userimage/177088679/ede52fae594be9df19c45c39347a88eb.jpg?size=200'
	/>,
	container
)
