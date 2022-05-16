import { FILTER, FILTER_ALL, FILTER_DISABLE_ALL } from '../types';

const initialState = {
  all: true,
  without: true,
  once: true,
  twice: true,
  thrice: true,
};

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER:
      return { ...state, ...action.payload };
    case FILTER_ALL:
      return {
        all: true,
        without: true,
        once: true,
        twice: true,
        thrice: true,
      };
    case FILTER_DISABLE_ALL:
      return {
        all: false,
        without: false,
        once: false,
        twice: false,
        thrice: false,
      };
    default:
      return state;
  }
};
