import { SortProductsOptions } from '../../../const';
import { InitialSortState, SortAction } from './sort.reducer.types';

const {
  RatingHighToLow,
  RatingLowToHigh,
  PriceHighToLow,
  PriceLowToHigh,
  SetState,
  StatusRating,
  StatusPrice
} = SortProductsOptions;

export const sortReducer = (state: InitialSortState, action: SortAction): InitialSortState => {
  switch (action.type) {
    case RatingHighToLow:
      return {
        ...state,
        sort: RatingHighToLow,
        products: state.products.sort((a, b) => a.initialRating > b.initialRating ? -1 : 1)
      };
    case RatingLowToHigh:
      return {
        ...state,
        sort: RatingLowToHigh,
        products: state.products.sort((a, b) => a.initialRating > b.initialRating ? 1 : -1)
      };
    case PriceHighToLow:
      return {
        ...state,
        sort: PriceHighToLow,
        products: state.products.sort((a, b) => a.price > b.price ? -1 : 1)
      };
    case PriceLowToHigh:
      return {
        ...state,
        sort: PriceLowToHigh,
        products: state.products.sort((a, b) => a.price > b.price ? 1 : -1)
      };


    case SetState:
      return {
        ...state,
        sort: state.sort,
        products: action.payload
      };


    case StatusRating:
      return {
        ...state,
        ratingIsOpen: action.payload
      };
    case StatusPrice:
      return {
        ...state,
        priceIsOpen: action.payload
      };


    default: throw new Error('Типа сортировки не существует')
  }

}