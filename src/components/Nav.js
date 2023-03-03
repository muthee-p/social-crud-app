import { useDispatch } from 'react-redux';
import { logOut } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const dispatch = useDispatch();
const history = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    history('/login')
  };

  return (
    <nav className='bt-2'>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><button onClick={handleLogout}>Log out</button></li>
      </ul>
    </nav>
  );
}

export default NavBar;
