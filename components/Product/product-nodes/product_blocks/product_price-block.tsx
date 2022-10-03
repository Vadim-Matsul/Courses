import classNames from 'classnames';
import { motion, useReducedMotion } from 'framer-motion';
import React, { useState } from 'react';
import { UrlWithStringQuery } from 'url';
import { Button, Tag } from '../../..';
import { getFormatter } from '../../../../utils/helpers';
import { ButtonToggle } from '../product_button-toggle';

interface ProductPriceBlockProps {
  buttonClass: string,
  blockClass: string,
  blockClassOpen: string,
  tagClass: string,
  price: number,
  oldPrice: number,
}

const ProductPriceBlock: React.FC<ProductPriceBlockProps> = (props) => {

  const { buttonClass, blockClass: price_c, blockClassOpen: price_open_c, tagClass, price, oldPrice } = props;

  const formatter = getFormatter();
  const stopAnimation = useReducedMotion();
  const [priceOpen, setPriceOpen] = useState<boolean>(false);

  const PriceClass = classNames(price_c, { [price_open_c]: priceOpen });

  const changeShowPrice = () => setPriceOpen(!priceOpen)
  const changeShowToFalse = () => setPriceOpen(false)


  return (
    <>
      <ButtonToggle
        buttonToggleClass={buttonClass}
        onClick={changeShowPrice}
        onMouseLeave={changeShowToFalse}
      >Цена</ButtonToggle>

      <motion.div
        className={PriceClass}
        layout={stopAnimation ? false : true}
      >
        <span>
          <span className='visually-aria-hidden'>Цена</span>
          {formatter.format(price)}
        </span>
        {oldPrice &&
          <Tag color='green' className={tagClass}>
            <span className='visually-aria-hidden'>Скидка</span>
            {formatter.format(price - oldPrice)}
          </Tag>
        }
      </motion.div>
    </>
  );
};

export default React.memo(ProductPriceBlock);
