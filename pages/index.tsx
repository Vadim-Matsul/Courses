import { GetStaticProps, NextPage } from 'next';
import React, { useState } from 'react';
import { wrapperLayoutHOC } from '../layout';
import { MenuItem } from '../types/menu.types';
import { CATEGORY, HTTP } from '../const';
import axios from 'axios';

interface ReturnProps extends Record<string, unknown> {
  menu: MenuItem[]
}


const Main: NextPage<ReturnProps> = ({ menu }) => {
  const [num, setNum] = useState(0)

  return (
    <>
      <ul>
        {menu.map((category) =>
          <li key={category._id.secondCategory} >
            {category._id.secondCategory}
          </li>)}
      </ul>
    </>
  );
}

export default wrapperLayoutHOC(Main);


export const getStaticProps: GetStaticProps<ReturnProps> = async () => {
  const firstCategory = CATEGORY.COURSES;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + HTTP.SIDEBAR_NAV, {
    firstCategory
  });

  return {
    props: { menu }
  }
}
