import React from 'react';

import classes from './LoadLine.module.scss';

export const LoadLine = () => {
  return (
    <div className={classes.load}>
      <div className={classes.load__body}>
        <div className={classes.load__item}></div>
      </div>
    </div>
  );
};
