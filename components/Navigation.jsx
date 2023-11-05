import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar-expand-lg navbar-dark bg-pink">
      <div className="container-fluid d-flex justify-content-between align-items center">
        <div className="navbar-logo">
          <NavLink to ="/" className="navbar-brand">
            James professional portfolio
          </NavLink>
        </div>
        <div className="navbar-menu">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="#navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/aboutMe" className="nav-link active" end>
                  About Me
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link active" end>
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/portfolio" className="nav-link active" end>
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/pages/resume" className="nav-link active" end>
                  Resume
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
