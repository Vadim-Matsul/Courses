import { NextPage } from 'next';


type NameType = {

}

const Test: NextPage<NameType> = () => {


  return (
    <>
      <div className="wrapper">
        <div className="header">header</div>
        <div className="sidebar">sidebar</div>
        <div className="component">component</div>
        <div className="footer">footer</div>
      </div>
    </>
  );
}


export default Test;
