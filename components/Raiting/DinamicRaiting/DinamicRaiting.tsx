import classNames from 'classnames';
import React from 'react';
import { useEffect, useState, KeyboardEvent } from 'react';
import { Star } from '../../svg';
import stls from '../Raiting.module.css';
import { DinamicRaitingProps } from '../Raiting.props';

const DinamicRaiting = React.forwardRef<HTMLDivElement, DinamicRaitingProps>((props, ref) => {
  const { className, currentRating, setRating, errors, ...propsDinamic } = props;

  const [rating, setRatingState] = useState<number>(currentRating);
  const [stars, setStars] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  const starsWrapperClass = classNames(className, {
    [stls.wrapperStarsError]: errors
  })

  useEffect(() => setRatingState(currentRating ?? 0), [currentRating]);
  useEffect(() => {
    constructRaiting(rating);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating])


  const onClick = (rating: number): void => {
    setRating(rating)
    handleStarActive(rating, true)
  }

  function constructRaiting(quantity: number) {

    const actualStars = stars.map((el, i) => {
      const starsClass = classNames(stls.star, {
        [stls.filled]: i < quantity
      });

      return (
        <span
          key={i}
          className={stls.enabled}
          onMouseEnter={() => handleStarActive(i + 1)}
          onMouseLeave={() => handleStarActive(rating)}
          onClick={() => onClick(i + 1)}
        >
          <Star
            className={starsClass}
            tabIndex={0}
            onKeyDown={(evt: KeyboardEvent<SVGElement>) => handleStarActive(i + 1, true, evt)}
          />
        </span>
      );
    });
    setStars(actualStars);
  }

  function handleStarActive(current: number, shouldSetRating?: boolean, evt?: KeyboardEvent<SVGElement>) {
    if (evt && evt.code !== 'Space') return
    shouldSetRating && setRatingState(current);

    constructRaiting(current);
  }


  return (
    <div {...propsDinamic} className={starsWrapperClass} ref={ref} >
      {stars.map((star, i) => <span key={i} >{star}</span>)}
      {errors && <div>{errors.message}</div>}
    </div>
  );
});

DinamicRaiting.displayName = 'DinamicRaiting';
export default DinamicRaiting;
