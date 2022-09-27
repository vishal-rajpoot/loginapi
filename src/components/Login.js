import React, { useState } from 'react'
import FaqList from './FaqList'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [show, setShow] = useState(true)
    const [inputUser, setinputUser] = useState('')
    const [inputEmail, setinputEmail] = useState('')
    const [inputPassword, setinputPassword] = useState('')
    console.log(inputUser);

    const handleinputEmail = (event) => {
        setinputEmail(event.target.value);
    }
    const handleinputUser= (event) =>{
        setinputUser(event.target.value)
    }
    const handleinputPassword= (event) =>{
        setinputPassword(event.target.value)
        console.log(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(inputEmail && inputUser && inputPassword){
            if(inputPassword.length > 5 ){
                setShow(false)
                setTimeout(() => {
                toast.success(`You are now logged in as ${inputUser}`);
                }, 1000);
                
            }
            else{
                toast.warning('Password should be more than 5 characters ')
            }
        }        
        else {
            toast.error('Please Fill all the details')
        }

    }
  return show ?
        <div className='login-cover'>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input className='login-input' type='email' required placeholder='Email' value={inputEmail} onChange={handleinputEmail}/>
                <input className='login-input' type='text' placeholder='Username' value={inputUser} onChange={handleinputUser}/>
                <input className='login-input' type='password' required placeholder='Password' value={inputPassword} onChange={handleinputPassword}/>
                <br/>
            <button className='login-btn' type='submit'>Login</button> 
            <ToastContainer  />
            </form>
        </div>
        :
        <div className='list'>
            <ToastContainer  />
            <FaqList/>
        </div> 
        
}

export default Login