import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAlert } from 'react-alert';
import { Link, useNavigate } from 'react-router-dom';

import { Main } from './style';
import useSignUp from '../../hooks/api/useSignUp';

export default function SignUpPage() {
	const { signupData, loadingSignUp, signup, signupError } = useSignUp();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const navigate = useNavigate();
	const alert = useAlert();

	useEffect(() => {
		if (signupError) {
			alert.error(signupError.response.data);
		}
	}, [signupError]);
	useEffect(() => {
		if (signupData === 'Created') {
			alert.success('Account created!');
			navigate('/');
		}
	}, [signupData]);

	function submitLogin(e) {
		e.preventDefault();
		if (confirmPassword !== password) {
			alert.error('Password and confirmation must be equals!');
			return;
		}

		const signupData = {
			username,
			password,
			confirmPassword,
		};

		handleSignUp(signupData);
	}

	const handleSignUp = async (user) => {
		await signup(user);
		//if (!signupError) navigate('/');
	};

	return (
		<Main>
			<h1>Create your ng.account!</h1>
			<form onSubmit={(e) => submitLogin(e)}>
				<div className="input-label">
					<label>Username</label>
					<input
						type="text"
						onChange={(e) => setUsername(e.target.value)}
						required
						minLength={3}
						pattern={'[a-zA-z]{3,}'}
						disabled={loadingSignUp ? true : false}
					></input>
				</div>

				<div className="input-label">
					<label>Password</label>
					<input
						type="password"
						onChange={(e) => setPassword(e.target.value)}
						required
						minLength={8}
						disabled={loadingSignUp ? true : false}
					></input>
				</div>
				<div className="input-label">
					<label>Confirm Password</label>
					<input
						type="password"
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
						disabled={loadingSignUp ? true : false}
					></input>
				</div>

				<button type="submit" disabled={loadingSignUp ? true : false}>
					Sign Up
				</button>
			</form>
			<Link style={{ textDecoration: 'none' }} to={`/`}>
				<p>Already have an account? Sign In!</p>
			</Link>
		</Main>
	);
}
