// == Import npm

import React from 'react';
import { Link } from 'react-router-dom';

// == Import

import './header.scss';

// == Component

const Header = () => (
  <div className="header">
    <Link className="cart" to="/cart">Mon panier</Link>
  </div>
);

// == Export

export default Header;
