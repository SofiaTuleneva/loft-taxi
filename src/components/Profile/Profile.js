import React from 'react';
import ProfileForm from './ProfileForm';
import AuthWrapper from "../Shared/AuthWrapper";

const Profile = () => {
	return (
		<AuthWrapper>
			<ProfileForm/>
		</AuthWrapper>
	);
};

export default Profile;
