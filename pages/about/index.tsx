import { NextPage } from "next"
import { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";
import Loader from "../../components/loader/loader";
import { Http } from "../../const";
import { AboutInfo } from "../../types/pages";


type AboutScreenProps = {
  info: AboutInfo | null
}

const AboutScreen: NextPage< AboutScreenProps > = ({ info }) => {
  
  const [ data, setData ] = useState< AboutInfo | null >( info );

  useEffect(() => {
    async function loadInfo () {
      const response: AboutInfo = await ( await fetch( Http.About )).json();
      setData(  response )
    }
    if (!info){ loadInfo() }
  }, [])
  

  if (!data){ return (
    <Layout title="About Loading...">
      <Loader/>
    </Layout>
  )}

  return (
    <Layout title="About Us">
      <>
        <h1> About Screen </h1>
        <pre>{
          JSON.stringify( data, null, 2 )
        }</pre>
      </>
    </Layout>
  );
 
};

AboutScreen.getInitialProps = async ( ctx ) => {
  if (!ctx.req){ return { info: null } }
  const response: AboutInfo = await ( await fetch( Http.About )).json();
  return { info: response }
}

export default AboutScreen;