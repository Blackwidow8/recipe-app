// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { 
  BrowserRouter as Router, 
  Routes,
  Route,
  Navigate 
} from 'react-router-dom'

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Home from './pages/Home';
import Recipe from './pages/Recipes';
import Registration from './pages/Registration';
import FavoriteRecipes from './components/FavoriteRecipe';
import React, {useState, useEffect} from 'react';
import { isAuthenticated } from './Utils/auth';


function App() {
  const [recipes, setRecipes] = useState ([]);
  const [token, setToken]= useState (localStorage.getItem('token'));

  useEffect(() =>{
    const fetchData = async ()=>{
      const response = await fetch('http://127.0.0.1:8000/recipes/')
      const data = await response.json()
      console.log(data)
      setRecipes(data);
    };
    fetchData();
  }, []);

  const handleLogin = (username, password) => {
    // Send a request to the login endpoint
    // If successful, store the returned token in the state and in localStorage
    setToken('dummy_token');
    localStorage.setItem('token', 'dummy_token');
  };

  const handleLogout = () => {
    // Clear the token from the state and from localStorage
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <>
      <Navbar/> 
      <div className='container main'> 
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/recipe" element={<Recipe recipes={recipes} setRecipes={setRecipes}/>} />
          <Route path="/login" element={isAuthenticated() ? <Navigate to="/recipe" /> : <Login handleLogin={handleLogin}/>} />
          <Route path="/registration" element={isAuthenticated() ? <Navigate to="/recipe" /> : <Registration handleLogin={handleLogin}/>} />
        
          <Route path="/favorites" element={<FavoriteRecipes recipes={recipes} />} />
        </Routes> 
      </div> 
      <Footer/> 
    </>
  )
}

export default App;