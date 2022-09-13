import classNames from 'classnames';
import { NextPage } from 'next';
import { Star } from '../../svg';
import { RaitingProps } from '../Raiting.props';
import stls from '../Raiting.module.css';


const StaticRaiting: NextPage<RaitingProps> = ({ rating }) => {

  const staticArray: JSX.Element[] = new Array(5).fill(<></>);
  const currentRating = rating ?? 5

  const actualArray = staticArray.map((el, i) => {
    const staticClass = classNames(stls.star, {
      [stls.filled]: i < currentRating
    })
    return <Star key={i} className={staticClass} />
  })


  return (
    <>
      {actualArray.map((star, i) => <span key={i} >{star}</span>)}
    </>
  );
};


export default StaticRaiting;
