import ParentComponent from '../../components/parentComponent/ParentComponent';
import DifferentComponent from '../../components/differentComponent/DifferentComponent';

const Home = () => {    
  return (
    <div className='home-component'>
        <h1 className='textCenter mb-20'>Redux Toolkit Example</h1>
        <ParentComponent />
        <DifferentComponent />
    </div>
  )
}

export default Home