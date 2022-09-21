import { NextPage } from 'next';
import { SearchProps } from './Search.props';
import stls from './Search.module.css';

export const Search: NextPage<SearchProps> = ({ className, ...props }) => {

  return (
    <div className={stls.searchWrapper} >
      Search
    </div>
  );
}

