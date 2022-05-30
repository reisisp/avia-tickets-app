import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/ticketsReducer/ticketsActions';
import FilterList from '../FilterList';
import TabList from '../TabList/TabList';
import TicketList from '../TicketList/TicketList';
import LoadLine from '../UI/LoadLine';

import classes from './Tickets.module.scss';

const Tickets = ({ loading }) => {
  return (
    <div className={classes.tickets}>
      <FilterList />
      <div className={classes.tickets__content}>
        <TabList />
        {loading && <LoadLine />}
        <TicketList />
      </div>
    </div>
  );
};

function mapStateToProps({ ticketsReducer }) {
  return {
    loading: ticketsReducer.loading,
  };
}

export default connect(mapStateToProps, actions)(Tickets);
