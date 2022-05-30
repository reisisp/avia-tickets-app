import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/ticketsReducer/ticketsActions';
import TicketCard from '../TicketCard';
import Err from '../UI/Error';
import NoRoutes from '../UI/NoRoutes';
import ShowBtn from '../UI/ShowBtn/ShowBtn';

import classes from './TicketList.module.scss';
import { sortByFilters, sortByTab } from './ticketsSort';

const TicketList = ({ id, err, firstLoad, ticketsToShow, start }) => {
  useEffect(() => {
    if (!id) start();
  }, []);
  return (
    <section className={classes.ticketList}>
      {err && <Err />}
      {!err && ticketsToShow.map((ticket, index) => <TicketCard key={index} ticket={ticket} />)}
      {!ticketsToShow.length && <NoRoutes />}
      {!firstLoad && ticketsToShow.length ? <ShowBtn /> : null}
    </section>
  );
};

function mapStateToProps({ ticketsReducer, tabsReducer, filtersReducer }) {
  const tickets = sortByTab(tabsReducer.currentTab, sortByFilters(filtersReducer, ticketsReducer.ticketsArr));
  return {
    id: ticketsReducer.searchId,
    err: ticketsReducer.err,
    firstLoad: ticketsReducer.firstLoad,
    ticketsToShow: tickets.slice(0, ticketsReducer.numberTicketsToShow),
  };
}

export default connect(mapStateToProps, actions)(TicketList);
