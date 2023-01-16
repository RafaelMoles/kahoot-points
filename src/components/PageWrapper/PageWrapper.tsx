import React from 'react';

import kahootlogo from '../../assets/kahoot-logo-white.png';
import './PageWrapper.css';

const PageWrapper: React.FC<{
  gameActions: React.ReactNode;
  statsSidebar: React.ReactNode;
}> = ({gameActions, statsSidebar}) => {
  return (
    <>
      <header className="header">
        <img src={kahootlogo} alt="kahoot-logo" className="logo" />
        <span
          className="game-title"
          style={{
            color: 'white',
            alignItems: 'center',
            marginLeft: '20px',
            alignContent: 'center',
          }}>
          POINTS
        </span>
      </header>
      <div className="container">
        <div className="leftPanel">{gameActions}</div>
        <div className="rightPanel">{statsSidebar}</div>
      </div>
    </>
  );
};

export default PageWrapper;
