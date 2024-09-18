import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaX } from "react-icons/fa6";
import { useState } from "react";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  document.body.style.overflowY = openMenu ? "hidden" : "";

  document.addEventListener("keydown", (e) => {
    if (openMenu) {
      if (e.code === "Escape") {
        setOpenMenu(false);
      }
    }
  });

  return (
    <nav className="nav container">
      <Link to="/" className="nav-logo">
        <img src="../assets/home/desktop/logo.svg" alt="navbar logo" />
        <h3>coffeeroasters</h3>
      </Link>

      <FaBars className="open-menu" onClick={() => setOpenMenu(true)} />

      <ul className="nav-lists">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="about">About us</NavLink>
        </li>
        <li>
          <NavLink to="plan">Create your plan</NavLink>
        </li>
      </ul>

      <ul className={`nav-lists-mobile ${openMenu && "open"}`}>
        <FaX className="close-menu" onClick={() => setOpenMenu(false)} />

        <li>
          <NavLink to="/" onClick={() => setOpenMenu(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="about" onClick={() => setOpenMenu(false)}>
            About us
          </NavLink>
        </li>
        <li>
          <NavLink to="plan" onClick={() => setOpenMenu(false)}>
            Create your plan
          </NavLink>
        </li>
      </ul>

      <div
        className="overlay"
        style={{ display: `${openMenu ? "flex" : "none"}` }}
        onClick={() => setOpenMenu(false)}
      ></div>
    </nav>
  );
}

export default Navbar;
