import { NextPage } from 'next';
import React from 'react';
import { Button, HTag } from '../components';


type NameType = {

}

const Main: NextPage<NameType> = () => {

  return (
    <div>
      <HTag tag='h1'> Some Text </HTag>
      <Button appearance > Узнать подробнее </Button>
      <Button arrow='down' > Узнать подробнее </Button>
    </div>
  );
}


export default Main;
