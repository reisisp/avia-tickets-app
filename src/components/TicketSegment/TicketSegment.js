import React from 'react';

import RoutePart from '../UI/RoutePart';

import classes from './TicketSegment.module.scss';

export const TicketSegment = ({ segment }) => {
  const prepareTransferCountStr = (count) => (count !== 1 ? `${count} пересадки` : `${count} пересадка`);
  const prepareNumber = (num) => num.toString().padStart(2, '0');

  const route = `${segment.origin} - ${segment.destination}`;
  const transferCount = segment.stops.length;
  const transferPorts = segment.stops.join(', ');

  const duration = `${Math.floor(segment.duration / 60)}ч ${prepareNumber(segment.duration % 60)}м`;

  const prepareDate = (date, duration) => {
    const depart = new Date(date).getTime();
    const arrive = new Date(date).getTime() + new Date(duration * 60000).getTime();

    return `${prepareNumber(new Date(depart).getHours())}:${prepareNumber(
      new Date(depart).getMinutes()
    )} - ${prepareNumber(new Date(arrive).getHours())}:${prepareNumber(new Date(arrive).getMinutes())}`;
  };
  return (
    <div className={classes.segment}>
      <RoutePart head={route} body={prepareDate(segment.date, segment.duration)} />
      <RoutePart head={'В пути'} body={duration} />
      <RoutePart
        head={!transferCount ? 'Без пересадок' : prepareTransferCountStr(transferCount)}
        body={transferPorts ? transferPorts : '-'}
      />
    </div>
  );
};
