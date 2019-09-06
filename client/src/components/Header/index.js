import React from 'react';
import { Link } from "react-router-dom";
import "./header.css";

import Logo from "../Logo"

const Header = (props) => {
  return (<header>
    <Logo />
    <div className="empty headerDiv"></div>
    <div className="navLinks headerDiv">
      <nav>
        <ul>
          <li><Link className="main-nav-link" to="/">Home</Link></li>
          <li><Link className="main-nav-link" to="/">About</Link></li>
        </ul>
      </nav>
    </div>

  </header>);
}

export default Header;