import { GetStaticProps, NextPage } from 'next';
import React, { useState } from 'react';
import { wrapperLayoutHOC } from '../layout';
import { MenuItem } from '../types/menu.types';
import { CATEGORY, HTTP } from '../const';
import axios from 'axios';
import { useRouter } from 'next/router';

interface ReturnProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: CATEGORY
}


const Main: NextPage<ReturnProps> = ({ menu }) => {
  const route = useRouter()

  return (
    <>
      MAIN
    </>
  );
}

export default wrapperLayoutHOC<ReturnProps>(Main);


export const getStaticProps: GetStaticProps<ReturnProps> = async () => {
  const firstCategory = CATEGORY.COURSES;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + HTTP.SIDEBAR_NAV, {
    firstCategory
  });

  return {
    props: { menu, firstCategory }
  }
}
