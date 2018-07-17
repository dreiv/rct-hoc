import React from 'react'

const UserProfile = ({ loading, user }) =>
	loading ? (
		<div>loading...</div>
	) : (
		<div>
			{user.name}: {user.age}
		</div>
	)
