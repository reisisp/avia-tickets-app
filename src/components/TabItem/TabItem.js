import React from 'react';
import cn from 'classnames';

import classes from './TabItem.module.scss';

export const TabItem = ({ children, current, ...props }) => {
  return (
    <button {...props} className={current ? cn(classes.tabItem, classes.tabItem__active) : classes.tabItem}>
      <span className={classes.tabItem__text}>{children}</span>
    </button>
  );
};
