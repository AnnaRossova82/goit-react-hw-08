import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import css from "./Contact.module.css";
import { HiOutlinePhoneIncoming, HiUserAdd } from "react-icons/hi";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.card}>
      <span>
 
         <p><HiUserAdd /> Name: {name}</p>
            <p><HiOutlinePhoneIncoming /> Number: {number}</p>
      </span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Contact;