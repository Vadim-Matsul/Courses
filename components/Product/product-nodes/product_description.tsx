import React from 'react';
import { P } from '../..';
import { DetailedProps } from '../../svg/types';

interface ProductDescriptionProps extends DetailedProps {
  description: string
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ description, ...props }) => <P {...props} >{description}</P>
export default React.memo(ProductDescription);
