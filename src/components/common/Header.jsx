import { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { HiLightBulb } from "react-icons/hi2";
import { FaList } from "react-icons/fa";
import { UserContext } from "../../context/UserProvider";
import { NavLink } from "react-router-dom";
function Header() {
  const { logout } = useContext(UserContext);
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-warning">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">
            LOGO
          </a>
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
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link fs-4 active"
                  aria-current="page"
                  to="/"
                >
                  <FaList />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fs-4 active"
                  aria-current="page"
                  to="/suggestions"
                >
                  <HiLightBulb />
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link fs-4"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <CgProfile />
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <NavLink
                      className="dropdown-item text-center 
                    text-decoration-none text-black"
                      to="/profile"
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <button
                      className="dropdown-item text-center text-danger"
                      onClick={logout}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
