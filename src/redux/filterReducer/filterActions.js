import { FILTER, FILTER_ALL, FILTER_DISABLE_ALL } from '../types';

export function onFilter(filter, data) {
  if (filter === 'all' && !data[filter]) return { type: FILTER_ALL };
  if (filter === 'all' && data[filter]) return { type: FILTER_DISABLE_ALL };
  if (filter !== 'all' && !data[filter]) {
    let count = 0;
    Object.values(data).map((el) => (el ? (count += 1) : count));
    if (count === 3) return { type: FILTER_ALL };
  }

  return {
    type: FILTER,
    payload: { all: false, [filter]: !data[filter] },
  };
}
