import React, { useEffect } from 'react';
import { useState } from 'react';
import { Main } from './style';
import { Link, useNavigate } from 'react-router-dom';
import useSignUp from '../../hooks/api/useSignUp';

export default function SignUpPage() {
	const { loadingSignUp, signup, signupError } = useSignUp();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const navigate = useNavigate();

	useEffect(() => {
		if (signupError) {
			alert('Error signing up!');
		}
	}, [signupError]);

	function submitLogin(e) {
		e.preventDefault();
		if (confirmPassword !== password) {
			alert('Confirmação de senha esta diferente!');
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
			<h1>NG CASH</h1>
			<form onSubmit={(e) => submitLogin(e)}>
				<label>Username</label>
				<input
					type="text"
					onChange={(e) => setUsername(e.target.value)}
					required
					minLength={3}
					pattern={'[a-zA-z]{3,}'}
					disabled={loadingSignUp ? true : false}
				></input>

				<label>Password</label>
				<input
					type="password"
					onChange={(e) => setPassword(e.target.value)}
					required
					minLength={8}
					disabled={loadingSignUp ? true : false}
				></input>

				<label>Confirm Password</label>
				<input
					type="password"
					onChange={(e) => setConfirmPassword(e.target.value)}
					required
					disabled={loadingSignUp ? true : false}
				></input>

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
