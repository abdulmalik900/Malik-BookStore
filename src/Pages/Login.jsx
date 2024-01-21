import React from 'react'
import Navbar from '../components/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link , useNavigate } from 'react-router-dom'

import axios from 'axios'
const Login = () => {

  const handleButtonClick = () => {
    
    toast.success('Thank you and Enjoy Books', {
      position: 'top-right'
    });
}


  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    axios.post('https://bookstore.cyclic.app/api/user/login', {
      email: email,
      password: password
    }).then(res => {
      console.log(res)
      toast.success('... ', {
        position: 'top-right',
        autoClose: 8000 // Delay in milliseconds (e.g., 3000ms = 3 seconds)
      });
      navigate('/books')
  
    }).catch(err => {
      console.log(err)
    })
  }


  return (
    <>
    <Navbar/>
<section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Login in to your account
        </h1>
        <form className="space-y-4  md:space-y-6" action="#" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Email" required />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="flex items-center justify-between">
          
          
            
            </div>
           
           <div> 
          <button type="submit" className="w-full text-white bg-emerald-400 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={handleButtonClick} >Login</button>
          <ToastContainer />
          </div>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
  Don’t have an account yet? <Link to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500" >Register</Link>
</p>
        </form>
        
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Login