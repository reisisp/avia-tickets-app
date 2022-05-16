import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/tabsReducer/tabsActions';
import TabItem from '../TabItem';

import classes from './TabList.module.scss';

const TabList = ({ currentTab, onChangeTab }) => {
  const Tabs = ['самый дешевый', 'самый быстрый', 'Оптимальный'];

  return (
    <ul className={classes.container}>
      {Tabs.map((tab, index) => (
        <li key={index}>
          <TabItem onClick={() => onChangeTab(index)} current={currentTab === index ? true : false}>
            {tab}
          </TabItem>
        </li>
      ))}
    </ul>
  );
};

function mapStateToProps({ tabsReducer }) {
  return {
    currentTab: tabsReducer.currentTab,
  };
}

export default connect(mapStateToProps, actions)(TabList);
