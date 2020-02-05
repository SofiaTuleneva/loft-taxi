import React from 'react';
import Logo from "../Shared/Logo";

const AuthWrapper = ({children}) => {
	return (
		<div className="login">
			<div className="container">
				<div className="login__content">
					<div className="content__part">
						<Logo/>
					</div>
					<div className="content__part">
						{children}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AuthWrapper;
