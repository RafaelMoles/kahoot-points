import React from 'react';

import kahootlogo from '../../assets/kahoot-logo-white.png';

const Header: React.FC = () => {
  return (
    <header className="header">
      <img src={kahootlogo} alt="kahoot-logo" className="logo" />
    </header>
  );
};

export default Header;
