import React from 'react'
import { Link } from 'react-router-dom'

import './styles/BadgeDetails.css'
import confLogo from '../images/platziconf-logo.svg'
import Badge from '../components/Badge'
import DeleteBadgeModal from '../components/DeleteBadgeModal'

function BadgeDetails(props) {
	const badge = props.badge

	return (
		<>
			<div className='BadgeDetails__hero'>
				<img src={confLogo} alt='logo' />
				<div className='BadgeDetails__hero-attendant-name'>
					<h1>
						{badge.firstName} {badge.lastName}
					</h1>
				</div>
			</div>

			<div className='BadgeDetails__container'>
				<div className='BadgeDetails__badge'>
					<Badge
						firstName={badge.firstName}
						lastName={badge.lastName}
						email={badge.email}
						twitterAccount={badge.twitterAccount}
						jobTitle={badge.jobTitle}
					/>
				</div>
				<div className='BadgeDetails__actions'>
					<h2>Actions:</h2>
					<Link to={`/badges/${badge.id}/edit`} className='btn btn-primary'>
						Edit
					</Link>
					<button onClick={props.onOpenModal} className='btn btn-danger'>
						Delete
					</button>
					<DeleteBadgeModal
						isOpen={props.modalIsOpen}
						onClose={props.onCloseModal}
						onDeleteBadge={props.onDeleteBadge}
					/>
				</div>
			</div>
		</>
	)
}

export default BadgeDetails
