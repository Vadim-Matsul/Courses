import classNames from 'classnames';
import { NextPage } from 'next';
import stls from './Search.module.css';
import { Button, Input } from '../../components';
import { Magnifier } from '../../components/svg';
import { SearchProps } from './Search.props';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { MenuDataRoutes } from '../../const';
import React from 'react';

export const Search: NextPage<SearchProps> = ({ className, ...props }) => {

  const [search, setSearch] = useState<string>('');
  const router = useRouter();
  const SearchClass = classNames(className, stls.search)

  const handlerSearchClick = () => {
    router.push({
      pathname: MenuDataRoutes.SEARCH,
      query: {
        q: search
      }
    })
  }

  const handlerInputEnterSearch = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    const shouldSearch = evt && evt.code === 'Enter';
    shouldSearch && handlerSearchClick();
  }

  return (
    <div {...props} className={SearchClass} >
      <Input
        placeholder='Поиск...'
        onChange={ev => setSearch(ev.target.value)}
        value={search}
        onKeyDown={evt => handlerInputEnterSearch(evt)}
      />
      <Button
        appearance
        onClick={handlerSearchClick}
      >
        <Magnifier />
      </Button>
    </div>
  )
}