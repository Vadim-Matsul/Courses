

import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';
import { wrapperLayoutHOC } from '../../layout';
import { MenuItem } from '../../types/menu.types';
import { CATEGORY, firstLevelData, HTTP, MenuDataRoutes, NumbersData } from '../../const';
import axios from 'axios';
import { ParsedUrlQuery } from 'querystring';
import { PageModel } from '../../types/page.types';
import { ProductModel } from '../../types/product.types';
import PageByAliasComponent from '../../components-pages/PageByAlias.component.tsx/PageByAliasComponent';

interface ReturnProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: CATEGORY,
  page: PageModel,
  products: ProductModel[]
}

interface Params extends ParsedUrlQuery {
  type: string,
  alias: string
}

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;
const firstCategory: CATEGORY = CATEGORY.COURSES;

const PageByAlias: NextPage<ReturnProps> = ({ page, products, firstCategory }) => {

  return (
    <PageByAliasComponent
      page={page}
      products={products}
      firstCategory={firstCategory}
    />
  );
}

export default wrapperLayoutHOC<ReturnProps>(PageByAlias);
/*








*/
export const getStaticPaths: GetStaticPaths = async () => {

  let actualPaths: string[] = [];

  for (let toBePage of firstLevelData) {
    const firstCategory = toBePage.id;

    const { data: menu } = await axios.post<MenuItem[]>(DOMAIN + HTTP.SIDEBAR_NAV, {
      firstCategory
    })

    const currentPaths = menu.flatMap(category => category.pages.map(bundleAlias => `${toBePage.route}${bundleAlias.alias}`));

    actualPaths = actualPaths.concat(currentPaths)
  }

  return {
    paths: actualPaths,
    fallback: true
  }
}


export const getStaticProps: GetStaticProps<ReturnProps, Params> = async ({ params }) => {

  if (!params) {
    return {
      notFound: true
    }
  }

  const { data: menu } = await axios.post<MenuItem[]>(DOMAIN + HTTP.SIDEBAR_NAV, {
    firstCategory
  })
  const { data: page } = await axios.get<PageModel>(DOMAIN + HTTP.CURRENT_PAGE + params.alias)
  const { data: products } = await axios.post<ProductModel[]>(DOMAIN + HTTP.ANOTHER_PRODUCTS, {
    category: page.category,
    limit: NumbersData.products_limit
  })

  return {
    props: { menu, page, products, firstCategory }
  }
}
