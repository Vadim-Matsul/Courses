import { NextPage } from 'next';
import DinamicRaiting from './DinamicRaiting/DinamicRaiting';
import { RaitingProps } from './Raiting.props';
import StaticRaiting from './StaticRaiting/StaticRaiting';


export const Raiting: NextPage<RaitingProps> = ({ rating, isEditable = false, ...props }) => {

  return (
    <div {...props} >
      {isEditable
        ? <DinamicRaiting currentRating={rating} />
        : <StaticRaiting rating={rating} />}
    </div>
  );
};
