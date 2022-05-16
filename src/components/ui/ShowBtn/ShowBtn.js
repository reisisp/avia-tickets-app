import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../redux/ticketsReducer/ticketsActions';

import classes from './ShowBtn.module.scss';

const ShowBtn = ({ addFiveToShow }) => {
  return (
    <button onClick={() => addFiveToShow()} className={classes.btn}>
      <span className={classes.btn__name}>Показать еще 5 билетов!</span>
    </button>
  );
};

export default connect(null, actions)(ShowBtn);
