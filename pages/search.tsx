import axios from 'axios';
import { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router';
import { SearchPage } from '../components-pages/SearchPage/SearchPage';
import { CATEGORY, HTTP } from '../const';
import { wrapperLayoutHOC } from '../layout'
import { MenuItem } from '../types/menu.types';
import { searchAlias } from '../utils/helpers';

interface SearchProps extends Record<string, unknown> {
  firstCategory: CATEGORY.COURSES,
  menu: MenuItem[]
}

const Search: NextPage<SearchProps> = ({ menu }) => <SearchPage menu={menu} />

export default wrapperLayoutHOC<SearchProps>(Search);


export const getStaticProps: GetStaticProps<SearchProps> = async () => {
  const firstCategory = CATEGORY.COURSES;

  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + HTTP.SIDEBAR_NAV, {
    firstCategory
  })

  return {
    props: { menu, firstCategory }
  }
}
