import React from 'react';
import Subheader from "./Subheader";
import AddingForm from "./AddingForm";
import Contact from "./Contact";
import Buttons from "./Buttons";

const Container = (props) => {
    return (
        <div>
       <Subheader contactsBlockName={props.contactsBlockName}/>
            <AddingForm/>
            <ol>
                {props.contacts.map(el=> <Contact contact={el}/>)}
            </ol>
            <Buttons buttonName='more'/>

        </div>
    );
};

export default Container;
