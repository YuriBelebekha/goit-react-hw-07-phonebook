import { useDispatch, useSelector } from "react-redux";
import { setFilter, getFilter } from 'redux/filterSlice';
// import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();  
  const filter = useSelector(getFilter);

  const onChangeFilter = e => {
    dispatch(
      setFilter(e.target.value)
    );
  };

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={onChangeFilter}        
      />
    </label>
  )
};

export default Filter;