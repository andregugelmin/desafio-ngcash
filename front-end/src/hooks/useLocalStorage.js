import { useEffect, useState } from 'react';

export default function useLocalStorage(key, initialValue) {
	const [value, setValue] = useState(() => {
		return getSavedValue(key, initialValue);
	});

	useEffect(() => {
		localStorage.setItem(key, value);
	}, [key, value]);

	function removeValue() {
		localStorage.removeItem(key);
	}

	return { storagedValue: value, setStoragedValue: setValue, removeValue: removeValue };
}

function getSavedValue(key, initialValue) {
	const savedValue = localStorage.getItem(key);
	if (savedValue) return savedValue;

	return initialValue;
}
