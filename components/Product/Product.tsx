import classNames from 'classnames';
import { NextPage } from 'next';
import { ProductProps } from './Product.props';
import stls from './Product.module.css';
import Image from 'next/image';
import { Card } from '../Card/Card';
import { Raiting } from '../Raiting/Raiting';
import { Tag } from '../Primitives/Tag/Tag';
import { HTag } from '../Primitives/HTag/Htag';
import { Button } from '../Primitives/Button/Button';
import { getFormatter, translateWordToCase } from '../../utils/helpers';
import { Devider, P } from '..';
import { ReviewsDeclinations } from '../../const';
import { Characteristic } from '../Characteristic/Characteristic';

export const Product: NextPage<ProductProps> = ({ className, product, ...props }) => {


  const formatter = getFormatter();
  const ProductClass = classNames(className, stls.product);

  return (
    <Card className={ProductClass}>
      <div className={stls.logo} >
        <Image
          src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
          blurDataURL={process.env.NEXT_PUBLIC_DOMAIN + product.image}
          alt={product.title}
          width={70}
          height={70}
          placeholder='blur'
        />
      </div>
      <div className={stls.title} >
        <HTag tag='h3' >{product.title}</HTag>
      </div>
      <div className={stls.price} >
        <span>{formatter.format(product.price)}</span>
        {product.oldPrice &&
          <Tag
            color='green'
            className={stls.discount}
          >
            {formatter.format(product.price - product.oldPrice)}
          </Tag>}
      </div>
      <span className={stls.credit} >
        {formatter.format(product.credit)}/<span>мес</span>
      </span>
      <Raiting className={stls.rating} rating={product.initialRating} />

      <div className={stls.tags}>
        {product.categories.map(tag => <Tag key={tag} color='ghost'>{tag}</Tag>)}
      </div>
      <span className={stls.cost}>цена</span>
      <span className={stls.inCredit} >в кредит</span>
      <span className={stls.reviews} >{product.reviewCount} {translateWordToCase(product.reviewCount, ReviewsDeclinations)}</span>
      <Devider className={stls.hr} />
      <P className={stls.description} >{product.description}</P>
      <div className={stls.fich}>
        <Characteristic characteristics={product.characteristics} />
        <div className={stls.suretyWrapper} >
          <div className={stls.surety} >
            {product.tags.map(tag => <Tag key={tag} color='ghost'>{tag}</Tag>)}
          </div>
        </div>
      </div>
      <div className={stls.advantageBlock}>
        {product.advantages &&
          <div className={stls.advantages} >
            <div>Преимущества</div>
            {product.advantages}
          </div>}
        {product.disAdvantages &&
          <div className={stls.disAdvantages} >
            <div>Недостатки</div>
            {product.disAdvantages}
          </div>}
      </div>
      <Devider className={stls.hr} />
      <div className={stls.buttonsBlock} >
        <Button appearance >Узнать подробнее</Button>
        <Button arrow='right' >Читать отзывы</Button>
      </div>
    </Card>
  )
}