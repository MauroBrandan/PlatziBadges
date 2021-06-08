import React from 'react'

import './styles/BadgeNew.css'
import Hero from '../images/platziconf-logo.svg'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import api from '../api'

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

	handleSubmit = async (e) => {
		e.preventDefault()
		this.setState({ loading: true, error: null })

		try {
			await api.badges.create(this.state.form)
			this.setState({ loading: false })
		} catch (error) {
			this.setState({ loading: false, error: error })
		}
	}

	render() {
		return (
			<React.Fragment>
				<div className='BadgeNew__hero'>
					<img className='BadgeNew__hero--img' src={Hero} alt='Hero' />
				</div>
				<div className='BadgeNew__main'>
					<Badge
						firstName={this.state.form.firstName || 'FIRST NAME'}
						lastName={this.state.form.lastName || 'LAST NAME'}
						jobTitle={this.state.form.jobTitle || 'JOB TITTLE'}
						twitterAccount={this.state.form.twitterAccount || 'twitter'}
						email={this.state.form.email || 'EMAIL'}
					/>
					<BadgeForm
						onChange={this.handleChange}
						onSubmit={this.handleSubmit}
						formValues={this.state.form}
					/>
				</div>
			</React.Fragment>
		)
	}
}

export default BadgeNew
