import { NextPage } from 'next';
import React from 'react';

type NameType = {

}

const Main:NextPage< NameType > = () => {
  let a = 5;

  return(
    <>
      <h1>Main Screen</h1>
      <h2>{ a }</h2>
    </>
  );
}


export default Main;
