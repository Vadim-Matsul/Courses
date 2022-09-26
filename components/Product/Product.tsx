import classNames from 'classnames';
import { NextPage } from 'next';
import { OpenStaticType, ProductProps } from './Product.props';
import stls from './Product.module.css';
import Image from 'next/image';
import { getFormatter, translateWordToCase } from '../../utils/helpers';
import { Devider, P, Card, Raiting, Tag, HTag, Button, Review, ReviewForm } from '..';
import { ReviewsDeclinations } from '../../const';
import { Characteristic } from '../Characteristic/Characteristic';
import { useState } from 'react';


export const Product: NextPage<ProductProps> = ({ className, product, ...props }) => {

  const { title, image, price, oldPrice, credit, categories,
    description, characteristics, tags, advantages, disAdvantages, reviews, _id } = product;

  const formatter = getFormatter();
  const ProductClass = classNames(className, stls.product);
  const reviewsText = `${product.reviewCount} ${translateWordToCase(product.reviewCount, ReviewsDeclinations)}`
  const [reviewsForm, setReviewsForm] = useState<boolean>(false);
  const [openStatic, setOpenStatic] = useState<OpenStaticType>(
    { price: false, credit: false, rating: false, advantages: false, disadvantages: false }
  );

  function hanlderStaticOpen<B extends boolean>(p: B, c: B, r: B, a: B, da: B) {
    setOpenStatic({ price: p, credit: c, rating: r, advantages: a, disadvantages: da })
  };

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
            src={process.env.NEXT_PUBLIC_DOMAIN + image}
            blurDataURL={process.env.NEXT_PUBLIC_DOMAIN + image}
            alt={title}
            width={70}
            height={70}
            placeholder='blur'
          />
        </div>

        <div className={stls.title} >
          <HTag tag='h3' >{title}</HTag>
        </div>

        <Button className={stls.priceToggle}
          onClick={() => hanlderStaticOpen(!osP, f, f, osA, osDA)}
        >Цена</Button>
        <div className={classNames(stls.price, { [stls.priceOpen]: osP })} >
          <span>{formatter.format(price)}</span>
          {oldPrice &&
            <Tag color='green' className={stls.discount}
            > {formatter.format(price - oldPrice)}
            </Tag>}
        </div>

        <Button className={stls.сreditToggle}
          onClick={() => hanlderStaticOpen(f, !osC, f, osA, osDA)}
        >В кредит</Button>
        <span className={classNames(stls.credit, { [stls.creditOpen]: osC })}
        > {formatter.format(credit)}/<span>мес</span>
        </span>

        <Button className={stls.ratingToggle}
          onClick={() => hanlderStaticOpen(f, f, !osR, osA, osDA)}
        >Рейтинг</Button>
        <Raiting className={classNames(stls.rating, { [stls.ratingOpen]: osR })} />

        <div className={stls.tags}>
          {categories.map(tag => <Tag key={tag} color='ghost'>{tag}</Tag>)}
        </div>

        <span className={stls.cost}>цена</span>
        <span className={stls.inCredit} >в кредит</span>
        <span className={stls.reviews} >{reviewsText}</span>

        <Devider className={stls.hr} id='hr1' />

        <P className={stls.description} >{description}</P>

        <div className={stls.fich}>
          <Characteristic characteristics={characteristics} />
          <div className={stls.suretyWrapper} >
            <div className={stls.surety} >
              {tags.map(tag => <Tag key={tag} color='ghost'>{tag}</Tag>)}
            </div>
          </div>
        </div>

        <div className={stls.advantageBlock}>
          {advantages &&
            <>
              <Button className={stls.advantagesToggle}
                onClick={() => hanlderStaticOpen(osP, osC, osR, !osA, f)}
              >Преимущества</Button>
              <div
                className={classNames(stls.advantages, { [stls.advantagesOpen]: osA })}
              >
                <div>Преимущества</div>
                {advantages}
              </div>
            </>}
          {disAdvantages &&
            <>
              <Button className={stls.disAdvantagesToggle}
                onClick={() => hanlderStaticOpen(osP, osC, osR, f, !osDA)}
              >Недостатки</Button>
              <div className={classNames(stls.disAdvantages, { [stls.disAdvantagesOpen]: osDA })}
              >
                <div>Недостатки</div>
                {disAdvantages}
              </div>
            </>}
        </div>

        <Devider className={stls.hr} />

        <div className={stls.buttonsBlock} >
          <Button appearance >Узнать подробнее</Button>
          <Button
            arrow={reviewsForm ? 'down' : 'right'}
            onClick={() => setReviewsForm(!reviewsForm)}
          >Читать отзывы</Button>
        </div>

      </Card>
      <Card
        color='blue'
        className={classNames(stls.reviewsForm, { [stls.reviewsFormOpen]: reviewsForm })}
      >
        {reviews.map(review => <Review key={review._id} review={review} />)}
        <ReviewForm productId={_id} />
      </Card>
    </div>

  )
}