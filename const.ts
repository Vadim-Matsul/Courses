import { ServicesCloud, UndergraduateHelmet } from './components/svg';
import { MenuData } from './types/menu.types';

export enum HTTP {
  SIDEBAR_NAV = '/api/top-page/find',
  CURRENT_PAGE = '/api/top-page/byAlias/',
  ANOTHER_PRODUCTS = '/api/product/find',
}

export enum CATEGORY {
  COURSES,
  SERVIСES
}

export enum MenuDataTitle {
  COURSES = 'Курсы',
  SERVICES = 'Сервисы'
}

export enum MenuDataRoutes {
  COURSES = '/courses/',
  SERVICES = '/services/',
  SEARCH = '/search/',
}

export enum NumbersData {
  products_limit = 10
}

export enum SortProductsOptions {
  RatingHighToLow,
  RatingLowToHigh,
  PriceHighToLow,
  PriceLowToHigh,

  SetState,

  StatusRating,
  StatusPrice,
}



export const firstLevelData: MenuData[] = [
  { title: MenuDataTitle.COURSES, id: CATEGORY.COURSES, route: MenuDataRoutes.COURSES, icon: UndergraduateHelmet },
  { title: MenuDataTitle.SERVICES, id: CATEGORY.SERVIСES, route: MenuDataRoutes.SERVICES, icon: ServicesCloud }
]

export const ReviewsDeclinations:[string, string, string] = ['отзыв', 'отзыва', 'отзывов'];
