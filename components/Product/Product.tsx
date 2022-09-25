import classNames from 'classnames';
import { NextPage } from 'next';
import { OpenStaticType, ProductProps } from './Product.props';
import stls from './Product.module.css';
import Image from 'next/image';
import { getFormatter, translateWordToCase } from '../../utils/helpers';
import { Devider, P, Card, Raiting, Tag, HTag, Button } from '..';
import { ReviewsDeclinations } from '../../const';
import { Characteristic } from '../Characteristic/Characteristic';
import { useState } from 'react';


export const Product: NextPage<ProductProps> = ({ className, product, ...props }) => {

  const formatter = getFormatter();
  const ProductClass = classNames(className, stls.product);
  const reviewsText = `${product.reviewCount}${translateWordToCase(product.reviewCount, ReviewsDeclinations)}`
  const [openStatic, setOpenStatic] = useState<OpenStaticType>(
    { price: false, credit: false, rating: false, advantages: false, disadvantages: false }
  )

  function hanlderStaticOpen<B extends boolean>(p: B, c: B, r: B, a: B, da: B) {
    setOpenStatic({ price: p, credit: c, rating: r, advantages: a, disadvantages: da })
  }

  const f = false;
  const osP = openStatic.price;
  const osC = openStatic.credit;
  const osR = openStatic.rating;
  const osA = openStatic.advantages;
  const osDA = openStatic.disadvantages;


  return (
    <div  {...props}>
      <Card className={ProductClass} >

        <div className={stls.logo} >
          <Image
            layout='fixed'
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

        <Button className={stls.priceToggle}
          onClick={() => hanlderStaticOpen(!osP, f, f, osA, osDA)}
        >Цена</Button>
        <div className={classNames(stls.price, { [stls.priceOpen]: osP })} >
          <span>{formatter.format(product.price)}</span>
          {product.oldPrice &&
            <Tag color='green' className={stls.discount}
            > {formatter.format(product.price - product.oldPrice)}
            </Tag>}
        </div>

        <Button className={stls.сreditToggle}
          onClick={() => hanlderStaticOpen(f, !osC, f, osA, osDA)}
        >Кредит</Button>
        <span className={classNames(stls.credit, { [stls.creditOpen]: osC })}
        > {formatter.format(product.credit)}/<span>мес</span>
        </span>

        <Button className={stls.ratingToggle}
          onClick={() => hanlderStaticOpen(f, f, !osR, osA, osDA)}
        >Рейтинг</Button>
        <Raiting className={classNames(stls.rating, { [stls.ratingOpen]: osR })} />

        <div className={stls.tags}>
          {product.categories.map(tag => <Tag key={tag} color='ghost'>{tag}</Tag>)}
        </div>

        <span className={stls.cost}>цена</span>
        <span className={stls.inCredit} >в кредит</span>
        <span className={stls.reviews} >{reviewsText}</span>

        <Devider className={stls.hr} id='hr1' />

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
            <>
              <Button className={stls.advantagesToggle}
                onClick={() => hanlderStaticOpen(osP, osC, osR, !osA, f)}
              >Преимущества</Button>
              <div
                className={classNames(stls.advantages, { [stls.advantagesOpen]: osA })}
              >
                <div>Преимущества</div>
                {product.advantages}
              </div>
            </>}
          {product.disAdvantages &&
            <>
              <Button className={stls.disAdvantagesToggle}
                onClick={() => hanlderStaticOpen(osP, osC, osR, f, !osDA)}
              >Недостатки</Button>
              <div className={classNames(stls.disAdvantages, { [stls.disAdvantagesOpen]: osDA })}
              >
                <div>Недостатки</div>
                {product.disAdvantages}
              </div>
            </>}
        </div>

        <Devider className={stls.hr} />

        <div className={stls.buttonsBlock} >
          <Button appearance >Узнать подробнее</Button>
          <Button arrow='right' >Читать отзывы</Button>
        </div>

      </Card>
    </div>

  )
}