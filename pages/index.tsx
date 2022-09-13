import { NextPage } from 'next';
import React from 'react';
import { Button, HTag, P, Tag } from '../components';


type NameType = {

}

const Main: NextPage<NameType> = () => {

  return (
    <div>
      <HTag tag='h1'> Some Text </HTag>
      <Button appearance arrow='right'> Узнать подробнее </Button>
      <Button arrow='down' > Узнать подробнее </Button>
      <P size='small'>Small</P>
      <P>Medium</P>
      <P size='large' >Big</P>
      ________________________
      <Tag size='large' color='grey'> 10 </Tag>
      <Tag size='medium' color='ghost' > Photoshop </Tag>
      <Tag color='ghost' > Дизайн </Tag>
      <Tag color='green'> -10.000 </Tag>
      <Tag size='large' color='red'> hh.ru </Tag>
      <Tag size='medium' href='/' > primary </Tag>

    </div>
  );
}


export default Main;
