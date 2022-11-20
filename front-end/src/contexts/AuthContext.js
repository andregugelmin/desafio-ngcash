import { createContext, useState } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
	const { storagedValue, setStoragedValue, removeValue } = useLocalStorage('ngcash-token', '');
	const [token, setToken] = useState(storagedValue);

	function signIn(token) {
		setToken(token);
		setStoragedValue(token);
	}

	function signOut() {
		setToken(null);
		removeValue();
	}

	return <AuthContext.Provider value={{ token, signIn, signOut }}>{children}</AuthContext.Provider>;
}
