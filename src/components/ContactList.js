import React from "react";
import ContactCard from "./ContactCard";
import { Link } from 'react-router-dom';

const ContactList = (props) => {

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }



    const renderContactList = props.contact.map((contact) => {
        return (
            <ContactCard contact={contact} clickHandler={deleteContactHandler} />
        );
    });

    return (

        <div className="ui celled list" style={{ marginTop: '50px' }}>
            <h2>Contact List
                <Link to="/add"><button className="ui button blue right">Add Contact</button></Link>
            </h2>
            {renderContactList}
        </div>
    )
}
export default ContactList;