

import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React, { useEffect } from 'react';
import { wrapperLayoutHOC } from '../../layout';
import { MenuItem } from '../../types/menu.types';
import { CATEGORY, firstLevelData, HTTP, MenuDataRoutes, NumbersData } from '../../const';
import axios from 'axios';
import { ParsedUrlQuery } from 'querystring';
import { PageModel } from '../../types/page.types';
import { ProductModel } from '../../types/product.types';
import PageByAliasComponent from '../../components-pages/PageByAlias/PageByAliasComponent';
import Head from 'next/head';


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

const PageByAlias: NextPage<ReturnProps> = ({ page, products, firstCategory }) => {

  return (
    <>
      {page && products &&
        <>
          <Head>
            <title>{page.metaTitle}</title>
            <meta name='description' content={page.metaDescription} />
            <meta property='og:title' content={page.metaTitle} />
            <meta property='og:description' content={page.metaDescription} />
            <meta name='og:type' content='product' />
          </Head>
          <PageByAliasComponent
            page={page}
            products={products}
            firstCategory={firstCategory}
          />
        </>
      }
    </>
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
    });

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

  const firstCategory = params.type === 'courses' ? CATEGORY.COURSES : CATEGORY.SERVIСES

  const { data: menu } = await axios.post<MenuItem[]>(DOMAIN + HTTP.SIDEBAR_NAV, {
    firstCategory
  })

  const aliasArr = menu.flatMap(category => category.pages.map(aliasB => aliasB.alias));
  if (!aliasArr.includes(params.alias)) {
    return {
      notFound: true
    }
  }

  const { data: page } = await axios.get<PageModel>(DOMAIN + HTTP.CURRENT_PAGE + params.alias)

  const { data: products } = await axios.post<ProductModel[]>(DOMAIN + HTTP.ANOTHER_PRODUCTS, {
    category: page.category,
    limit: NumbersData.products_limit
  })



  return {
    props: { menu, page, products, firstCategory }
  }
}
