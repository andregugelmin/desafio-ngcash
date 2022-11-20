import useAsync from '../useAsync';
import * as service from '../../services/authentication';

export default function useLogin() {
	const { data, loading, act, error } = useAsync(service.signin, false);

	return {
		loadingLogin: loading,
		login: act,
		loginError: error,
		loginData: data,
	};
}
