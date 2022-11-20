import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import AccountPage from './pages/AccountPage';

import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

export default function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<SignInPage />} />
					<Route path="/signup" element={<SignUpPage />} />
					<Route path="/account" element={<AccountPage />} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}
