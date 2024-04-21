import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../common/Header'
import error_img from '../assets/error_page.jpeg'
function Error404() {
  return (
    <div>
        <Header/>
       <h1>Oops Page Not Found 😒😒</h1>
       <img src={error_img} alt='404 error In the page'/>
       <button> <Link to={'/'} >Go Back</Link></button>
    </div>
  )
}

export default Error404
