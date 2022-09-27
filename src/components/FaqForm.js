import React, { useState } from 'react'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const FaqForm = (props) => {

    const[inputId, setInputId] = useState('');
    const[inputName, setInputName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            inputId: inputId,
            text: inputName
        })
        
        setInputId('');
        setInputName('');
    }

    const handleId = (event) => {
        setInputId(event.target.value);
    }
    const handleName = (event) => {
        setInputName(event.target.value);
    }

  return (
    <>
        <form className='faq-form' onSubmit={handleSubmit}>
            <input 
                type="number"
                placeholder= "Category ID"
                value={inputId}
                name="text"
                required
                className="faq-input faq"
                onChange={handleId}
            />
            <input 
                type="text"
                placeholder= "Category Name"
                value={inputName}
                name="text"
                required
                className="faq-input faq"
                onChange={handleName}
            />
            <button className="faq-add-button faq" >Add</button>
            {/* <ToastContainer/> */}
        </form>

        
    </>
  )
}

export default FaqForm