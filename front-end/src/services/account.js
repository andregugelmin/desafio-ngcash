import api from './api';
import { getConfig } from './config';

export async function getAccountData(token) {
	const config = getConfig(token);
	const response = await api.get('/account', config);
	return response.data;
}
