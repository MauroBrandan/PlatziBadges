import React from 'react'

import './styles/BadgeEdit.css'
import Hero from '../images/platziconf-logo.svg'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import PageLoading from '../components/PageLoading'
import api from '../api'

class BadgeEdit extends React.Component {
	state = {
		loading: true,
		error: null,
		form: {
			firstName: '',
			lastName: '',
			email: '',
			jobTitle: '',
			twitterAccount: '',
		},
	}

	componentDidMount() {
		this.fetchData()
	}

	fetchData = async (e) => {
		this.setState({ loading: true, error: null })

		try {
			const data = await api.badges.read(this.props.match.params.badgeId)

			this.setState({ loading: false, form: data })
		} catch (error) {
			this.setState({ loading: false, error: error })
		}
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
			await api.badges.update(this.props.match.params.badgeId, this.state.form)
			this.setState({ loading: false })

			this.props.history.push('/badges')
		} catch (error) {
			this.setState({ loading: false, error: error })
		}
	}

	render() {
		if (this.state.loading) {
			return <PageLoading />
		}
		return (
			<React.Fragment>
				<div className='BadgeEdit__hero'>
					<img className='BadgeEdit__hero--img' src={Hero} alt='Hero' />
				</div>
				<div className='BadgeEdit__main'>
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
						error={this.state.error}
						title='Edit Attendant'
					/>
				</div>
			</React.Fragment>
		)
	}
}

export default BadgeEdit
