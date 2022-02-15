import axios from 'axios';
import React,{useState} from 'react'
import './login.css'
import {useNavigate} from 'react-router-dom'
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
            <input type='email'name='email' value={user.email} onChange={handlechange} placeholder='Email' />
            <input type='password'name='password' value={user.password} onChange={handlechange} placeholder='Password' />
           <button onClick={login}>Login</button>
            <p>Don't have an account?</p>
            <button onClick={handleclick}>Register</button>
        </div>
    )
}

export default Login