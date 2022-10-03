import React from 'react';
import { HTag } from '../..';
import { DetailedProps } from '../../svg/types';

interface ProductTitleProps extends DetailedProps {
  title: string
}

const ProductTitle: React.FC<ProductTitleProps> = ({ title, ...props }) => (
  <div {...props} >
    <HTag tag='h2' >{title}</HTag>
  </div>
)

export default React.memo(ProductTitle);
