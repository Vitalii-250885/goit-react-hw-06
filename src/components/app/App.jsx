import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";

import ContactForm from "../contact-form/ContactForm.jsx";
import SearchBox from "../search-box/SearchBox.jsx";
import ContactList from "../contact-list/ContactList.jsx";

const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contacts);

  // const [contacts, setContacts] = useState(() => {
  //   const contactListStart = window.localStorage.getItem("contactsList");

  //   if (contactListStart !== null) {
  //     return JSON.parse(contactListStart);
  //   }
  //   return contactsList;
  // });
  // const [inputValue, setInputValue] = useState("");

  const contactsJson = JSON.stringify(contacts);

  useEffect(() => {
    localStorage.setItem("contactsList", contactsJson);
  }, [contactsJson]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddContact = (values, actions) => {
    const action = {
      type: "contacts/addContact",
      payload: values,
    };

    dispatch(action);

    // setContacts([
    //   ...contacts,
    //   {
    //     id: nanoid(),
    //     name: values.name,
    //     number: values.number,
    //   },
    // ]);
    actions.resetForm();
  };

  const handleDelete = (id) => {
    const removeContact = contacts.filter((contact) => contact.id !== id);
    setContacts(removeContact);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox inputValue={inputValue} onChange={handleChange} />
      <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
    </>
  );
};

export default App;
