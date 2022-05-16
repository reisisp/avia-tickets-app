import React from 'react';

import FilterItem from '../FilterItem/FilterItem';

import classes from './FilterList.module.scss';

export const FilterList = () => {
  const filters = [
    { name: 'Все', action: 'all' },
    { name: 'Без пересадок', action: 'without' },
    { name: '1 пересадка', action: 'once' },
    { name: '2 пересадки', action: 'twice' },
    { name: '3 пересадки', action: 'thrice' },
  ];
  return (
    <form action="" className={classes.form}>
      <p className={classes.form__heading}>Колличество пересадок</p>
      <ul className={classes.form__list}>
        {filters.map((filter, index) => (
          <li className={classes.form__item} key={index}>
            <FilterItem id={index} filter={filter} />
          </li>
        ))}
      </ul>
    </form>
  );
};
