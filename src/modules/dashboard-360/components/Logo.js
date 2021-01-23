import React from 'react';

const Logo = props => {
  return (
    <img
      alt="Logo"
      src="/static/merittracklogo.png"
      {...props}
      style={{ height: '50px', width: '50px' }}
    />
  );
};

export default Logo;
