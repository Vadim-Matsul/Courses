import { NextPage } from "next"
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";
import Loader from "../../components/loader/loader";
import { Http } from "../../const";
import cl from '../../styles/layout.module.css';
import { Post } from "../../types/pages";


type CurrentPostProps = {
  post: Post | null
}

const CurrentPost: NextPage< CurrentPostProps > = ({ post }) => {
  
  const [ currentPost, setCurrentPost ] = useState( post );
  const { id } = useRouter().query;

  useEffect(() => {
    async function loadPost (){
      const data:Post = await( await fetch( Http.Posts + `/${id}`) ).json();
      setCurrentPost( data )
    }
    if(!post){ loadPost() }
  },[])

  if ( !currentPost ){ return (
    <Layout title="Loading...">
      <Loader/>
    </Layout>
  ) }

  function handlerClick(){ Router.back(); }


  return (
    <Layout title="Current Post">
      <>
        <section className={ cl.CurrentPost }>
          <span>Id: { currentPost.id }</span>
          <span>Title: { currentPost.title }</span>
          <span>Body: { currentPost.body }</span>
        </section>
        <button
          className={ cl.CurrentPostButton }
          onClick={ handlerClick }
        >Go back to Posts
        </button>   
      </>
    </Layout>
  );
};

CurrentPost.getInitialProps = async ({ req, query }) => {
  if (!req){ return { post: null } }
  const post:Post = await( await fetch( Http.Posts + `/${query.id}`) ).json();
  return { post }
}

export default CurrentPost;