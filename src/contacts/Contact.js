import React from 'react';

const Contact = (props) => {
    console.log(props)
    return (
        <div>
           <li>
               {props.contact.name}
               {' '}
               phone number:{props.contact.tel}
           </li>
        </div>
    );
};

export default Contact;
