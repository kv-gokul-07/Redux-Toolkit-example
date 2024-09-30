import { useDispatch, useSelector } from 'react-redux';
import { textFieldOnchange } from '../../redux/reducer/counterReducer';

const DifferentComponent = () => {

  const dispatch = useDispatch();
  const inputValue = useSelector(state => state?.counter?.inputValue);

  const handleChange = (event) => {
    dispatch(textFieldOnchange(event.target.value));
  }

  return (
    <div className='different-component mt-20'>
        <div>DifferentComponent</div>
        <div className="customInput">
            <label>Enter Input</label>
            <input value={inputValue} type="text" maxLength={20} className="input-field" name="text" onChange={handleChange} />
            <h4 className='mt-20'>value: {inputValue}</h4>
        </div>
    </div>
  )
}

export default DifferentComponent