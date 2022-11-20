import { useNavigate } from 'react-router-dom';
import { IoLogOutOutline } from 'react-icons/io5';
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
			<p>NG.CASH</p>
			<IoLogOutOutline className="icon" onClick={handleSignout} />
		</Main>
	);
}
