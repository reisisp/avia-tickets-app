import React from 'react';

import logo from './Logo.png';
import classes from './Logo.module.scss';

export const Logo = () => {
  return (
    <header className={classes.container}>
      <img src={logo} alt="logo" />
    </header>
  );
};
