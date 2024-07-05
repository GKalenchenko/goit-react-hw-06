import { useEffect, useState } from "react";
import css from "../App/App.module.css";
import ContactList from "../ContactList/ContactList";
import initialElements from "../../contacts.json";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

function App() {
  const [contacts, setContacts] = useState(() => {
    const localStorageData = JSON.parse(
      window.localStorage.getItem("contacts")
    );

    if (localStorageData !== null) {
      return localStorageData;
    }

    return initialElements;
  });
  const [filter, setFilter] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(filteredContacts));
  }, [filteredContacts]);

  const addContact = (newContact) => {
    setContacts((existContacts) => {
      return [...existContacts, newContact];
    });
  };

  const deleteContact = (elementId) => {
    setContacts(contacts.filter((contact) => contact.id !== elementId));
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onFormSubmit={addContact} />
      <SearchBox value={filter} onAction={setFilter} />
      <ContactList elementsList={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
