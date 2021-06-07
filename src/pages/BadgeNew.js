import React from 'react'

import './styles/BadgeNew.css'
import Hero from '../images/badge-header.svg'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

class BadgeNew extends React.Component {
	state = {
		form: {
			firstName: '',
			lastName: '',
			email: '',
			jobTitle: '',
			twitterAccount: '',
		},
	}

	handleChange = (e) => {
		this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value,
			},
		})
	}

	render() {
		return (
			<React.Fragment>
				<div className='BadgeNew__hero'>
					<img className='BadgeNew__hero--img' src={Hero} alt='Hero' />
				</div>
				<div className='BadgeNew__main'>
					<Badge
						firstName={this.state.form.firstName}
						lastName={this.state.form.lastName}
						jobTitle={this.state.form.jobTitle}
						twitterAccount={this.state.form.twitterAccount}
						email={this.state.form.email}
						avatarUrl='https://es.gravatar.com/userimage/177088679/ede52fae594be9df19c45c39347a88eb.jpg?size=200'
					/>
					<BadgeForm onChange={this.handleChange} formValues={this.state.form} />
				</div>
			</React.Fragment>
		)
	}
}

export default BadgeNew
