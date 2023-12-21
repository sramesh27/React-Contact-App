import React from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {

  const contact =[
    {
      id : "1",
      name : "saranya",
      email : "saran@gmail.com" 
    },
    {
      id : "2",
      name : "dinesh",
      email : "dinesh@gmal.com" 
    } 

  ]
  return (
    <div className='ui container' >
      <Header />
      <AddContact />
      <ContactList contact={contact} />
    </div>
  );
}

export default App;