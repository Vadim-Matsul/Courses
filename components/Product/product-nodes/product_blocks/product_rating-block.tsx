import classNames from 'classnames';
import React, { useState } from 'react';
import Raiting from '../../../Raiting/Raiting';
import { ButtonToggle } from '../product_button-toggle';

interface ProductRatingBlockProps {
  buttonClass: string,
  blockClass: string,
  blockClassOpen: string,

  rating: number
}

const ProductRatingBlock: React.FC<ProductRatingBlockProps> = (props) => {

  const { buttonClass, blockClass: rating_c, blockClassOpen: rating_open_c, rating } = props;

  const [ratingOpen, setRatingOpen] = useState<boolean>(false);

  const RatingClass = classNames(rating_c, { [rating_open_c]: ratingOpen });

  const changeShowRating = () => setRatingOpen(!ratingOpen)


  return (
    <>
      <ButtonToggle
        buttonToggleClass={buttonClass}
        onClick={changeShowRating}
      >Рейтинг</ButtonToggle>

      <Raiting
        className={RatingClass}
        rating={rating}
      />
    </>
  );
};

export default React.memo(ProductRatingBlock);
