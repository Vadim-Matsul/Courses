import { NextPage } from "next"
import { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";
import Loader from "../../components/loader/loader";
import Post from "../../components/post/post";
import { Http } from "../../const";
import { Posts } from "../../types/pages";
import cl from '../../styles/layout.module.css';
type PostsScreenProps = {
  posts: Posts | []
}


const PostsScreen: NextPage< PostsScreenProps > = ({ posts }) => {
  
  const [ data, setData ] = useState( posts )

  useEffect(() => {
    async function loadPosts(){
      const response:Posts = await( await fetch( Http.Posts ) ).json();
      setData( response );
    }

    if(!posts.length){ loadPosts() }
  }, [])

  if (!data.length){ return <Loader/> }

  return (
    <Layout>
      <>
        <h1> Posts Screen </h1>
        <h2> We have this base: </h2>
        <div className={ cl.Posts }>
          { data.map( (post) => <Post post={ post }/>) }
        </div>
      </>
    </Layout>
  );
};

PostsScreen.getInitialProps = async ( ctx ) => {
  if (!ctx.req){ return { posts: [] } }
  const response:Posts = await( await fetch( Http.Posts ) ).json();
  return { posts: response }
}

export default PostsScreen;
