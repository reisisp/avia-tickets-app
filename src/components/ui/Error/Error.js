import React from 'react';

import classes from './Err.module.scss';

export const Err = () => {
  return <h2 className={classes.err}>Что-то пошло не так. Перезагрузите страницу или попробуйте позже</h2>;
};
