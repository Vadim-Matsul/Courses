import { NextPage } from 'next'
import { SearchPageProps } from './SearchPage.props'
import stls from './SearchPage.module.css';
import { searchAlias } from '../../utils/helpers';
import { useRouter } from 'next/router';
import { Category } from '../../components/Category/Category';
import { Tag } from '../../components/Primitives/Tag/Tag';

export const SearchPage: NextPage<SearchPageProps> = ({ menu }) => {
  const router = useRouter();
  const search = typeof window !== 'undefined' ? router.asPath.split('=')[1] : '';
  const finded = searchAlias(menu, search)

  return (
    <div className='search'>
      {finded.length
        ? finded.map(bundle => (
          <Category
            key={bundle[0]}
            category={bundle[0]}
            aliasS={bundle[1]}
          />
        ))
        : <h3>К сожалению, по запросу {search} ничего не найдено </h3>
      }
    </div>
  )
}