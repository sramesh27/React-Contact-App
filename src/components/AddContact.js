import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
const AddContact = (props) =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const add = (e) =>{
        e.preventDefault();
        if (name === "" || email === "") {
            alert("All the fields are mandatory");
            return;
        }
        props.addContactHandler({name, email, id:uuidv4()});
        setName("");
        setEmail("");
        console.log(e);
    }
    return(
        <div className="ui main">
            <h2 style={{marginTop:"70px"}}>Add Contact</h2>
            <form className="ui form" onSubmit={add}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" value={name} onChange={ (e) => {
                        setName(e.target.value)
                    }}/>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Email" value={email} onChange={ (e) =>{
                        setEmail(e.target.value);
                    }}/>
                </div>
                <button className="ui button blue">Add</button>
            </form>
        </div>
    )
}

export default AddContact;