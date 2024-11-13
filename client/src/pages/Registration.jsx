import './Registration.css';
import { useState } from "react"
import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom";
// import { isAuthenticated } from '../Utils/auth'

const isAuthenticated = async () =>{
  const token = localStorage.getItem('sessionToken')
}

const Register = ()=>{
  const navigate = useNavigate();
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('') 
  const [ email, setEmail ] = useState('') 

  const registerUser = async ()=>{
    const  options = {
      method : 'POST',
      headers: {
        "Content-Type": "application/json",
        },
      body : JSON.stringify(
        {
          username: username, 
          password: password,
          email: email
        })
    }
    
    const response = await fetch('http://127.0.0.1:8000/users/register/', options)
    const data = await response.json()

    if (response.ok){
      console.log(data)
      localStorage.setItem("session", JSON.stringify(data.session));
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate('/recipes');
    } else{
      console.error('User not registered!')
    }
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    registerUser()
  }

  return (
    <>
      <Navbar/>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Register</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Register Now to your recipe app</p>
          </div>
          <form onSubmit={handleSubmit} className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} id="username" name="username" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id="password" name="password" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
            </div>
            <button type="submit" className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">Submit</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Register;