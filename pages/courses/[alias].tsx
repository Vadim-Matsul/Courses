

import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { wrapperLayoutHOC } from '../../layout';
import { MenuItem } from '../../types/menu.types';
import { CATEGORY, HTTP, NumbersData } from '../../const';
import axios from 'axios';
import { ParsedUrlQuery } from 'querystring';
import { PageModel } from '../../types/page.types';
import { ProductModel } from '../../types/product.types';

interface ReturnProps extends Record<string, unknown> {
  menu: MenuItem[],
  page: PageModel,
  products: ProductModel[]
}

interface Params extends ParsedUrlQuery {
  alias: string
}

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;
const firstCategory = 0;

const Page: NextPage<ReturnProps> = ({ menu, page, products }) => {
  const [num, setNum] = useState(0)

  useEffect(() => {
    const paths = menu.flatMap(category => category.pages.map(courses => ({ params: { alias: courses.alias } })));
    console.log(paths);

  })

  return (
    <div>
      <span>{products && products.length}</span>
    </div>
  );
}

export default wrapperLayoutHOC(Page);


export const getStaticPaths: GetStaticPaths = async () => {
  const { data: menu } = await axios.post<MenuItem[]>(DOMAIN + HTTP.SIDEBAR_NAV, {
    firstCategory
  })

  const actualPaths = menu.flatMap(category => category.pages.map(page => ({ params: { alias: page.alias } })));

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
    props: { menu, page, products }
  }
}