import Contact from "../contact/Contact";

import css from "./ContactList.module.css";

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul className={css["contact-list"]}>
      {contacts.map((contactItem) => (
        <Contact
          key={contactItem.id}
          name={contactItem.name}
          number={contactItem.number}
          handleDelete={() => handleDelete(contactItem.id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
