import { NextPage } from 'next';
import { PageByAliasProps } from './PageByAliasComponent.props';
import { HTag, Tag, AdvantageBlock } from '../../components';
import Product from '../../components/Product/Product';
import { CATEGORY, SortProductsOptions } from '../../const';
import { doNonBrackingSpaces } from '../../utils/helpers';
import stls from './PageByAliasComponent.module.css';
import { useEffect, useReducer } from 'react';
import { sortReducer } from '../../state/reducers/sort-reducer/sort.reducer';
import { setStateProducts } from '../../state/actions/sort.actions';
import { SortForm } from '../../components/SortForm/SortForm';
import Skills from '../../components/Skills/Skills';
import HhData from '../../components/HhData/HhData';


const PageByAliasComponent: NextPage<PageByAliasProps> = ({ firstCategory, page, products }) => {

  const [{ products: sortedProducts, sort, ratingIsOpen, priceIsOpen }, dispatchSort] = useReducer(sortReducer, {
    products,
    sort: SortProductsOptions.None,
    ratingIsOpen: false,
    priceIsOpen: false
  });

  useEffect(() => {
    if (products) {
      dispatchSort(setStateProducts(products));
    }
  }, [products])


  const nonBrackingTitle = doNonBrackingSpaces(page.title);
  const nonBrackingCategory = doNonBrackingSpaces(page.category);


  const shouldShowAdvantageBlock = page.advantages && page.advantages.length > 0;

  return (
    <div className={stls.pageWrapper}>

      <div className={stls.title}>
        <HTag tag='h1'  >
          {nonBrackingTitle}
        </HTag>
        {sortedProducts && <Tag size='large' color='grey' aria-label={sortedProducts.length + 'предложений'}>{sortedProducts.length}</Tag>}
        <SortForm
          sort={sort}
          setSort={dispatchSort}
          ratingIsOpen={ratingIsOpen}
          priceIsOpen={priceIsOpen}
        />
      </div>

      <div className={stls.products} role='list'>
        {products && products.map(product =>
          <Product
            key={product._id}
            product={product}
            role='listitem'
          />)}
      </div>

      <div className={stls.hhWrapper}>
        <div className={stls.hhTitle}>
          <HTag tag='h1'>
            Вакансии - {nonBrackingCategory}
          </HTag>
          {sortedProducts && <Tag size='large' color='red'>hh.ru</Tag>}
        </div>
        {firstCategory === CATEGORY.COURSES && page.hh && <HhData {...page.hh} />}
      </div>

      {shouldShowAdvantageBlock && <AdvantageBlock advantages={page.advantages!} />}

      <Skills tags={page.tags} />

    </div>
  );
}

export default PageByAliasComponent;