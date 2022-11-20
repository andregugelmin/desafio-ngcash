import api from './api';
import { getConfig } from './config';

export async function cashout(token, data) {
	const config = getConfig(token);

	const response = await api.post('/cashout', data, config);
	return response.data;
}
