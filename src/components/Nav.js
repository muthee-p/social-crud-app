import { useDispatch } from "react-redux";
import { logOut } from "../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";

function NavBar() {
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    history("/login");
  };

  return (
    <nav className="nav__bar dark:bg-slate-900 bg-white z-50 shadow-xl items-center">
      <div className="w-full max-w-5xl m-auto px-5 sm:px-10">
        <div className="w-full flex justify-between items-center">
          <Link to="/">
            <h1 className="text-2xl font-bold">
              <span className="text-blue-500">Social</span>{" "}
              <span className="underline dark:text-white text-slate-900">
                App
              </span>
              <sup className="text-xs text-sky-400">beta</sup>
            </h1>
          </Link>
          <ul className="flex space-x-6 items-center ">
            <li className="link">
              <Link to="/home">Home</Link>
            </li>
            <li className="link">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="link">
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
          <ul className="flex space-x-6 items-center font-mono tracking-wide">
            <li className="dark:text-white text-slate-900">
              <button>Contact Us</button>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className={
                  "bg-sky-500 dark:text-white text-slate-900  px-4 py-2 rounded-md hover:bg-sky-700 hover:text-white"
                }
              >
                Log In
              </button>
            </li>
            <li>
              <ThemeSwitch />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
