import classNames from 'classnames';
import { NextPage } from 'next';
import { useEffect, useState, KeyboardEvent } from 'react';
import { Star } from '../../svg';
import stls from '../Raiting.module.css';
import { DinamicRaitingProps } from '../Raiting.props';

const DinamicRaiting: NextPage<DinamicRaitingProps> = ({currentRating = 0}) => {

  const [rating, setRating] = useState<number>(currentRating);
  const [stars, setStars] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRaiting(rating);
    //eslint-disable-next-line
  }, [rating])

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
          onClick={() => handleStarActive(i + 1, true)}
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
    shouldSetRating && setRating(current);

    constructRaiting(current);
  }


  return (
    <>
      {stars.map((star, i) => <span key={i} >{star}</span>)}
    </>
  );
};


export default DinamicRaiting;
