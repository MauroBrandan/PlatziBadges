import React, { Component } from 'react'

import './styles/BadgeForm.css'

export class BadgeForm extends Component {
	handleClick = (e) => {
		console.log('Button was clicked')
	}

	render() {
		return (
			<div>
				<h1 className='form__title'>New Attendant</h1>

				<form onSubmit={this.props.onSubmit} className='form__container'>
					<label>First Name</label>
					<input
						onChange={this.props.onChange}
						type='text'
						name='firstName'
						value={this.props.formValues.firstName}
					/>

					<label>Last Name</label>
					<input
						onChange={this.props.onChange}
						type='text'
						name='lastName'
						value={this.props.formValues.lastName}
					/>

					<label>Email</label>
					<input
						onChange={this.props.onChange}
						type='email'
						name='email'
						value={this.props.formValues.email}
					/>

					<label>Job Title</label>
					<input
						onChange={this.props.onChange}
						type='text'
						name='jobTitle'
						value={this.props.formValues.jobTitle}
					/>

					<label>Twitter</label>
					<input
						onChange={this.props.onChange}
						type='text'
						name='twitterAccount'
						value={this.props.formValues.twitterAccount}
					/>

					<button onClick={this.handleClick} className='btn btn-primary'>
						Save
					</button>

					{this.props.error && <p>{this.props.error.message}</p>}
				</form>
			</div>
		)
	}
}

export default BadgeForm
