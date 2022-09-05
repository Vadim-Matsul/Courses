import { NextPage } from "next"
import Layout from "../layout/layout";
import cl from '../../styles/layout.module.css';

const Loader: NextPage = () => {
  
  return (
    <Layout>
      <>
        <span className={ cl.Loading }> Loading... </span>
      </>
    </Layout>
  );
 
};
export default Loader;