import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogIn from "./login"
import SignUp from './signup'
import Home from './pages/Home'
import Logout from './logout'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './style.css';
import ResetPassword from './pages/Authentification/Password Reset/ResetPassword';
import RequestResetPassword from './pages/Authentification/Password Reset/RequestResetPassword';
import CreatePost from './pages/createPost';
import Profile from './pages/Profile';


function App()
{ 
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LogIn/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/forgotpassword' element={<RequestResetPassword/>}></Route>
        <Route path='/reset-password/:token' element={<ResetPassword/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/logout' element={<Logout/>}></Route>
        <Route path='/Profile' element={<Profile/>}></Route>
        <Route path='/createPost' element={<CreatePost/>}></Route>
      </Routes>
    </BrowserRouter>
    
    
  )
}

export default App;