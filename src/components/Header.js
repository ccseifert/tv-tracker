import React from 'react';
import { Link } from '@reach/router';

const Header = () => {
  return (
    <header>
      TV Tracker
      <Link to="/show/1396">Breaking Bad</Link>
      <Link to="/search">
        <span aria-label="Search" role="img">
          🔍
        </span>
      </Link>
      <Link to="/">Home</Link>
    </header>
  );
};

export default Header;
