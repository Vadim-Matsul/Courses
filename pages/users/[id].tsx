import { GetServerSideProps, GetStaticPaths, GetStaticPropsContext, InferGetServerSidePropsType, InferGetStaticPropsType, NextPage, NextPageContext } from "next";
import { NextRouter, useRouter } from "next/router";
import LayoutNav from "../../components/layout";
import type { GetStaticProps } from 'next';
import { Posts, User } from "../../types/data";

type ReturnProps = {
  user: User
}

const User: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ( { user } ) => {
  return (
    <LayoutNav >
      <>
        <h1>Уникальная страница User </h1>
        <pre>
          {JSON.stringify(user, null, 2)}
        </pre>
      </>
    </LayoutNav>
  );
}
/*
*
*
*
*/

export const getStaticPaths:GetStaticPaths = async () => {
  console.log('process.cwd() User ', process.cwd() )
  const users:User[] = await( await fetch('http://localhost:3800/users') ).json();
  const paths = users.map((user) => ({ params:{ id: user.id.toString() } }))


  return {
    paths: paths,
    fallback: 'blocking'
  }
}


export const getStaticProps: GetStaticProps<ReturnProps> = async ({ params }) => {
  const user = await (await fetch(`http://localhost:3800/users/${params?.id}`)).json()

  return {
    props: { user },
    revalidate: 10
  }
}


export default User;
