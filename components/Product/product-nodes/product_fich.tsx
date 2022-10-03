import React from 'react';
import { Tag } from '../..';
import { Characteristic as CharacteristicType } from '../../../types/product.types';
import { Characteristic } from '../../Characteristic/Characteristic';
import { DetailedProps } from '../../svg/types';
import ProductTags from './product_tags';

interface ProductFichProps extends DetailedProps {
  BlockClass: string,
  suretyWClass: string,
  suretyClass: string,

  tags: string[],
  characteristics: CharacteristicType[]
}

const ProductFich: React.FC<ProductFichProps> = (props) => {

  const { BlockClass, suretyWClass, suretyClass, characteristics, tags } = props;

  return (
    <div className={BlockClass}>
      <Characteristic characteristics={characteristics} />
      <div className={suretyWClass} >
        <ProductTags className={suretyClass} categories={tags} />
      </div>
    </div>
  );
};

export default React.memo(ProductFich);
