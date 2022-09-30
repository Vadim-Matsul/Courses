import classNames from 'classnames';
import { NextPage } from 'next';
import { ReviewProps } from './Review.props';
import { User } from '../svg';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Button, Devider } from '..';
import stls from './Review.module.css';
import { useState } from 'react';
import Raiting from '../Raiting/Raiting';
import { motion, useReducedMotion } from 'framer-motion';

export const Review: NextPage<ReviewProps> = ({ review, tabIndex, className, ...props }) => {

  const stopAnimation = useReducedMotion();
  const [descOpen, setDescOpen] = useState<boolean>(false)
  const { title, description, name, createdAt, rating } = review;
  const ReviewClass = classNames(className, stls.review)
  const date = format(new Date(createdAt), 'dd MMMM yyyy ', { locale: ru })


  return (
    <>
      <div
        {...props}
        className={ReviewClass}
      >
        <User className={stls.user} />
        <div className={stls.info} >
          <span className={stls.name} >{name}</span>
          <span className={stls.title}>{title}</span>
        </div>
        <span className={stls.date} >{date}</span>
        <Raiting rating={rating} className={stls.rating} />

        <Button
          className={stls.descButton}
          onClick={() => setDescOpen(!descOpen)}
          arrow={descOpen ? 'down' : 'right'}
          tabIndex={tabIndex}
        >Описание</Button>
        <motion.div className={classNames(stls.description, {
          [stls.descriptionOpen]: descOpen
        })}
        >
          {description}
        </motion.div>

      </div>
      <Devider className={stls.hr} />
    </>

  )
}