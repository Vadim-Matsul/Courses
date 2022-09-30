import classNames from 'classnames';
import { OpenStaticType, ProductProps } from './Product.props';
import stls from './Product.module.css';
import Image from 'next/image';
import { getFormatter, handleTap, translateWordToCase } from '../../utils/helpers';
import { Devider, P, Card, Tag, HTag, Button, Review, ReviewForm } from '..';
import { ReviewsDeclinations } from '../../const';
import { Characteristic } from '../Characteristic/Characteristic';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Raiting from '../Raiting/Raiting';



const Product = React.forwardRef<HTMLDivElement, ProductProps>((props, ref) => {

  const reviewRef = useRef() as MutableRefObject<HTMLDivElement>;
  const stopAnimation = useReducedMotion();

  const { className, product, ...propsProduct } = props;
  const { title, image, price, oldPrice, credit, categories,
    description, characteristics, tags, advantages, disAdvantages, reviews, _id, initialRating } = product;

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

  function ScrollToReview(): void {
    setReviewsForm(true);

    setTimeout(() => {
      reviewRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
      reviewRef.current.focus();
    }, 50)
  }



  const variants = {
    hidden: {
      height: 0,
      opacity: 0,
      overflow: 'hidden',
      transition: {
        duration: stopAnimation ? 1.3 : 0.5
      }
    },
    visible: {
      height: 'auto',
      opacity: 1,
      transition: {
        duration: stopAnimation ? 1.5 : 0.7
      }
    }
  }



  return (
    <div  {...propsProduct} ref={ref} >
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
          tabIndex={-1}
          aria-hidden={true}
        >Цена</Button>
        <motion.div
          className={classNames(stls.price, { [stls.priceOpen]: osP })}
          layout={stopAnimation ? false : true}
        >
          <span>
            <span className='visually-aria-hidden'>Цена</span>
            {formatter.format(price)}
          </span>
          {oldPrice &&
            <Tag color='green' className={stls.discount}>
              <span className='visually-aria-hidden'>Скидка</span>
              {formatter.format(price - oldPrice)}
            </Tag>
          }
        </motion.div>

        <Button className={stls.сreditToggle}
          onClick={() => hanlderStaticOpen(f, !osC, f, osA, osDA)}
          tabIndex={-1}
          aria-hidden={true}
        >В кредит</Button>
        <motion.span
          className={classNames(stls.credit, { [stls.creditOpen]: osC })}
          layout={stopAnimation ? false : true}
        >
          <span className='visually-aria-hidden'>Кредит</span>
          {formatter.format(credit)}<span>/мес</span>
        </motion.span>

        <Button className={stls.ratingToggle}
          onClick={() => hanlderStaticOpen(f, f, !osR, osA, osDA)}
          tabIndex={-1}
          aria-hidden={true}
        >Рейтинг</Button>

        <Raiting
          className={classNames(stls.rating, { [stls.ratingOpen]: osR })}
          rating={initialRating}
        />

        <div className={stls.tags}>
          {categories.map(tag => <Tag key={tag} color='ghost'>{tag}</Tag>)}
        </div>

        <span className={stls.cost} aria-hidden={true} >цена</span>
        <span className={stls.inCredit} aria-hidden={true}>в кредит</span>
        <span className={stls.reviews} >
          <a
            href='#scrollRef'
            onClick={ScrollToReview}
            onKeyDown={evt => handleTap<HTMLAnchorElement>(evt, ScrollToReview)}
          >
            {reviewsText}
          </a>
        </span>

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
                tabIndex={-1}
              >Преимущества</Button>
              <motion.div
                layout={stopAnimation ? false : true}
                transition={{ duration: 0.2 }}
                className={classNames(stls.advantages, { [stls.advantagesOpen]: osA })}
              >
                <div>Преимущества</div>
                {advantages}
              </motion.div>
            </>}
          {disAdvantages &&
            <>
              <Button
                className={stls.disAdvantagesToggle}
                onClick={() => hanlderStaticOpen(osP, osC, osR, f, !osDA)}
                tabIndex={-1}
              >Недостатки</Button>
              <motion.div
                className={classNames(stls.disAdvantages, { [stls.disAdvantagesOpen]: osDA })}
                layout={stopAnimation ? false : true}
                transition={{ duration: 0.2 }}
              >
                <div>Недостатки</div>
                {disAdvantages}
              </motion.div>
            </>}
        </div>

        <Devider className={stls.hr} />

        <div className={stls.buttonsBlock} >
          <Button appearance >Узнать подробнее</Button>
          <Button
            arrow={reviewsForm ? 'down' : 'right'}
            onClick={() => setReviewsForm(!reviewsForm)}
            aria-expanded={reviewsForm}
          >Читать отзывы</Button>
        </div>

      </Card>
      <motion.div
        layout={stopAnimation ? false : true}
        initial={'hidden'}
        animate={reviewsForm ? 'visible' : 'hidden'}
        variants={variants}
      >
        <Card
          color='blue'
          ref={reviewRef}
          className={stls.reviewsForm}
        >
          {reviews.map(review => <Review key={review._id} review={review} tabIndex={reviewsForm ? 0 : -1} />)}
          <ReviewForm productId={_id} tabIndex={reviewsForm ? 0 : -1} />
        </Card>
      </motion.div>
    </div>

  )
})

Product.displayName = 'Product';
export default motion(Product);