import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/ticketsReducer/ticketsActions';
import FilterList from '../../components/FilterList';
import TabList from '../../components/TabList/TabList';
import TicketList from '../../components/TicketList/TicketList';
import LoadLine from '../../components/ui/LoadLine';

import classes from './Tickets.module.scss';

const Tickets = ({ loading }) => {
  return (
    <div className={classes.tickets}>
      <FilterList />
      <div className={classes.tickets__content}>
        <TabList />
        {loading ? <LoadLine /> : null}
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
