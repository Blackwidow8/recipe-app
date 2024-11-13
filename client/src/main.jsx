import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Recipes from './pages/Recipes.jsx'
import Login from './pages/Login.jsx'
import Registration from './pages/Registration.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import FavoriteRecipes from './components/FavoriteRecipe.jsx'
import Form from './components/Form.jsx'
import { isAuthenticated } from './Utils/auth.jsx'

const path = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/recipes',
    element: <Recipes/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path:'/registration',
    element:<Registration/>
  },
  {
    path:'/navbar',
    element:<Navbar/>
  },
  {
    path:'/hero',
    element:<Hero/>
  },
  {
    path: '/footer',
    element:<Footer/>
  },
 
  {
    path: '/favoritesrecipes',
    element: <FavoriteRecipes/>
  },
  {
    path:'/form',
    element: <Form/>
  }



])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={path}/>
  </React.StrictMode>,
)
