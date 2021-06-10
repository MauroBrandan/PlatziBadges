import React from 'react'
import { Link } from 'react-router-dom'

import './styles/BadgesList.css'
import Gravatar from './Gravatar'

function useSearchBadges(badges) {
	const [query, setQuery] = React.useState('')
	const [filteredBadges, setFilteredBadges] = React.useState(badges)

	React.useMemo(() => {
		const result = badges.filter((badge) => {
			return `${badge.firstName}${badge.lastName}`
				.toLowerCase()
				.includes(query.toLowerCase())
		})

		setFilteredBadges(result)
	}, [badges, query])

	return { query, setQuery, filteredBadges }
}

function BadgesList(props) {
	const badges = props.badges

	const { query, setQuery, filteredBadges } = useSearchBadges(badges)

	if (filteredBadges.length === 0) {
		return (
			<div className='BadgesList'>
				<div className='search'>
					<label>Filter Badges</label>
					<input
						type='text'
						value={query}
						onChange={(e) => {
							setQuery(e.target.value)
						}}
					/>
				</div>

				<h3>No badges were found</h3>
				<Link className='btn btn-primary' to='/badges/new'>
					Create new badge
				</Link>
			</div>
		)
	}
	return (
		<div className='BadgesList'>
			<div className='search'>
				<label>Filter Badges</label>
				<input
					type='text'
					value={query}
					onChange={(e) => {
						setQuery(e.target.value)
					}}
				/>
			</div>
			<ul className='BadgeList__container'>
				{filteredBadges.reverse().map((badge) => {
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
		</div>
	)
}

export default BadgesList
