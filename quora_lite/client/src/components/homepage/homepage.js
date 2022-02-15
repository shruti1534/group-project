import React from 'react'
import './homepage.css'
import { useNavigate } from 'react-router-dom'
const Homepage = ({setuser})=>{
    const navigate = useNavigate();
    const handlechange =()=>{
        setuser({})
        navigate('/login')
    }
    return(
        <div className='homepage'>Homepage
        <button onClick={handlechange}>Logout</button>
        </div>
        
    )
}

export default Homepage