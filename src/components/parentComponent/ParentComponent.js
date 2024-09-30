import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, textFieldOnchange } from "../../redux/reducer/counterReducer";
import ChildComponent from "../child component/ChildComponent";
import "./parentComponent.css";
import { useEffect } from "react";

const ParentComponent = () => {

  const inputValue = useSelector(state => state?.counter?.inputValue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [])

  const handleChange = (event) => {
    dispatch(textFieldOnchange(event.target.value));
  }

  return (
        <div className='wrapper'>
          <div className='parent-component'>
            Parent component
              <div className="customInput">
                <label>Enter Input</label>
                <input value={inputValue} type="text" maxLength={20} className="input-field" name="text" onChange={handleChange} />
                <h4 className='mt-20'>value: {inputValue}</h4>
              </div>
          </div>
          <div className='child-component'>
            <ChildComponent />
          </div>
    </div>
  )
}

export default ParentComponent