import { NextPage } from 'next';
import { PageByAliasProps } from './PageByAliasComponent.props';
import { HTag, Tag, Card } from '../../components';
import { HhData } from '../../components/HhData/HhData';
import { format } from 'date-fns';
import stls from './PageByAliasComponent.module.css';
import { CATEGORY } from '../../const';

const PageByAliasComponent: NextPage<PageByAliasProps> = ({ firstCategory, page, products }) => {

  // сделать возврат empty page
  if (!page) return <></>

  return (
    <div className={stls.pageWrapper}>
      <div className={stls.title}>
        <HTag tag='h1'  >
          {page.title}
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
            Вакансии - {page.category}
          </HTag>
          {products && <Tag size='large' color='red'>hh.ru</Tag>}
        </div>
        {firstCategory === CATEGORY.COURSES && <HhData {...page.hh} />}
      </div>

    </div>
  );
}

export default PageByAliasComponent;