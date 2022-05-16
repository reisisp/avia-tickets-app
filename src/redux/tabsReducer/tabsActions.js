import { CHANGE_TAB } from '../types';

export function onChangeTab(tab) {
  return { type: CHANGE_TAB, payload: tab };
}
