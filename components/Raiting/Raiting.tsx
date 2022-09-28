import DinamicRaiting from './DinamicRaiting/DinamicRaiting';
import { RaitingProps } from './Raiting.props';
import StaticRaiting from './StaticRaiting/StaticRaiting';
import React from 'react';
import { motion } from 'framer-motion';

const Raiting = React.forwardRef<HTMLDivElement, RaitingProps>((props, ref) => {
  const { rating, className, isEditable = false, setRating, errors, ...divProps } = props;

  return (
    <div className={className} >
      {isEditable
        ? <DinamicRaiting
          currentRating={rating!}
          setRating={setRating!}
          errors={errors}
          {...divProps}
          ref={ref}
        />
        : <StaticRaiting rating={rating} {...divProps} ref={ref} />}
    </div>
  );
});

Raiting.displayName = 'Raiting';
export default motion(Raiting);