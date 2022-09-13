import classNames from 'classnames';
import { NextPage } from 'next';
import { RaitingProps } from './Raiting.props';
import stls from './Raiting.module.css';
import { useEffect, useState } from 'react';
import { Star } from '../svg';

export const Raiting: NextPage<RaitingProps> = ({ raiting, isEditable = false, ...props }) => {

  const [stars, setStars] = useState<JSX.Element[]>(new Array(5).fill(<></>))


  const handlerRaitingStars = (raiting: number): void => {

    const actualStars: JSX.Element[] = stars.map((star, i) => {

      const StarClass = classNames(stls.star, {
        [stls.filled]: i < raiting,
      })

      return (<Star key={i} className={StarClass} />);
    })

    setStars(actualStars)
  }


  useEffect(() => {
    handlerRaitingStars(raiting)
    //eslint-disable-next-line
  }, [raiting]);


  return (
    <div
      {...props}
    >
      {stars.map((star, i) => <span key={i} >{star}</span>)}
    </div>
  )
}