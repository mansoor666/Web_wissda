import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

// navbar navbar-mobile

function Header() {
  const [mobileNav, setMobileNav] = useState(false);
  const [mobileclass, setMobileclass] = useState(false);

  const Handler = () => {
    setMobileNav(!mobileNav);
    setMobileclass(!mobileclass);
  };

  return (
    <>
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center ">
          <div className="logo">
            {/* <h1><NavLink to='/'>Wissda</NavLink></h1> */}
            {/* Uncomment below if you prefer to use an image logo */}
            <NavLink to="/">
              <img
                src="/assets/img/blog/wissda-logo.png"
                alt=""
                class="img-fluid"
              />
            </NavLink>
          </div>
          <nav
            id="navbar"
            className={mobileNav ? "navbar navbar-mobile" : "navbar"}
          >
            <ul>
              {/* <li>
                <NavLink to="/" onClick={mobileNav ? Handler : ""}>
                  Home
                </NavLink>
              </li> */}
              {/* <li>
                <NavLink to="/about" onClick={mobileNav ? Handler : ""}>
                  Who we Are
                </NavLink>
              </li> */}
              {/* <li>
                <NavLink to="/Services" onClick={mobileNav ? Handler : ""}>
                  What we Do
                </NavLink>
              </li> */}
              <li>
                <NavLink to="/Careers" onClick={mobileNav ? Handler : ""}>
                  Careers
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="/blog" onClick={mobileNav ? Handler : ""}>
                  Blog
                </NavLink>
              </li> */}
              <li>
                <NavLink to="/contact" onClick={mobileNav ? Handler : ""}>
                  Contact
                </NavLink>
              </li>
            </ul>
            <i
              className={
                mobileclass
                  ? "bi mobile-nav-toggle bi-x"
                  : "bi bi-list mobile-nav-toggle"
              }
              onClick={Handler}
            />
          </nav>
          {/* .navbar */}
        </div>
      </header>
    </>
  );
}

export default Header;
