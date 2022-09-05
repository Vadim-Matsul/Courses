import { NextPage } from "next"
import Link from "next/link";
import { AppRoute } from "../../const";
import cl from '../../styles/layout.module.css';
import { Post } from "../../types/pages";


type PostProps = {
  post: Post
}

const Post: NextPage< PostProps > = ({ post }) => {
  
  
  return (
    <div className={ cl.Post }>
      <p className={ cl.PostNum }>{ post.id }</p>
      <span>
        <p>Title</p> 
        <Link
          href={ AppRoute.Posts + `/${post.id}` }
        >
          <a>{ post.title }</a>
        </Link>
      </span>
      <span><p>Body</p>Body: { post.body.toUpperCase() }</span>
    </div>
  );
};


export default Post;