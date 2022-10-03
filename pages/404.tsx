import { wrapperLayoutHOC } from '../layout';


const Error404 = () => (<div className='other' >404</div>);

export default wrapperLayoutHOC(Error404) 
