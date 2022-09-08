import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import LayoutNav from '../../components/layout';
import { Posts } from '../../types/data';



type returnProps = {
    posts: Posts
}


export const getStaticProps:GetStaticProps< returnProps > = async () => {
  const res = await fetch('http://localhost:3800/posts');
  const posts = await res.json();

  return {
    props: {
      posts
    }
  }
}


const PostsScreen: NextPage< InferGetStaticPropsType< typeof getStaticProps > > = ( { posts } ) => {


  return(
    <LayoutNav>
      <>
        <h1> Страница Постов </h1>
        <pre>{
          JSON.stringify( posts, null, 2)
        }</pre>
      </>
    </LayoutNav>
  );
}


export default PostsScreen;
