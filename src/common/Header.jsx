import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div >
    <div className='navclass'>
       <nav>
        <ul>
        <li> <Link to={'/'}>Password Generator</Link> </li>
        <li> <Link  to={'/weatherapp'}>Weather APP</Link> </li>
        <li> <Link to={'/course'}>Course</Link></li>
        <li><Link to={'/blog'}>Blog</Link></li>
      </ul>
      </nav>
    </div>
     
      
    </div>
  )
}

export default Header
