import { Link } from 'react-router-dom'
import { useState } from 'react'
import './styles/index.scss'
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons"

import Sidebar from './Sidebar'
const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  const link = [
    {
      name: "Home",
      path: "/",
      icon: faHome
    },

    {
      name: "Recipes",
      path: "/recipes",
      icon: faList
    },

  
    {
      name: "Favorites",
      path: "/favoritesrecipes",
      icon: faList
    },
    
    {
      name:"CreateRecipe",
      path:"/form"
    }

   
  ]

  const closeSidebar = () => {
    setShowSidebar(false)
  }

  return (
    <>
      <div className='navbar container'>
        <a href="#!" className='logo'> MilkshakeParadise(Satisfy & Sip)</a>
        <div className='nav-links'>
          {link.map(link => (
            <Link to={link.path} key={link.name} className={link.name === 'Login' || link.name === 'Registration' ? 'button' : ''}>{link.name}</Link>
          ))}
        </div>
        <div
          onClick={() => setShowSidebar(true)}
          className={`${showSidebar ? "sidebar-btn active" : "sidebar-btn"}`}
        >
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
      </div>
      {showSidebar && <Sidebar close={closeSidebar} link={link} />}
    </>
  )
}

export default Navbar;