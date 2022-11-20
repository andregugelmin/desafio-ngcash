import useAsync from '../useAsync';
import * as service from '../../services/transaction';

export default function useCashout() {
	const { data, loading, act, error } = useAsync(service.cashout, false);

	return {
		loadingCashout: loading,
		cashout: act,
		cashoutError: error,
		cashoutData: data,
	};
}
