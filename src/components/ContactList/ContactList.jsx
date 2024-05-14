import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import css from "./ContactList.module.css";
import Contact from '../Contact/Contact';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.container}>
      {filteredContacts.map((contact) => (
        <div className={css.card} key={contact.id}>
          <Contact id={contact.id} name={contact.name} number={contact.number} />
        </div>
      ))}
    </div>
  );
};

export default ContactList;



/* import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import css from "./ContactList.module.css";
import Contact from '../Contact/Contact';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const searchTerm = useSelector(state => state.filters.name);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={css.container}>
      {filteredContacts.map((contact) => (
        <div className={css.card} key={contact.id}>
          <Contact id={contact.id} name={contact.name} number={contact.number} />
        </div>
      ))}
    </div>
  );
};

export default ContactList; */


/* import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, selectContacts } from '../../redux/contactsSlice';
import css from "./ContactList.module.css";
import { HiOutlinePhoneIncoming, HiUserAdd } from "react-icons/hi";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const searchTerm = useSelector(state => state.filters.name);
  const dispatch = useDispatch(); // Додано оголошення dispatch

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.container}>
      {filteredContacts.map((contact) => (
        <div className={css.card} key={contact.id}>
          <span>
            <p><HiUserAdd /> Name: {contact.name}</p>
            <p><HiOutlinePhoneIncoming /> Number: {contact.number}</p>
          </span>
          <button className={css.buttonDel} onClick={() => handleDelete(contact.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ContactList; */