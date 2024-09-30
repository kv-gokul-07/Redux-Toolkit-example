import { memo } from "react";
import { useSelector } from "react-redux";

const ChildComponent = () => {

  const counter = useSelector(state => state?.counter);

  return (
    <>
        <div>Child component</div>
        <h4 className='mt-20 fw500'>Input value from parent component: {counter?.inputValue}</h4>
        <ul>
          {counter?.items?.length > 0 && counter?.items?.map(item => <li key={item.id}>{item.title}</li>)}
        </ul>
    </>
  )
}

export default memo(ChildComponent);