import classNames from 'classnames';
import React, { useRef } from 'react';
import { useEffect, useState, KeyboardEvent } from 'react';
import { Star } from '../../svg';
import stls from '../Raiting.module.css';
import { DinamicRaitingProps } from '../Raiting.props';

const DinamicRaiting = React.forwardRef<HTMLDivElement, DinamicRaitingProps>((props, ref) => {
  const { className, currentRating, setRating, errors, tabIndex, ...propsDinamic } = props;

  const refStarsArray = useRef<(HTMLSpanElement | null)[]>([]);

  const [rating, setRatingState] = useState<number>(currentRating);
  const [stars, setStars] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  const starsWrapperClass = classNames(className, {
    [stls.wrapperStarsError]: errors
  })

  useEffect(() => setRatingState(currentRating ?? 0), [currentRating]);
  useEffect(() => {
    constructRaiting(rating);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating, tabIndex])


  const onClick = (rating: number): void => {
    setRating(rating)
    handleStarActive(rating, true)
  }

  function computedFocus(i: number) {
    if (i < 5 && i >= 0) {
      refStarsArray.current[i]!.focus()
    }
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
          tabIndex={tabIndex}
          onKeyDown={evt => ratingArrowHandler(i, evt)}
          ref={r => refStarsArray.current.length < 5 && refStarsArray.current.push(r)}
          role='slider'
          aria-invalid={Boolean(errors)}
          aria-valuenow={rating}
        >
          <Star className={starsClass} />
        </span>
      );
    });
    setStars(actualStars);
  }

  function ratingArrowHandler(i: number, evt: KeyboardEvent) {

    if (evt.code === 'ArrowRight' || evt.code === 'ArrowUp') {
      evt.preventDefault();
      handleStarActive(i + 1, true)
      setRating(i + 1)
      computedFocus(i + 1)
    }
    if (evt.code === 'ArrowLeft' || evt.code === 'ArrowDown') {
      evt.preventDefault();
      handleStarActive(i, true)
      setRating(i)
      computedFocus(i - 1)
    }

    if (evt.code === 'Space') {
      evt.preventDefault();
      handleStarActive(i + 1, true)
      setRating(i + 1)
    }
  }

  function handleStarActive(current: number, shouldSetRating?: boolean) {
    shouldSetRating && setRatingState(current);
    constructRaiting(current);
  }

  return (
    <div
      {...propsDinamic}
      className={starsWrapperClass}
      ref={ref}
      aria-label='Блок рейтинга, укажите в нем вашу оценку стрелками вверх или вниз'
      aria-valuemax={5}
      aria-valuemin={1}
      tabIndex={tabIndex}
    >
      {stars.map((star, i) => <span key={i} >{star}</span>)}
      {errors && <div role='alert'>{errors.message}</div>}
    </div>
  );
});

DinamicRaiting.displayName = 'DinamicRaiting';
export default DinamicRaiting;
