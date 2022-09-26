import React, { TextareaHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';
import { DetailedProps } from '../svg/types';

export interface TextAreaProps extends React.DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  errors?: FieldError;
}
