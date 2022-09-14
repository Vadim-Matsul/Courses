import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { Button, HTag, P, Raiting, Tag } from '../components';
import { Arrow, Star } from '../components/svg';
import { Layout } from '../layout';


type NameType = {

}

const Main: NextPage<NameType> = () => {
  const [num, setNum] = useState(0)


  return (
    <Layout>
      <HTag tag='h1'>{num}</HTag>
      <Button appearance arrow='right' onClick={() => setNum(prev => prev += 1)}> Узнать подробнее </Button>
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
      ________________________

      <div style={{ background: 'white' }}>
        <Raiting />
        <Raiting rating={1} />
        <Raiting isEditable />
        <Raiting rating={4} isEditable />
      </div>
    </Layout>
  );
}


export default Main;
