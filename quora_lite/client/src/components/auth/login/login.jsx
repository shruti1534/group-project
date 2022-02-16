import axios from 'axios';
import React,{useState} from 'react'
import './login.css'
import {useNavigate} from 'react-router-dom'
import Profile from '../../../pages/profile/Profile';
const Login = ({setUser})=>{
    const [user, setuser] = useState({
      
        email:'',
        password:''
    });

    let navigate = useNavigate();

    const handlechange=(e)=>{
        const {name,value} = e.target;
       
        setuser({
            ...user,
            [name]:value
        })
    }
    const login =()=>{
        axios.post('http://localhost:8000/login',user)
        .then(res=>{console.log(res.data.message)
        setUser(res.data.user)
        navigate('/')
        })
    }

    const handleclick = () =>{
        
        navigate('/register')
    }
    return(
        <div className='login'>
            <h1>Login </h1>
            <input className='login-input' type='email'name='email' value={user.email} onChange={handlechange} placeholder='Email' />
            <input className='login-input' type='password'name='password' value={user.password} onChange={handlechange} placeholder='Password' />
           <button className='login-button' onClick={login}>Login</button>
            <p>Don't have an account?</p>
            <button className='login-button' onClick={handleclick}>Register</button>
        </div>
        // <Profile/>
    )
}

export default Login