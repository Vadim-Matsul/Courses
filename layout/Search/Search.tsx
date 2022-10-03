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

  const handlerSearchClick = (evt: React.MouseEvent | React.KeyboardEvent) => {
    evt.preventDefault()

    router.push({
      pathname: MenuDataRoutes.SEARCH,
      query: {
        alias: search
      }
    })
  }

  const handlerInputEnterSearch = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    const shouldSearch = evt && evt.code === 'Enter';
    shouldSearch && handlerSearchClick(evt);
  }

  return (
    <form {...props} className={SearchClass} role='search' >
      <Input
        placeholder='Поиск по категориям...'
        onChange={ev => { ev.target.value.length < 40 && setSearch(ev.target.value) }}
        value={search}
        onKeyDown={evt => handlerInputEnterSearch(evt)}
      />
      <Button
        appearance
        onClick={handlerSearchClick}
        aria-label='Искать по сайту'
      >
        <Magnifier />
      </Button>
    </form>
  )
}