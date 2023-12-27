import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...contacts, contact]));
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  }

  const removeContactHandler = (id) => {

    // const newContactList = contacts.filter((contact) =>{
    //   return contact.id !== id;
    // });

    const getContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    getContacts.forEach(row => {
      if (row.id === id) {
        getContacts.splice(getContacts.indexOf(row), 1);
      }
    });
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(getContacts));

    setContacts(getContacts);
  }

  useEffect(() => {
    let contactList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (contactList) {
      setContacts(contactList);
    }
  }, [])

  return (
    <div className='ui container' >
      <Router>
        <Header />
        <Routes>
  <Route path='/add' element={<AddContact addContactHandler={addContactHandler} />} />
  <Route path='/' element={<ContactList contact={contacts} getContactId={removeContactHandler} />} />
</Routes>

      </Router>


    </div>
  );
}

export default App;