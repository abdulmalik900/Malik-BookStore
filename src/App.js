import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Books from './Pages/Books';
import Login from './Pages/Login';
import Error404 from './Pages/Error404';
import ContactUs from './Pages/ContactUs';
import Register from './Pages/Register';

const App = () => {
  return (
    <>
     
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/books' element={<Books />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
     
      </>
  );
}

export default App;
