import React from 'react';

function Header() {
  const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 15px'
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between'
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    padding: '0 15px'
  };

  return (
    <header style={headerStyle}>
      <h1>Weather App</h1>
      <nav style={navStyle}>
        <a href="/" style={linkStyle}>Home</a>
        <a href="/about" style={linkStyle}>About</a>
        <a href="/contact" style={linkStyle}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;
