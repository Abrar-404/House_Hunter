import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import '../Styles/registerbtn.css';

const Navbar = () => {
  const navs = (
    <>
      <Link to="/">
        <button class="bittu">
          <span class="bittu-content">Home </span>
        </button>
      </Link>
      <button class="bittu">
        <span class="bittu-content">Houses </span>
      </button>
      <Link to="/dashboard">
        <button class="bittu">
          <span class="bittu-content">Dashboard </span>
        </button>
      </Link>
      <Link to="/rentedhouse">
        <button class="bittu">
          <span class="bittu-content">Rented House </span>
        </button>
      </Link>
    </>
  );

  return (
    <div className="sticky top-0 z-50">
      <div className="navbar shadow-lg bg-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navs}
            </ul>
          </div>
          <Link to="/">
            <img className="w-[250px] h-[80px]" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-5 px-1">{navs}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/login">
            <button class="bittu">
              <span class="bittu-content">Login </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
