import useAsync from '../useAsync';
import * as service from '../../services/authentication';

export default function useSignUp() {
	const { data, loading, act, error } = useAsync(service.signup, false);

	return {
		signupData: data,
		loadingSignUp: loading,
		signup: act,
		signupError: error,
	};
}
