import React from 'react';

const AddingForm = () => {
    const addButtonHandler = () => {
        console.log('add button')
    }
    return (
        <div>
            <input type ="text" placeholder='Contact name'/>
            <button onClick={addButtonHandler}>Add</button>
        </div>
    );
};

export default AddingForm;
