import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';

import { Main } from './style';
import useAuth from '../../hooks/useAuth';
import useLogin from '../../hooks/api/useLogin';
import Logo from '../../assets/images/ngcashlogo.png';

export default function SignInPage() {
	const { signIn } = useAuth();
	const alert = useAlert();

	const { loadingLogin, login, loginError, loginData } = useLogin();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	useEffect(() => {
		if (loginError) {
			alert.error(loginError.response.data);
		}
	}, [loginError]);

	useEffect(() => {
		if (loginData) {
			signIn(loginData.token);
			alert.success('Login success');
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
			<img src={Logo} alt="logo" />
			<form onSubmit={(e) => submitLogin(e)}>
				<div className="input-label">
					<label>Username</label>
					<input
						type="text"
						onChange={(e) => setUsername(e.target.value)}
						required
						disabled={loadingLogin ? true : false}
					></input>
				</div>
				<div className="input-label">
					<label>Password</label>
					<input
						type="password"
						onChange={(e) => setPassword(e.target.value)}
						required
						disabled={loadingLogin ? true : false}
					></input>
				</div>

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
