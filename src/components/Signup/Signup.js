import React from 'react';
import SignupForm from './SignupForm';
import Logo from "../Login/Logo";

const SignUp = () => {
	return (
		<>
			<div className="login">
				<div className="container">
					<div className="login__content">
						<div className="content__part">
							<Logo/>
						</div>
						<div className="content__part">
							<SignupForm/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
};

export default SignUp;