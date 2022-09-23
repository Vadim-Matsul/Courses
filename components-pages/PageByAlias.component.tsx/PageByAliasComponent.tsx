import { NextPage } from 'next';
import { PageByAliasProps } from './PageByAliasComponent.props';
import { HTag, Tag, SeoBlock, Skills, AdvantageBlock, HhData } from '../../components';
import { CATEGORY, SortProductsOptions } from '../../const';
import { doNonBrackingSpaces } from '../../utils/helpers';
import stls from './PageByAliasComponent.module.css';
import { useEffect, useReducer } from 'react';
import { sortReducer } from '../../state/reducers/sort-reducer/sort.reducer';
import { setStateProducts } from '../../state/actions/sort.actions';
import { SortForm } from '../../components/SortForm/SortForm';

const PageByAliasComponent: NextPage<PageByAliasProps> = ({ firstCategory, page, products }) => {



  const [{ products: sortedProducts, sort, ratingIsOpen, priceIsOpen }, dispatchSort] = useReducer(sortReducer, {
    products,
    sort: SortProductsOptions.RatingLowToHigh,
    ratingIsOpen: false,
    priceIsOpen: false
  });

  useEffect(() => {
    if (products) {
      dispatchSort(setStateProducts(products));
    }
  }, [products])

  // сделать возврат empty page
  if (!page) return <></>
  const nonBrackingTitle = doNonBrackingSpaces(page.title);
  const nonBrackingCategory = doNonBrackingSpaces(page.category);


  const shouldShowAdvantageBlock = page.advantages && page.advantages.length > 0;
  const shouldShowSeoText = page.seoText;

  return (
    <div className={stls.pageWrapper}>
      <button onClick={() => dispatchSort({ type: SortProductsOptions.PriceHighToLow })} >PriceHighToLow</button>
      <button onClick={() => dispatchSort({ type: SortProductsOptions.PriceLowToHigh })} >PriceLowToHigh</button>

      <div className={stls.title}>
        <HTag tag='h1'  >
          {nonBrackingTitle}
        </HTag>
        {sortedProducts && <Tag size='large' color='grey'  >{sortedProducts.length}</Tag>}
        <SortForm
          sort={sort}
          setSort={dispatchSort}
          ratingIsOpen={ratingIsOpen}
          priceIsOpen={priceIsOpen}
        />
      </div>

      <div className={stls.products} >
        {sortedProducts && sortedProducts.map(product => <div key={product._id}>{product.price}</div>)}
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

      {shouldShowSeoText && <SeoBlock seoText={page.seoText!} />}

      <Skills tags={page.tags} />

    </div>
  );
}

export default PageByAliasComponent;