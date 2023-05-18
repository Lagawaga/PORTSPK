import { Outlet, NavLink } from "react-router-dom";
//test git continous deployment
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
                <NavLink to="/" className="highlight">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/Services" className="highlight">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/About" className="highlight">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/Contact" className="highlight">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/Blog" className="highlight">
                  Blog
                </NavLink>
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
                <NavLink to="/Blog" className="highlight">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/Contact" className="highlight">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/About" className="highlight">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/Services" className="highlight">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  // className={"highlight" + (url === "/" ? " active" : "")}
                  className="highlight"
                  // style={({ isActive }) => {
                  //   return { color: isActive ? "skyblue" : "" };
                  // }}
                >
                  Home
                </NavLink>
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
