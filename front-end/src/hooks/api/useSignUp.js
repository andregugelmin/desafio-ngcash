import useAsync from '../useAsync';
import * as service from '../../services/authentication';

export default function useSignUp() {
	const { loading, act, error } = useAsync(service.signup, false);

	return {
		loadingSignUp: loading,
		signup: act,
		signupError: error,
	};
}
