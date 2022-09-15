import { NextPage } from 'next';



const TestGrig: NextPage = () => {


  return (
    <>
      <div className="container">
        <div className="header"
          style={{ background: "skyblue" }}
        >
          <span>Header</span>
          <span>h\1</span>
          <span>h\2</span>
          <span>h\3</span>
          <span>h\4</span>
        </div>
        <div className="main">
          <div className="sidebar">
            <span> navigation 1</span>
            <span> navigation 2</span>
            <span> navigation 3</span>
            <span> navigation 4</span>
            <span> navigation 5</span>
            <span> navigation 6</span>
            <span> navigation 7</span>
            <span> navigation 8</span>
            <span> navigation 9</span>
            <span> navigation 10</span>
          </div>
          <div className="component">component</div>
        </div>
        <div className="footer"
          style={{ background: "black" }}>
          <span>footer</span>
          <span>f\1</span>
          <span>f\2</span>
          <span>f\3</span>
          <span>f\4</span>
        </div>
      </div>
    </>

  );
}


export default TestGrig;
