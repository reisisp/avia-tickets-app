import React from 'react';

import Tickets from '../../pages/Tickets/Tickets';
import Footer from '../Footer';
import Logo from '../Logo';

import classes from './App.module.scss';

export const App = () => {
  return (
    <div className={classes.app}>
      <Logo />
      <Tickets />
      <Footer />
    </div>
  );
};
