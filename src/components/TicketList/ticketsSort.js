export function sortByTab(tab, arr = []) {
  const sorted = [...arr];
  if (tab === 0) return sorted.sort((a, b) => (a.price > b.price ? 1 : -1));
  if (tab === 1)
    return sorted.sort((a, b) =>
      a.segments[0].duration + a.segments[1].duration > b.segments[0].duration + b.segments[1].duration ? 1 : -1
    );
  if (tab === 2) return arr;
}
export function sortByFilters(filters, arr = []) {
  let filtered = [];
  if (filters.all) return arr;
  if (filters.without) filtered = [...filtered, ...filterByStopCount(0, arr)];
  if (filters.once) filtered = [...filtered, ...filterByStopCount(1, arr)];
  if (filters.twice) filtered = [...filtered, ...filterByStopCount(2, arr)];
  if (filters.thrice) filtered = [...filtered, ...filterByStopCount(3, arr)];
  return filtered;
}

function filterByStopCount(stopCount, arr) {
  return arr.filter((el) => Math.max(el.segments[0].stops.length, el.segments[1].stops.length) === stopCount);
}
