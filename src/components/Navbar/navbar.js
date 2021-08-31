import React, { useState } from "react";
import "./navbar.css";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <>
      <nav className="navbarItems">
        <div className="left-side-nav">
          <h1 className="navbarLogo">DISU</h1>
        </div>

        <div className="right-side-nav">
          <ul className="desktop-menu">
            <li className="nav-links" onClick={closeMobileMenu}>
              <Link smooth to="#about">
                About
              </Link>
            </li>
            <li className="nav-links" onClick={closeMobileMenu}>
              <Link smooth to="#project">
                Projects
              </Link>
            </li>
            <li className="nav-links" onClick={closeMobileMenu}>
              <Link smooth to="#edu">
                Education
              </Link>
            </li>
            <li className="nav-links" onClick={closeMobileMenu}>
              <Link smooth to="#contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="hamburger-menu">
          <div
            onClick={handleClick}
            className={click ? "line line-1 change " : "line line-1"}
          ></div>
          <div
            onClick={handleClick}
            className={click ? " line line-2 change" : "line line-2"}
          ></div>
          <div
            onClick={handleClick}
            className={click ? "line line-3 change" : "line line-3"}
          ></div>
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-links" onClick={closeMobileMenu}>
            <Link smooth to="#about">
              About
            </Link>
          </li>
          <li className="nav-links" onClick={closeMobileMenu}>
            <Link smooth to="#project">
              Projects
            </Link>
          </li>
          <li className="nav-links" onClick={closeMobileMenu}>
            <Link smooth to="#edu">
              Education
            </Link>
          </li>
          <li className="nav-links" onClick={closeMobileMenu}>
            <Link smooth to="#contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
