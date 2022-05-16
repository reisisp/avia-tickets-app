import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/ticketsReducer/ticketsActions';
import TicketCard from '../TicketCard';
import Err from '../ui/Error';
import NoRoutes from '../ui/NoRoutes';
import ShowBtn from '../ui/ShowBtn/ShowBtn';

import classes from './TicketList.module.scss';

class TicketList extends Component {
  componentDidMount() {
    if (!this.props.id) this.props.start();
  }
  render() {
    const { err, firstLoad, ticketsToShow } = this.props;
    return (
      <section className={classes.ticketList}>
        {err ? <Err /> : null}
        {!err ? ticketsToShow.map((ticket, index) => <TicketCard key={index} ticket={ticket} />) : null}
        {!ticketsToShow.length ? <NoRoutes /> : null}
        {!firstLoad && ticketsToShow.length ? <ShowBtn /> : null}
      </section>
    );
  }
}

function mapStateToProps({ ticketsReducer, tabsReducer, filtersReducer }) {
  function sortByTab(tab, arr = []) {
    const sorted = [...arr];
    if (tab === 0) return sorted.sort((a, b) => (a.price > b.price ? 1 : -1));
    if (tab === 1)
      return sorted.sort((a, b) =>
        a.segments[0].duration + a.segments[1].duration > b.segments[0].duration + b.segments[1].duration ? 1 : -1
      );
    if (tab === 2) return arr;
    return arr;
  }
  function sortByFilters(filters, arr = []) {
    let filtered = [];
    if (filters.all) return arr;
    if (filters.without)
      filtered = [
        ...filtered,
        ...arr.filter((el) => el.segments[0].stops.length === 0 && el.segments[1].stops.length === 0),
      ];
    if (filters.once)
      filtered = [
        ...filtered,
        ...arr.filter((el) => Math.max(el.segments[0].stops.length, el.segments[1].stops.length) === 1),
      ];
    if (filters.twice)
      filtered = [
        ...filtered,
        ...arr.filter((el) => Math.max(el.segments[0].stops.length, el.segments[1].stops.length) === 2),
      ];
    if (filters.thrice)
      filtered = [
        ...filtered,
        ...arr.filter((el) => Math.max(el.segments[0].stops.length, el.segments[1].stops.length) === 3),
      ];
    return filtered;
  }

  const tickets = sortByTab(tabsReducer.currentTab, sortByFilters(filtersReducer, ticketsReducer.ticketsArr));
  return {
    id: ticketsReducer.searchId,
    err: ticketsReducer.err,
    firstLoad: ticketsReducer.firstLoad,
    ticketsToShow: tickets.slice(0, ticketsReducer.numberTicketsToShow),
  };
}

export default connect(mapStateToProps, actions)(TicketList);
