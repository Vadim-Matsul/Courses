import { NextPage } from 'next';
import DinamicRaiting from './DinamicRaiting/DinamicRaiting';
import { RaitingProps } from './Raiting.props';
import StaticRaiting from './StaticRaiting/StaticRaiting';
import React from 'react';

const Raiting = React.forwardRef<HTMLDivElement, RaitingProps>((props, ref) => {
  const { rating, isEditable = false, setRating, errors, ...divProps } = props;

  return (
    <div>
      {isEditable
        ? <DinamicRaiting
          currentRating={rating!}
          setRating={setRating!}
          errors={errors}
          {...divProps}
          ref={ref}
        />
        : <StaticRaiting rating={rating} {...divProps} />}
    </div>
  );
});

Raiting.displayName = 'Raiting';
export { Raiting };