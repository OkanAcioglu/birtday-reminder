import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()
  const displaySubmenu = (e) => {
    // in console as we hovering through each button value is the console is changing...
    //console.log(e.target)

    // gives us whether it is products , developers or company
    const page = e.target.textContent
    // gives us location
    const tempBtn = e.target.getBoundingClientRect()
    console.log(tempBtn) // getting back an object that contains coordinate and position info
    const center = (tempBtn.left + tempBtn.right) / 2 // center of each button
    const bottom = tempBtn.bottom - 3 // lift submenu 3px below
    openSubmenu(page, { center, bottom })
  }
  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='stripe' className='nav-logo' />
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
