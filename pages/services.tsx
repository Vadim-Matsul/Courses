import axios from 'axios';
import { GetStaticProps, NextPage } from 'next'
import { CATEGORY, HTTP } from '../const';
import { wrapperLayoutHOC } from '../layout'
import { MenuItem } from '../types/menu.types';

interface ServicesProps extends Record<string, unknown> {
  firstCategory: CATEGORY.SERVIСES,
  menu: MenuItem[]
}

const Services: NextPage<ServicesProps> = () => <div className='other'>SERVICES</div>

export default wrapperLayoutHOC<ServicesProps>(Services);

export const getStaticProps: GetStaticProps<ServicesProps> = async () => {
  const firstCategory = CATEGORY.SERVIСES;

  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + HTTP.SIDEBAR_NAV, {
    firstCategory
  })

  return {
    props: { menu, firstCategory }
  }
}
