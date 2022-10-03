import classNames from 'classnames';
import { ProductProps } from './Product.props';
import stls from './Product.module.css';
import { handleTap, translateWordToCase } from '../../utils/helpers';
import { Card, Button, Review, ReviewForm } from '..';
import { ReviewsDeclinations } from '../../const';
import { MutableRefObject, useRef, useState } from 'react';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import ProductLogo from './product-nodes/product_logo'
import ProductPriceBlock from './product-nodes/product_blocks/product_price-block';
import ProductRatingBlock from './product-nodes/product_blocks/product_rating-block';
import ProductCreditBlock from './product-nodes/product_blocks/product_credit-block';
import ProductAdvantagesBlock from './product-nodes/product_blocks/product_advantages-block';
import ProductDisAdvantagesBlock from './product-nodes/product_blocks/product_disAdvantages-block';
import Devider from '../Primitives/Devider/Devider';
import ProductTitle from './product-nodes/product_title';
import ProductTags from './product-nodes/product_tags';
import ProductFich from './product-nodes/product_fich';
import ProductDescription from './product-nodes/product_description';


const Product = React.forwardRef<HTMLDivElement, ProductProps>((props, ref) => {

  const reviewRef = useRef() as MutableRefObject<HTMLDivElement>;
  const stopAnimation = useReducedMotion();

  const { className, product, ...propsProduct } = props;
  const { title, image, price, oldPrice, credit, categories,
    description, characteristics, tags, advantages, disAdvantages, reviews, _id, initialRating, reviewCount } = product;

  const ProductClass = classNames(className, stls.product);
  const reviewsText = `${reviewCount} ${translateWordToCase(reviewCount, ReviewsDeclinations)}`
  const [reviewsForm, setReviewsForm] = useState<boolean>(false);

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

        <ProductLogo className={stls.logo} image={image} title={title} />

        <ProductTitle
          className={stls.title}
          title={title}
        />

        <ProductPriceBlock
          blockClass={stls.price}
          blockClassOpen={stls.priceOpen}
          buttonClass={stls.priceToggle}
          tagClass={stls.discount}

          price={price}
          oldPrice={oldPrice}
        />

        <ProductCreditBlock
          buttonClass={stls.сreditToggle}
          blockClass={stls.credit}
          blockClassOpen={stls.creditOpen}

          credit={credit}
        />

        <ProductRatingBlock
          buttonClass={stls.ratingToggle}
          blockClass={stls.rating}
          blockClassOpen={stls.ratingOpen}

          rating={initialRating}
        />

        <ProductTags
          className={stls.tags}
          categories={categories}
        />

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

        <ProductDescription className={stls.description} description={description} />

        <ProductFich
          BlockClass={stls.fich}
          suretyWClass={stls.suretyWrapper}
          suretyClass={stls.surety}

          characteristics={characteristics}
          tags={tags}
        />

        <div className={stls.advantageBlock}>
          <ProductAdvantagesBlock
            blockClass={stls.advantages}
            blockClassOpen={stls.advantagesOpen}
            buttonClass={stls.advantagesToggle}

            advantages={advantages}
          />
          <ProductDisAdvantagesBlock
            blockClass={stls.disAdvantages}
            blockClassOpen={stls.disAdvantagesOpen}
            buttonClass={stls.disAdvantagesToggle}

            disAdvantages={disAdvantages}
          />
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
export default React.memo(Product);
