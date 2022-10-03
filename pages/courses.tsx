import axios from 'axios';
import { GetStaticProps, NextPage } from 'next'
import { CATEGORY, HTTP } from '../const';
import { wrapperLayoutHOC } from '../layout'
import { MenuItem } from '../types/menu.types';

interface CoursesProps extends Record<string, unknown> {
  firstCategory: CATEGORY.COURSES,
  menu: MenuItem[]
}

const Courses: NextPage<CoursesProps> = () => <div className='other'>Courses</div>

export default wrapperLayoutHOC<CoursesProps>(Courses);

export const getStaticProps: GetStaticProps<CoursesProps> = async () => {
  const firstCategory = CATEGORY.COURSES;

  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + HTTP.SIDEBAR_NAV, {
    firstCategory
  })

  return {
    props: { menu, firstCategory }
  }
}
