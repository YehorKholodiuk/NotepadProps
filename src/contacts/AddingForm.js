import React from 'react';

const AddingForm = () => {
    return (
        <div>
            <input type ="text" placeholder='Contact name'/>
            <button onClick={() => console.log('add button')}>Add</button>
        </div>
    );
};

export default AddingForm;
