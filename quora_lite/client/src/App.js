import React, {useState,useEffect} from 'react'


import Register from './components/auth/register/Register'
import Homepage from './pages/homepage/homepage.js'
import Login from './components/auth/login/login'

import {BrowserRouter as Router,
  Routes,
Route
} from 'react-router-dom'
import Profile from './pages/profile/Profile';
import Feed from './pages/feed/feed.js';

function App() {

  const [user, setuser] = useState({});
  return(
    <>
      
      <Router>
          <Routes>
         
          <Route exact path = '/' element={ user && user._id?<Homepage setuser ={setuser} /> : <Login setUser={setuser} />} />
          <Route exact path = '/login' element={<Login setUser={setuser} />} />
          <Route exact path = '/register' element={<Register />} />

        </Routes>
      
        </Router>
        {/* <Profile/> */}
        {/* <Feed /> */}
      
  
    </>
    
  )
}

export default App;
