import {
  GET_SEARCH_ID,
  SAVE_TICKETS,
  SHOW_LOADER,
  HIDE_LOADER,
  ON_TICKETS_ERROR,
  FIRST_PACKET_LOAD,
  ADD_FIVE_TO_SHOW,
} from '../types';

const initialState = {
  searchId: null,
  ticketsArr: [],
  numberTicketsToShow: 5,
  loading: true,
  firstLoad: true,
  err: false,
};

export const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_ID:
      if (!state.searchId) {
        return {
          ...state,
          searchId: action.payload,
        };
      } else {
        return state;
      }
    case SAVE_TICKETS:
      return {
        ...state,
        ticketsArr: [...state.ticketsArr, ...action.payload],
      };
    case FIRST_PACKET_LOAD:
      return {
        ...state,
        firstLoad: false,
      };
    case ADD_FIVE_TO_SHOW:
      return {
        ...state,
        numberTicketsToShow: (state.numberTicketsToShow += 5),
      };
    case ON_TICKETS_ERROR:
      return {
        ...state,
        loading: false,
        firstLoad: false,
        err: true,
        ticketsArr: [],
      };
    case SHOW_LOADER:
      return {
        ...state,
        loading: true,
      };
    case HIDE_LOADER:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
