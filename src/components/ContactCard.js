import React from "react";
import user from '../images/user.png';


const ContactCard = (props) => {
 
    const {  id, name, email } = props.contact;
    return(
        <div className="item" >
            <img className="ui avatar image" src={user} alt="user" />
            <div style={{display:'flex', flexDirection:'row',justifyContent:"space-between"}}>
            
                <div className="content">
                        <p className="header">{name}</p>
                        <p>{email}</p>
                </div>
                <div> 
                    <i className="trash alternate outline icon" style={{ color:"red", marginTop:'7px' }} onClick={() => {props.clickHandler(id)}}></i>
                </div>
            </div>
        </div>
    )
}



 
export default ContactCard;