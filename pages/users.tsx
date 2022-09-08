import { GetStaticProps, NextPage, NextPageContext } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import LayoutNav from '../components/layout';
import { User } from '../types/data';
import type { InferGetStaticPropsType } from 'next';
import { join } from 'path';
import { promises as fs } from 'fs'

type ReturnProps = {
  Users: User[]
}



export const getStaticProps: GetStaticProps< ReturnProps > = async ( ctx ) => {
  const response = await (await fetch('http://localhost:3800/users')).json()
  console.log('process.cwd()',process.cwd() );
  return {
    props: { Users: response },
    revalidate: 10
  }
}
/*
*
*
*
*/

const UsersScreen: NextPage< InferGetStaticPropsType< typeof getStaticProps > > = ({ Users }) => {
  const [users, setusers] = useState(Users)


  return (
    <LayoutNav>
      <>
        <h1> Страница пользователей обновление  </h1>
        <ul>
          {users.map((user) =>
            <li key={user.id}>
              <Link href={`/users/${user.id}`}>
                <a>{user.id} - {user.name}</a>
              </Link>
            </li>
          )}
        </ul>
      </>
    </LayoutNav>
  );
}


export default UsersScreen;
