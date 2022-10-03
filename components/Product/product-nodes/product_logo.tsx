import React from 'react';
import { DetailedProps } from '../../svg/types';
import Image from 'next/image'

interface ProductLogoProps extends DetailedProps {
  image: string,
  title: string
}

const ProductLogo: React.FC<ProductLogoProps> = ({ image, title, ...props }) => (
  <div {...props} >
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
)

export default React.memo(ProductLogo);