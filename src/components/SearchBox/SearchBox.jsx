import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';
import css from './SearchBox.module.css'

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectNameFilter);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value)); 
  };

  return (
    <input className = {css.input}
      type="text"
      placeholder="Search contacts..."
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

export default SearchBox;
