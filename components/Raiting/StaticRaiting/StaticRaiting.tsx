import classNames from 'classnames';
import { NextPage } from 'next';
import { Star } from '../../svg';
import { RaitingProps } from '../Raiting.props';
import stls from '../Raiting.module.css';
import React from 'react';


const StaticRaiting = React.forwardRef<HTMLDivElement, RaitingProps>(({ rating, ...props }, ref) => {

  const staticArray: JSX.Element[] = new Array(5).fill(<></>);
  const currentRating = rating ?? 5

  const actualArray = staticArray.map((el, i) => {
    const staticClass = classNames(stls.star, {
      [stls.filled]: i < currentRating
    })
    return <Star key={i} className={staticClass} />
  })


  return (
    <div {...props} ref={ref} >
      {actualArray.map((star, i) => <span key={i} >{star}</span>)}
    </div>
  );
});

StaticRaiting.displayName = 'StaticRaiting'
export default StaticRaiting;
