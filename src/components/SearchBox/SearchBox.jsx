import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
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

/* 
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.filters.name);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value)); 
  };

  return (
    <input
      type="text"
      placeholder="Search contacts..."
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

export default SearchBox; */