import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { refreshUser } from '../redux/auth/operations';
import { selectIsRefreshing } from '../redux/auth/selectors';
import HomePage from '../pages/HomePage';
import RegistrationPage from '../pages/RegistrationPage';
import LoginPage from '../pages/LoginPage';
import ContactsPage from '../pages/ContactsPage';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import Layout from './Layout/Layout';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <p>Loading...</p>;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={<RestrictedRoute component={RegistrationPage} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={LoginPage} />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute component={ContactsPage} />}
        />
      </Route>
    </Routes>
  );
};

export default App;



/* import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations'; // Corrected import
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchContacts());
  }, [dispatch]); 

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App; */

