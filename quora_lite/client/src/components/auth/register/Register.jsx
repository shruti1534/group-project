import React, {useState} from 'react'
import './register.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const Register = ()=>{
    const [user, setuser] = useState({
        name:'',
        email:'',
        password:'',
        reenterpassword:''
    });

    const handlechange=(e)=>{
        const {name,value} = e.target;
       
        setuser({
            ...user,
            [name]:value
        })
    }
   
let navigate = useNavigate();
 const handleclick = () =>{
        
        navigate('/login')
    }

    const register = ()=>{
        const {name,email,password,reenterpassword}=user;
        if(name && email && password &&(password===reenterpassword)){
            axios.post('http://localhost:8000/register',user)
            .then(res => {
                alert(res.data.message)
                navigate('/login')
            })
        }
        else{
            console.log('invalid input')
        }
    }

    return(
        <div className='register'>
            <h1 className='register-h1'>Register</h1>
            <input className='register-input' type = 'text' name='name' value={user.name} onChange={(event)=>{setuser({name:event.target.value})}} placeholder='username' />
            <input className='register-input' type='email'name='email' value={user.email} onChange={handlechange} placeholder='Email' />
            <input className='register-input' type='password'name='password' value={user.password} onChange={handlechange} placeholder='Password' />
            <input className='register-input' type='password'name='reenterpassword' value={user.reenterpassword} onChange={handlechange} placeholder = 're enter password' />

            <button className='register-button' onClick={register}>Register</button>
            <p>Or</p>
            <button className='register-button' onClick={handleclick}>Login</button>
        </div>
    )
}

export default Register