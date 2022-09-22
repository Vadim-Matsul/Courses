import { NextPage } from 'next';
import { PageByAliasProps } from './PageByAliasComponent.props';
import { HTag, Tag, SeoBlock, Skills, AdvantageBlock, HhData } from '../../components';
import { CATEGORY } from '../../const';
import { doNonBrackingSpaces } from '../../utils/helpers';
import stls from './PageByAliasComponent.module.css';

const PageByAliasComponent: NextPage<PageByAliasProps> = ({ firstCategory, page, products }) => {

  // сделать возврат empty page
  if (!page) return <></>
  const nonBrackingTitle = doNonBrackingSpaces(page.title);
  const nonBrackingCategory = doNonBrackingSpaces(page.category);


  const shouldShowAdvantageBlock = page.advantages && page.advantages.length > 0;
  const shouldShowSeoText = page.seoText;

  return (
    <div className={stls.pageWrapper}>

      <div className={stls.title}>
        <HTag tag='h1'  >
          {nonBrackingTitle}
        </HTag>
        {products && <Tag size='large' color='grey'  >{products.length}</Tag>}
        <div> Сортировка </div>
      </div>

      <div className={stls.products} >
        {products && products.map(product => <div key={product._id}>{product.title}</div>)}
      </div>

      <div className={stls.hhWrapper}>
        <div className={stls.hhTitle}>
          <HTag tag='h1'>
            Вакансии - {nonBrackingCategory}
          </HTag>
          {products && <Tag size='large' color='red'>hh.ru</Tag>}
        </div>
        {firstCategory === CATEGORY.COURSES && page.hh && <HhData {...page.hh} />}
      </div>

      {shouldShowAdvantageBlock && <AdvantageBlock advantages={page.advantages!} />}

      {shouldShowSeoText && <SeoBlock   seoText={page.seoText!} />}

      <Skills tags={page.tags} />

    </div>
  );
}

export default PageByAliasComponent;