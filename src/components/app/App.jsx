import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import ContactForm from "../contact-form/ContactForm.jsx";
import SearchBox from "../search-box/SearchBox.jsx";
import ContactList from "../contact-list/ContactList.jsx";

const contactsList = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const contactListStart = window.localStorage.getItem("contactsList");

    if (contactListStart !== null) {
      return JSON.parse(contactListStart);
    }
    return contactsList;
  });
  const [inputValue, setInputValue] = useState("");

  const contactsJson = JSON.stringify(contacts);

  useEffect(() => {
    localStorage.setItem("contactsList", contactsJson);
  }, [contactsJson]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddContact = (values, actions) => {
    setContacts([
      ...contacts,
      {
        id: nanoid(),
        name: values.name,
        number: values.number,
      },
    ]);
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
