import { Outlet, Link } from "react-router-dom";

import "./Layout.css";

function Layout() {
  return (
    <>
      <nav>
        <div className="navbar-wrapper">
          <div className="navbar-logo">
            <h1 className="navbar-title">PORTSPK™</h1>
          </div>
          <div className="navbar-list">
            <ul>
              <li>
                <Link to="/Blog">Blog</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Services">Services</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Layout;
