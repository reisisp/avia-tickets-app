import { CHANGE_TAB } from '../reduxTypes';

export function onChangeTab(tab) {
  return { type: CHANGE_TAB, payload: tab };
}
