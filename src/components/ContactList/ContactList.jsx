 import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
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

