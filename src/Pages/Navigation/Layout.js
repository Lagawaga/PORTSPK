import { Outlet, Link } from "react-router-dom";

import "./Layout.css";
import { useState } from "react";
import { SideDrawer } from "./SideDrawer";
function Layout() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const openSideDrawer = () => {
    setDrawerIsOpen(true);
  };

  const closeSideDrawer = () => {
    setDrawerIsOpen(false);
  };
  return (
    <>
      <nav>
        <SideDrawer show={drawerIsOpen} onClick={closeSideDrawer}>
          <div className="main-navigation__drawer-nav">
            <h1 className="navbar-title">PORTSPK™</h1>
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Services">Services</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
              <li>
                <Link to="/Blog">Blog</Link>
              </li>
            </ul>
          </div>
        </SideDrawer>
        <button className="main-navigation__menu-btn" onClick={openSideDrawer}>
          <span /> <span /> <span />
        </button>
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
