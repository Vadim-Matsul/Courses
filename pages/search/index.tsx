import axios from 'axios';
import { GetStaticProps } from 'next';
import { CATEGORY, HTTP } from '../../const';
import { wrapperLayoutHOC } from '../../layout';
import { MenuItem } from '../../types/menu.types';

interface SearchPageReturnProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: CATEGORY.COURSES
}

const SearchPage = () => {

  return (
    <div>
      SearchPage
    </div>
  )
}

export default wrapperLayoutHOC<SearchPageReturnProps>(SearchPage);

export const getStaticProps: GetStaticProps<SearchPageReturnProps> = async () => {
  const firstCategory = CATEGORY.COURSES;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + HTTP.SIDEBAR_NAV, {
    firstCategory
  });

  return {
    props: { menu, firstCategory }
  }
}