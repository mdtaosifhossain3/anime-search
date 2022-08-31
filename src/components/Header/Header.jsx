import React from 'react';
import Search from '../SearchBar/Search';
import './Header.css';

function Header({ setqueryData }) {
  return (
    <div className="header">
      <a href="http://localhost:5173/">
        Anime <span>Search</span> Database
      </a>
      <Search setqueryData={setqueryData} />
    </div>
  );
}

export default Header