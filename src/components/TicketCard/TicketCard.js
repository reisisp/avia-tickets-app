import React from 'react';

import TicketSegment from '../TicketSegment';

import classes from './TicketCard.module.scss';

export const TicketCard = ({ ticket }) => {
  const price = new Intl.NumberFormat('ru-RU').format(ticket.price);
  const img = `https://pics.avs.io/99/36/${ticket.carrier}.png`;
  return (
    <article className={classes.card}>
      <div className={classes.card__header}>
        <span className={classes.header__price}>{price}&nbsp;Р</span>
        <img className={classes.header__logo} src={img} alt="logo" />
      </div>
      <div className={classes.card__content}>
        {ticket.segments.map((segment, index) => (
          <TicketSegment key={index} segment={segment} />
        ))}
      </div>
    </article>
  );
};
