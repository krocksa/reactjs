import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
      <Link to="/" className='logo' >
        <h1>KrocksaShop</h1>
      </Link>
      <ul className='menu'>
        <li><Link className='menu-link' to="/" >Inicio</Link></li>
        <li><Link className='menu-link' to="/Medias" >Medias</Link></li>
        <li><Link className='menu-link' to="/Pantalones" >Pantalones</Link></li>
        <li><Link className='menu-link' to="/Swetters" >Swetters</Link></li>
        <li><Link className='menu-link' to="/Franelas" >Franelas</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar