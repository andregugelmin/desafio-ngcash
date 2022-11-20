import React, { useEffect, useState } from 'react';
import { Main } from './style';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useLogin from '../../hooks/api/useLogin';

export default function SignInPage() {
	const { signIn } = useAuth();
	const { loadingLogin, login, loginError, loginData } = useLogin();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	useEffect(() => {
		if (loginError) {
			alert(loginError.response.data);
		}
	}, [loginError]);

	useEffect(() => {
		if (loginData) {
			signIn(loginData.token);
			navigate('/account');
		}
	}, [loginData]);

	function submitLogin(e) {
		e.preventDefault();

		const data = {
			username,
			password,
		};

		handleLogin(data);
	}

	const handleLogin = async (data) => {
		await login(data);
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
					disabled={loadingLogin ? true : false}
				></input>

				<label>Password</label>
				<input
					type="password"
					onChange={(e) => setPassword(e.target.value)}
					required
					disabled={loadingLogin ? true : false}
				></input>

				<button type="submit" required disabled={loadingLogin ? true : false}>
					Log In
				</button>
			</form>
			<Link style={{ textDecoration: 'none' }} to={`/signup`}>
				<p>Don't have an account? Sign Up!</p>
			</Link>
		</Main>
	);
}
