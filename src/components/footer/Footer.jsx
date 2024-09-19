// rrd
import { Link, NavLink } from "react-router-dom";
// CSS
import "./Footer.css";
// Icons
import { FaInstagram, FaSquareFacebook, FaTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer container">
      <div className="container-inside">
        <div className="footer-left">
          <Link to="/">
            <img
              src="../assets/home/desktop/footer-logo.png"
              alt="footer logo"
            />
          </Link>

          <ul className="footer-lists">
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
        </div>
        <div className="footer-right">
          <a href="https://www.facebook.com/" target="_blank">
            <FaSquareFacebook />
          </a>
          <a href="https://x.com/" target="_blank">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
