import React from 'react';

import classes from './RoutePart.module.scss';

export const RoutePart = ({ head, body }) => {
  return (
    <div className={classes.route}>
      <span className={classes.route__head}>{head}</span>
      <span className={classes.route__body}>{body}</span>
    </div>
  );
};
