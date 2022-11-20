import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Main } from './style';

export default function Header(props) {
	const { signOut } = useAuth();

	const navigate = useNavigate();

	function handleSignout() {
		signOut();
		navigate('/');
	}
	return (
		<Main>
			<button onClick={handleSignout}>Sign Out</button>
		</Main>
	);
}
