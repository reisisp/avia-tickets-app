import {
  SAVE_TICKETS,
  SHOW_LOADER,
  HIDE_LOADER,
  GET_SEARCH_ID,
  ON_TICKETS_ERROR,
  FIRST_PACKET_LOAD,
  ADD_FIVE_TO_SHOW,
} from '../types';
import TicketsService from '../../services/service-tickets';

const service = new TicketsService();

export function start() {
  return async (dispatch) => {
    dispatch(showLoader());
    const id = await service.getSearchId().catch((e) => {
      dispatch(onError());
      return e.message;
    });

    if (typeof id === 'string') return;
    dispatch({ type: GET_SEARCH_ID, payload: id.searchId });

    let stop = await getTicketsPacket(dispatch, id, true);

    while (!stop) {
      stop = await getTicketsPacket(dispatch, id);
    }
    dispatch(hideLoader());
  };
}

export function addFiveToShow() {
  return (dispatch) => {
    dispatch({ type: ADD_FIVE_TO_SHOW });
  };
}

async function getTicketsPacket(dispatch, id, init = false) {
  const tickets = await service.getTickets(id.searchId).catch((e) => {
    dispatch(onError());
    return e.message;
  });

  if (typeof tickets === 'string') return;

  dispatch(saveTickets(tickets));
  if (init) {
    dispatch({ type: FIRST_PACKET_LOAD });
  }
  return tickets.stop;
}

function saveTickets(ticketsArr) {
  return {
    type: SAVE_TICKETS,
    payload: ticketsArr.tickets,
  };
}

function onError() {
  return {
    type: ON_TICKETS_ERROR,
  };
}

function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}
