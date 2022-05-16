import React from 'react';

import classes from './NoRoutes.module.scss';

export const NoRoutes = () => {
  return <h2 className={classes.text}>Рейсов, подходящих под заданные фильтры, не найдено</h2>;
};
