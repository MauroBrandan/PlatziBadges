import React, { Component } from 'react'

import './styles/BadgesList.css'

export class BadgesList extends Component {
	render() {
		return (
			<ul className='BadgeList__container'>
				{this.props.badges.map((badge) => {
					return (
						<li key={badge.id}>
							<div className='BadgeList__badge-container'>
								<img src={badge.avatarUrl} alt='' className='BadgeList__badge-img' />
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
							</div>
						</li>
					)
				})}
			</ul>
		)
	}
}

export default BadgesList
