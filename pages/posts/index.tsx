import { NextPage } from "next"
import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import Loader from "../../components/loader";
import { Http } from "../../const";
import { Posts } from "../../types/pages";


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
        <div>
          <pre>
            { JSON.stringify( data, null, 2) }
          </pre>
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
