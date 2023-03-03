import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logIn } from '../features/auth/authSlice';
import { Link } from 'react-router-dom';


function Login() {
  const dispatch = useDispatch();
  // const isLoading = useSelector(state => state.auth.isLoading);
  const error = useSelector(state => state.auth.error);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [redirectToHome, setRedirectToHome] = useState(false);
  const user = useSelector(state => state.auth.user);
  // const history = useNavigate();

  if (user) {
    return <Navigate to="/home" />;
  }
  

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(logIn({ username, password }));
  };
  return (
    <div className='card w-[25vw] flex flex-col'>
      <h1 className='mb-[.8rem]'>Login</h1>
      <form onSubmit={handleSubmit} >
        <div className='flex flex-col'>
          <label htmlFor="username" className='mb-[.8rem]'>Username:</label>
          <input type="text" id="username" value={username} onChange={event => setUsername(event.target.value)} />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="password" className='mb-[.8rem]'>Password:</label>
          <input type="password" id="password" value={password} onChange={event => setPassword(event.target.value)} 
          className='mb-[1.5rem]'/>
        </div>
        {error && <p>{error}</p>}
        <button type="submit" 
        className='bg-[#0c1c2c] mb-[3rem]'
        >Log in</button>
        <br></br>
        <Link to='/'>Back </Link>
      </form>
    </div>
  );
}

export default Login;
  // const handleRedirect = () => setRedirectToHome(true);

  // if (redirectToHome) {
  //   return <Navigate to="/home" />;
  // }

//   return (
//     <div>
//       <h1>Login</h1>
//       {error && <div>{error}</div>}
//       <form onSubmit={handleSubmit}>
//         <label>
//           Username:
//           <input type="text" value={username} onChange={handleUsernameChange} />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input type="password" value={password} onChange={handlePasswordChange} />
//         </label>
//         <br />
//         <button type="submit" disabled={isLoading}>
//           {isLoading ? 'Logging in...' : 'Log in'}
//         </button>
//       </form>
//       {/* {error && <p>{error}</p>}
//       <button onClick={handleRedirect}>Go back to home</button> */}
//     </div>
//   );
// }

// export default Login;
