import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <Link to="/work">
      <button className="App-link">my work</button>
    </Link>
  );
}

export default Nav;