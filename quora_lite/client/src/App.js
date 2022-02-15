import React, {useState,useEffect} from 'react'

import './App.css';

import Register from './components/register/register'
import Homepage from './components/homepage/homepage.js'
import Login from './components/login/login'

import {BrowserRouter as Router,
  Routes,
Route
} from 'react-router-dom'

function App() {

  const [user, setuser] = useState({});
  return(
    <div className='App'>
      
      <Router>
          <Routes>
         
          <Route exact path = '/' element={ user && user._id?<Homepage setuser ={setuser} /> : <Login setUser={setuser} />} />
          <Route exact path = '/login' element={<Login setUser={setuser} />} />
          <Route exact path = '/register' element={<Register />} />

        </Routes>
      
        </Router>
  
    </div>
  )
}

export default App;
