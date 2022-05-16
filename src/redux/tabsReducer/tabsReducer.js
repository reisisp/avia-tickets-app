import { CHANGE_TAB } from '../types';

const initialState = {
  currentTab: 0,
};

export const tabsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TAB:
      return { ...state, currentTab: action.payload };
    default:
      return state;
  }
};
