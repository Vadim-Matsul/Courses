import React from 'react';
import { HTag, Tag } from '../..';
import { DetailedProps } from '../../svg/types';

interface ProductTagsProps extends DetailedProps {
  categories: string[]
}

const ProductTags: React.FC<ProductTagsProps> = ({ categories, ...props }) => (
  <div {...props}>
    {categories.map(tag => <Tag key={tag} color='ghost'>{tag}</Tag>)}
  </div>
)

export default React.memo(ProductTags);
