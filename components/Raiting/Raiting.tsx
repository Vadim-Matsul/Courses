import DinamicRaiting from './DinamicRaiting/DinamicRaiting';
import { RaitingProps } from './Raiting.props';
import StaticRaiting from './StaticRaiting/StaticRaiting';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const Raiting = React.forwardRef<HTMLDivElement, RaitingProps>((props, ref) => {
  const { rating, className, isEditable = false, setRating, errors, ...divProps } = props;
  const stopAnimation = useReducedMotion();

  return (
    <motion.div
      className={className}
      layout={stopAnimation ? false : true}
    >
      <span className='visually-aria-hidden'>Рейтинг{rating}</span>
      {isEditable
        ? <DinamicRaiting
          currentRating={rating!}
          setRating={setRating!}
          errors={errors}
          {...divProps}
          ref={ref}
        />
        : <StaticRaiting rating={rating} {...divProps} ref={ref} />}
    </motion.div>
  );
});

Raiting.displayName = 'Raiting';
export default motion(Raiting);