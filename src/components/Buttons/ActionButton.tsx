import React from 'react';

import './ActionButton.css';

const ActionButton: React.FC<{
  children?: React.ReactNode;
  color: string;
  icon?: string;
  onClick: () => void;
  title?: string;
}> = ({color, icon, title, onClick, children}) => {
  return (
    <div
      title={title}
      className="actionButton"
      onClick={onClick}
      style={{
        backgroundColor: color,
      }}>
      <img src={icon} className="icon" />
      <span className="button-title">{children}</span>
    </div>
  );
};

export default ActionButton;
