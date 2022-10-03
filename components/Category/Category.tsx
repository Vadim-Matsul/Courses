import { NextPage } from 'next';
import { Card } from '../Card/Card';
import Devider from '../Primitives/Devider/Devider';
import { CategoryProps } from './Category.props';
import stls from './Category.module.css';
import { useRouter } from 'next/router';

export const Category: NextPage<CategoryProps> = ({ category, aliasS }) => {

  const router = useRouter();
  const handleAliasClick = (alias: string) => {
    router.push({
      pathname: `courses/${alias}`
    })
  }

  return (
    <>
      <Card>
        <span
          className='visually-aria-hidden'
          id={`${category}`}>Категория {category} элементов {aliasS.length}</span>
        <ul
          tabIndex={0}
          aria-labelledby={`${category}`}
          className={stls.category}
        >
          {category}
          {aliasS.map(alias => (
            <li
              key={alias}
              tabIndex={0}
              className={stls.alias}
              onClick={() => handleAliasClick(alias)}
            >{alias}</li>
          ))}
        </ul>
      </Card>
      <Devider />
    </>

  )
}