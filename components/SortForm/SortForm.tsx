import classNames from 'classnames';
import { NextPage } from 'next';
import { SortFormProps } from './SortForm.props';
import stls from './SortForm.module.css';
import { Rating, Sort } from '../svg';
import { SortProductsOptions } from '../../const';
import { Card } from '../Card/Card';
import { changePriceOpen, changeRatingOpen, setPriceHighToLow, setPriceLowToHigh, setRatingHighToLow, setRatingLowToHigh } from '../../state/actions/sort.actions';
import { useState } from 'react';

export const SortForm: NextPage<SortFormProps> = ({ sort, setSort, ratingIsOpen, priceIsOpen }) => {

  const [smallOpen, setSmallOpen] = useState(false);

  const RatingClass = classNames(stls.sortRating, {
    [stls.ratingActive]: sort === SortProductsOptions.RatingHighToLow || sort === SortProductsOptions.RatingLowToHigh,
    [stls.ratingOpen]: ratingIsOpen,
    [stls.isHtLRating]: sort === SortProductsOptions.RatingHighToLow,
    [stls.isLtHRating]: sort === SortProductsOptions.RatingLowToHigh,
  })

  const PriceClasss = classNames(stls.sortPrice, {
    [stls.priceActive]: sort === SortProductsOptions.PriceHighToLow || sort === SortProductsOptions.PriceLowToHigh,
    [stls.priceOpen]: priceIsOpen,
    [stls.isHtLPrice]: sort === SortProductsOptions.PriceHighToLow,
    [stls.isLtHPrice]: sort === SortProductsOptions.PriceLowToHigh,
  })

  const smallWidthSortClass = classNames(stls.smallWidthSort, {
    [stls.smallClose]: !smallOpen,
    [stls.smallActive]: smallOpen,
    [stls.isHtLRating]: sort === SortProductsOptions.RatingHighToLow,
    [stls.isLtHRating]: sort === SortProductsOptions.RatingLowToHigh,
    [stls.isHtLPrice]: sort === SortProductsOptions.PriceHighToLow,
    [stls.isLtHPrice]: sort === SortProductsOptions.PriceLowToHigh,
  })

  const handlerRatingOpen = () => { setSort(changeRatingOpen(!ratingIsOpen)); setSort(changePriceOpen(false)) };
  const handlerRatingHighToLow = () => { setSort(setRatingHighToLow()); setSort(changeRatingOpen(false)) };
  const handlerRatingLowToHigh = () => { setSort(setRatingLowToHigh()); setSort(changeRatingOpen(false)) };

  const handlerPriceOpen = () => { setSort(changePriceOpen(!priceIsOpen)); setSort(changeRatingOpen(false)); }
  const handlerPriceHighToLow = () => { setSort(setPriceHighToLow()); setSort(changePriceOpen(false)) };
  const handlerPriceLowToHigh = () => { setSort(setPriceLowToHigh()); setSort(changePriceOpen(false)) };

  return (
    <div className={stls.sortWrapper} >


      <div
        className={RatingClass}
        onClick={handlerRatingOpen}
        onMouseLeave={() => setSort(changeRatingOpen(false))}
      >
        <Sort />
        <span>По&nbsp;рейтингу</span>
        <Card className={stls.sortRatingOptions} >
          <span
            onClick={handlerRatingHighToLow}
          ><Rating /> высокий рейтинг</span>
          <span
            onClick={handlerRatingLowToHigh}
          ><Rating /> низкий рейтинг</span>
        </Card>
      </div>


      <div
        className={PriceClasss}
        onClick={handlerPriceOpen}
        onMouseLeave={() => setSort(changePriceOpen(false))}
      >
        <Sort />
        <span>По&nbsp;цене</span>
        <Card className={stls.sortPriceOptions} >
          <span
            onClick={handlerPriceHighToLow}
          ><Rating /> высокая цена</span>
          <span
            onClick={handlerPriceLowToHigh}
          ><Rating /> низкая цена</span>
        </Card>
      </div>



      <div
        className={smallWidthSortClass}
        onClick={() => setSmallOpen(!smallOpen)}
      >
        <Sort />
        <Card
          onMouseLeave={() => setSmallOpen(false)}
        >
          <span
            onClick={handlerRatingHighToLow}
          ><Rating /> высокий рейтинг</span>
          <span
            onClick={handlerRatingLowToHigh}
          ><Rating /> низкий рейтинг</span>
          <span
            onClick={handlerPriceHighToLow}
          ><Rating /> высокая цена</span>
          <span
            onClick={handlerPriceLowToHigh}
          ><Rating /> низкая цена</span>
        </Card>
      </div>

      
    </div>
  )
}