import { SortProductsOptions } from '../../const';
import { ProductModel } from '../../types/product.types';

// функция-помщник, создающая подмножество передаваемого типа ( помогает reducer определять типы actions )
function inferLiteralFromString<T extends number>(type: T): T { return type };

const setSortNone = () => ({ type: inferLiteralFromString(SortProductsOptions.None) });
const setRatingHighToLow = () => ({ type: inferLiteralFromString(SortProductsOptions.RatingHighToLow) });
const setRatingLowToHigh = () => ({ type: inferLiteralFromString(SortProductsOptions.RatingLowToHigh) });
const setPriceHighToLow = () => ({ type: inferLiteralFromString(SortProductsOptions.PriceHighToLow) });
const setPriceLowToHigh = () => ({ type: inferLiteralFromString(SortProductsOptions.PriceLowToHigh) });

const setStateProducts = (newProducts: ProductModel[]) => ({ type: inferLiteralFromString(SortProductsOptions.SetState), payload: newProducts });

const changeRatingOpen = ( statusRating: boolean ) => ({ type: inferLiteralFromString(SortProductsOptions.StatusRating), payload: statusRating });
const changePriceOpen = ( statusPrice: boolean ) => ({ type: inferLiteralFromString(SortProductsOptions.StatusPrice), payload: statusPrice });



export {
  setSortNone,
  setRatingHighToLow,
  setRatingLowToHigh,
  setPriceHighToLow,
  setPriceLowToHigh,

  setStateProducts,

  changeRatingOpen,
  changePriceOpen
}