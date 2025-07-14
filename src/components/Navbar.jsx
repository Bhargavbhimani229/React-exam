import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authSlice';

const Navbar = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-black"

    >
      <div className="container">
        <Link className="navbar-brand text-white fw-bold" to="/">
          StudentMgmt
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          {isAuthenticated && (
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  Students
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/add">
                  Add Student
                </Link>
              </li>
            </ul>
          )}

          <ul className="navbar-nav ms-auto">
            {isAuthenticated ? (
              <li className="nav-item">
                <button className="btn btn-outline-light" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="btn btn-outline-light" to="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
