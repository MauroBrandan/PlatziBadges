import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './styles/BadgesList.css'
import Gravatar from './Gravatar'

export class BadgesList extends Component {
	render() {
		if (this.props.badges.length === 0) {
			return (
				<div>
					<h3>No badges were found</h3>
					<Link className='btn btn-primary' to='/badges/new'>
						Create new badge
					</Link>
				</div>
			)
		}
		return (
			<ul className='BadgeList__container'>
				{this.props.badges.reverse().map((badge) => {
					return (
						<li key={badge.id}>
							<div className='BadgeList__badge-container'>
								<Gravatar
									email={badge.email}
									alt=''
									className='BadgeList__badge-img'
								/>
								<div className='BadgeList__badge-info'>
									<p>
										{badge.firstName} {badge.lastName}
									</p>
									<div>
										<span className='twitter-logo'></span>
										<p>@{badge.twitterAccount}</p>
									</div>
									<p>{badge.jobTitle}</p>
								</div>
								<Link
									to={`/badges/${badge.id}`}
									className='BadgeList__edit btn btn-primary'
								>
									Details
								</Link>
							</div>
						</li>
					)
				})}
			</ul>
		)
	}
}

export default BadgesList
