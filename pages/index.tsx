import { NextPage } from 'next';
import Link from 'next/link';
import LayoutNav from '../components/layout';


type NameType = {

}

const Index:NextPage< NameType > = () => {


  return(
    <LayoutNav>
      <h1> Главная страница </h1>
    </LayoutNav>
  );
}


export default Index;
