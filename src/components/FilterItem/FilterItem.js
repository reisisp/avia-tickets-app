import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/filterReducer/filterActions';

import classes from './FilterItem.module.scss';

const FilterItem = ({ id, filter, data, onFilter }) => {
  const checked = data[filter.action];
  return (
    <>
      <input
        onChange={() => onFilter(filter.action, data)}
        checked={checked}
        className={classes.checkbox}
        type="checkbox"
        name={filter.name}
        id={id}
      />
      <label className={classes.checkbox__label} htmlFor={id}>
        {filter.name}
      </label>
    </>
  );
};

function mapStateToProps({ filtersReducer }) {
  return {
    data: filtersReducer,
  };
}

export default connect(mapStateToProps, actions)(FilterItem);
