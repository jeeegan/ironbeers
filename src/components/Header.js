import React from 'react';
import { Navbar } from 'reactstrap';
import { NavLink } from 'react-router-dom'

const Header = () => {
  return(
    <div>
      <Navbar className="header">
        <NavLink to="/" style={{fontSize: "4em", color: "white"}}>
          <span className="glyphicon glyphicon-home"></span>
        </NavLink>
      </Navbar>
    </div>
  )
};

export default Header;