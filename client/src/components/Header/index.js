import React from 'react';
import { Link } from "react-router-dom";
import "./header.css";

const Header = (props) => {
  return (<header>
    <div className="brandArea headerDiv">
      <h1 className="brand">Filthy Casual MMA</h1>
    </div>
    <div className="empty headerDiv"></div>
    <div className="navLinks headerDiv">
      <nav>
        <ul>
          <li><Link className="main-nav-link" to="/">Home</Link></li>
        </ul>
      </nav>
    </div>

  </header>);
}

export default Header;