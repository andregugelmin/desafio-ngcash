import * as service from '../../services/account';
import useAsync from '../useAsync';

export default function useAccount() {
	const { data, loading, act } = useAsync(service.getAccountData, false);

	return {
		account: data,
		loadingAccount: loading,
		getAccount: act,
	};
}
