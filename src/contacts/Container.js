import React from 'react';
import Subheader from "./Subheader";
import AddingForm from "./AddingForm";
import Contact from "./Contact";

const Container = (props) => {
    return (
        <div>
       <Subheader contactsBlockName={props.contactsBlockName}/>
            <AddingForm/>
            <ol>
                {props.contacts.map(el=> <Contact contact={el}/>)}
            </ol>

        </div>
    );
};

export default Container;
