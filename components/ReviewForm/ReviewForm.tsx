import classNames from 'classnames';
import { NextPage } from 'next';
import { ReviewFormProps, FormData, responsePostReview } from './ReviewForm.props';
import stls from './ReviewForm.module.css';
import { Input, TextArea, Button } from '..';
import { MiniClose } from '../svg';
import { useForm, Controller } from 'react-hook-form';
import React, { useRef, useState } from 'react';
import axios from 'axios';
import { HTTP } from '../../const';
import Raiting from '../Raiting/Raiting';

export const ReviewForm: NextPage<ReviewFormProps> = ({ productId, className, ...props }) => {

  const ReviewFormClass = classNames(stls.reviewForm, className)
  const [submitState, setSubmitState] = useState({ successfull: false, rejected: false })

  const {
    control,
    register,
    reset,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm<FormData>({ mode: 'onChange' });

  const handleFormSubmit = async (formData: FormData) => {
    try {
      const { data } = await axios.post<responsePostReview>(process.env.NEXT_PUBLIC_DOMAIN + HTTP.POSTREVIEW, {
        ...formData,
        productId
      })
      if (data.message) {
        setSubmitState({ rejected: false, successfull: true });
        reset();
      }
    } catch (e) {
      setSubmitState({ successfull: false, rejected: true })
    }
  }

  const firstnameRegister = {
    ...register('name', {
      required: {
        value: true,
        message: 'Заполните имя'
      },
      pattern: {
        value: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u,
        message: 'Неизвестные символы'
      }
    })
  };

  const titleRegister = {
    ...register('title', {
      required: {
        value: true,
        message: 'Заполните заголовок'
      },
      maxLength: {
        value: 40,
        message: 'Длинный заголовок'
      }
    })
  };

  const descriptionRegister = {
    ...register('description', {
      required: {
        value: true,
        message: 'Заполните описание'
      },
      maxLength: {
        value: 250,
        message: 'Длинное описание'
      }
    })
  }


  return (
    <form
      className={ReviewFormClass} {...props}
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <Input
        placeholder='Имя'
        className={stls.firstname}
        errors={errors.name}
        {...firstnameRegister}
      />
      <Input
        placeholder='Заголовок отзыва'
        className={stls.title}
        errors={errors.title}
        {...titleRegister}
      />
      <div className={stls.rating}>
        <span>Оценка:</span>
        <Controller
          name='rating'
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Укажите оценку'
            }
          }}
          render={({ field, fieldState }) => {
            return (<Raiting
              isEditable
              rating={field.value}
              ref={field.ref}
              setRating={field.onChange}
              errors={fieldState.error}
            />)
          }}
        />
      </div>
      <TextArea
        placeholder='Текст отзыва'
        className={stls.description}
        errors={errors.description}
        {...descriptionRegister}
      />
      <div className={stls.submit}>
        <Button
          appearance
          type='submit'
        >Отправить</Button>
        <span>*Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
      </div>
      {submitState.successfull &&
        <div className={stls.successfullySubmit} >
          <MiniClose
            className={stls.close}
            onClick={() => setSubmitState({ ...submitState, successfull: false })}
          />
          <span>Спасибо, ваш отзыв успешно отправлен!</span>
        </div>}
      {submitState.rejected &&
        <div className={stls.rejectedSubmit} >
          <MiniClose
            onClick={() => setSubmitState({ ...submitState, rejected: false })}
          />
          <span>Что-то пошло не так, попробуйте обновить страницу</span>
        </div>}
    </form>
  )
}