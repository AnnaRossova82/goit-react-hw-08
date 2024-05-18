import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations'; // має бути logOut
import { selectUser } from '../../redux/auth/selectors';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <span className={css.welcome}>Welcome, {user.name}</span>
      <button onClick={() => dispatch(logOut())}>Logout</button>
    </div>
  );
};

export default UserMenu;